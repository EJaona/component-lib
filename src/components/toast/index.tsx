import React, {
  ComponentPropsWithRef,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
import { Icon } from '../dynamicIcon';

type ToastProps = ComponentPropsWithRef<'div'> & {
  message: string | null | undefined;
  //**Open duration in seconds */
  duration?: number;
  glass?: boolean;
  close: () => void;
};

type size = 'sm' | 'md' | 'lg';

type glassType = {
  glass: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblurr: size;
};

type standardType = {
  glass?: false;
};

export const Toast = forwardRef(
  (
    props: ToastProps & (glassType | standardType),
    ref: Ref<HTMLDivElement>
  ) => {
    const { message, close, duration, glass, className, ...rest } = props;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (message) {
        setIsOpen(true);
        setTimeout(
          () => {
            handleClose();
          },
          duration ? duration * 1000 : 3000
        );
      }
    }, [message]);

    const handleClose = () => {
      setIsOpen(false);

      setTimeout(() => {
        close();
      }, duration ?? 300);
    };

    const glassblurr =
      props.glass && props.glassblurr && getglassblurrLevel(props.glassblurr);

    return (
      <div
        ref={ref}
        className={classNames([
          `absolute top-0 -translate-y-full transition ease duration-300 flex justify-between`,
          isOpen && 'translate-y-1/2',
          glass && 'bg-white/[.07] shadow-button-up',
          glassblurr,
          className,
        ])}
        {...rest}
      >
        <span className={classNames([`flex-1 text-center p-5`])}>
          {message}
        </span>

        <Icon
          onClick={handleClose}
          name="x-circle"
          className="text-2xl self-start brightness-75 hover:brightness-100 px-1"
        />
      </div>
    );
  }
);

const getglassblurrLevel = (key: size) => {
  const backdropBlurMap: { [option in size]: string } = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  return backdropBlurMap[key];
};
