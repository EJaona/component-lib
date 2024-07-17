import classNames from 'classnames';
import React, {
  HTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { scrollIntoView } from 'seamless-scroll-polyfill';
import { Button } from '../buttons/Button';

type Variant = 'standard' | 'scroll' | 'auto-play';

type baseProps = HTMLAttributes<HTMLDivElement> & {
  variant: Variant;
  children: React.ReactNode[];
};

type autoPlay = {
  variant: 'auto-play';
  /** autoplay interval time in seconds */
  interval: number;
  progression?: 'linear' | 'random';
  behavior?: 'auto' | 'smooth';
};

type noneAutoPlay = {
  variant: Exclude<Variant, 'auto-play'>;
  interval: never;
  progression?: never;
  behavior?: never;
};

export type carouselProps = baseProps & (autoPlay | noneAutoPlay);

export const Carousel = forwardRef(
  (props: carouselProps, ref: Ref<HTMLDivElement>) => {
    const { className, children, variant } = props;
    const contentParentRef = useRef<HTMLDivElement>(null);

    const [indexOfDisplayedContent, setIndexOfDisplayedContent] = useState(0);

    //NOTE: observing current visible child content when user scrolls/swipes to navigate
    const { target: observerElementTarget } = useIntersectionObserver(
      '.content',
      {
        threshold: 0.5,
        root: contentParentRef.current,
      }
    );

    useEffect(() => {
      let autoPlayTimer: number;

      if (isScrollVariant && observerElementTarget instanceof Element) {
        // Note:Element was manually scrolled into view, so we change indexOfDisplayedContent to update the active indicator
        setIndexOfDisplayedContent(Number(observerElementTarget.id));
      }

      if (isAutoplayVariant) {
        const getRandomIndex = () =>
          Math.floor(Math.random() * (children.length - 1));
        const getNextIndex = () =>
          indexOfDisplayedContent < children.length - 1
            ? indexOfDisplayedContent + 1
            : 0;

        autoPlayTimer = window.setInterval(() => {
          if (props.progression === 'random') {
            const nextRandomContentIndex = getRandomIndex();
            scrollElementIntoView(nextRandomContentIndex, {
              behavior: props.behavior ?? 'auto',
            });
          } else {
            const nextLinearContentIndex = getNextIndex();
            setIndexOfDisplayedContent(nextLinearContentIndex);
            scrollElementIntoView(nextLinearContentIndex, {
              behavior: props.behavior ?? 'auto',
            });
          }
        }, props.interval * 1000);
      }

      return () => {
        clearInterval(autoPlayTimer);
      };
    }, [indexOfDisplayedContent, observerElementTarget]);

    const handleSwitchContent = (nextIndex: number) => {
      setIndexOfDisplayedContent(() => nextIndex);

      if (isScrollVariant)
        return scrollElementIntoView(nextIndex, { block: 'nearest' });
      return scrollElementIntoView(nextIndex, { behavior: 'auto' });
    };

    const scrollElementIntoView = (
      index: number,
      options?: {
        behavior?: 'smooth' | 'auto';
        block?: 'start' | 'end' | 'center' | 'nearest';
        inline?: 'start' | 'end' | 'center' | 'nearest';
      }
    ) => {
      const element = document.getElementById(index.toString());

      if (element instanceof Element) {
        scrollIntoView(element, {
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
          ...options,
        });
      }
    };

    const isScrollVariant = variant === 'scroll';
    const isAutoplayVariant = variant === 'auto-play';

    return (
      <div
        ref={ref}
        className={classNames([
          'w-full h-full flex flex-col justify-center items-center overflow-hidden',
          //  className
        ])}
        {...props}
      >
        <div
          ref={contentParentRef}
          className={classNames([
            `relative flex w-full h-full items-center overflow-hidden scrollbar-none gap-5 `,
            isScrollVariant &&
              'scroll-smooth overflow-x-auto snap-x snap-mandatory',
          ])}
        >
          {children.map((child, index) => (
            <div
              key={index}
              id={index.toString()}
              className={classNames([
                'relative content flex-shrink-0 flex w-full h-full justify-center items-center overflow-hidden',
                isScrollVariant && 'snap-center',
                className,
              ])}
            >
              {child}
            </div>
          ))}
        </div>

        <div
          className={classNames([
            'navigation-dots w-full flex justify-evenly py-5',
            isAutoplayVariant && 'hidden',
          ])}
        >
          {children.map((_node, index) => (
            <IndicatorDot
              key={index}
              onClick={() => handleSwitchContent(index)}
              active={indexOfDisplayedContent === index}
              className="flex justify-center items-center rounded-full"
            >
              {(index + 1).toString()}
            </IndicatorDot>
          ))}
        </div>
      </div>
    );
  }
);

function IndicatorDot({
  children,
  className,
  active,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  active: boolean;
}) {
  return (
    <Button
      active={active}
      className={classNames(['px-2 ', className])}
      {...props}
    >
      <p className="bg-dark-grey bg-clip-text mix-blend-difference invert grayscale">
        {' '}
        {children}{' '}
      </p>
    </Button>
  );
}

export function useIntersectionObserver(
  observable: string,
  options?: { threshold?: number; rootMargin?: string; root?: Element | null }
) {
  const [target, setIntersectingTarget] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(element => {
        if (element.isIntersecting) {
          setIntersectingTarget(element.target);
        }
      });
    }, options);

    const content = document.querySelectorAll(`${observable}`);

    content.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { target };
}
