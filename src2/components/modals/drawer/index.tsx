import classNames from 'classnames';
import {
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import React, { Ref, forwardRef } from 'react';

type drawerPositions =
  | 'left-center'
  | 'right-center'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
type variant = 'top' | 'right' | 'bottom' | 'left';
type size = 'sm' | 'md' | 'lg';

interface baseProps extends HTMLAttributes<HTMLSpanElement> {
  isOpen: boolean;
  variant: variant;
  positioned?: drawerPositions;
  closeDrawer: () => void;
}

type backdrop = {
  backdrop: true;
  /** the size of background blur to apply behind the modal if backdrop props is true*/
  blur?: size;
  /** how dark of a background to apply behind the modal if backdrop props is true*/
  opacity?: size;
};

type backdropNone = {
  backdrop?: false;
  blur?: never;
  opacity?: never;
};

type glassType = {
  glass?: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblurr?: size;
};

type standardType = {
  glass?: never;
  glassblurr?: never;
};

export type DrawerProps = baseProps &
  (backdrop | backdropNone) &
  (glassType | standardType);

export const Drawer = forwardRef(
  (props: DrawerProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const {
      isOpen,
      children,
      className,
      positioned,
      variant,
      backdrop,
      glass,
      closeDrawer,
      ...otherProps
    } = props;

    const userSetPositionMap: { [option in drawerPositions]: string } = {
      'top-left': 'items-start justify-start',
      'top-center': 'items-start justify-center',
      'top-right': 'items-start justify-end',
      'bottom-left': 'items-end justify-start',
      'bottom-center': 'items-end justify-center',
      'bottom-right': 'items-end justify-end',
      'left-center': 'items-center justify-start',
      'right-center': 'items-center justify-end',
    };

    const openAnimationMap: {
      [option in variant]: {
        open: string;
        close: string;
        autoPositioning: string;
      };
    } = {
      top: {
        open: 'translate-y-0',
        close: '-translate-y-full',
        autoPositioning: 'justify-start items-start',
      },
      right: {
        open: 'translate-x-0',
        close: 'translate-x-full',
        autoPositioning: 'justify-end items-start',
      },
      bottom: {
        open: 'translate-y-0',
        close: 'translate-y-full',
        autoPositioning: 'justify-start items-end',
      },
      left: {
        open: 'translate-x-0',
        close: '-translate-x-full',
        autoPositioning: 'justify-start items-start',
      },
    };

    const backdropBlurMap: { [option in size]: string } = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
    };

    const backdropOpacityMap: { [option in size]: string } = {
      sm: 'backdrop-brightness-[.75]',
      md: 'backdrop-brightness-[.5]',
      lg: 'backdrop-brightness-[.1]',
    };

    const userSetPosition = positioned && userSetPositionMap[positioned];
    const {
      open: openAnimation,
      close: closeAnimation,
      autoPositioning,
    } = openAnimationMap[variant];

    const backdropBrightness =
      props.backdrop && backdropOpacityMap[props.opacity ?? 'sm'];
    const backdropBlur =
      props.backdrop && props.blur && backdropBlurMap[props.blur];
    const glassBackgroundBlur =
      glass && backdropBlurMap[props.glassblurr ?? 'sm'];

    const hideDrawerOnClose = !isOpen && 'animate-hide-drawer';

    const handleClose = (e: React.MouseEvent<Element>) => {
      if (e.target instanceof HTMLSpanElement)
        e.target.id === 'drawer' && closeDrawer();
    };

    const [animateOpen, setAnimateOpen] = useState(false);

    // Accessability setup
    const innerRef = useRef<HTMLSpanElement>(null);
    useImperativeHandle(forwardedRef, () => innerRef.current!, []);

    const focusableChildren =
      innerRef.current &&
      innerRef.current.querySelectorAll(
        'a, button, input, textarea, select, [href], [tabindex]:not([tabindex="-1"]) '
      );

    useEffect(() => {
      let handleKeydown: (event: KeyboardEvent) => void;

      if (isOpen) {
        setTimeout(() => {
          setAnimateOpen(true);
        }, 100);

        if (focusableChildren) {
          const lastFocusedItem = document.activeElement as HTMLElement;
          const firstFocusableChild = focusableChildren[0] as HTMLElement;
          const lastFocusableChild = focusableChildren[
            focusableChildren.length - 1
          ] as HTMLElement;

          firstFocusableChild.focus();

          handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
              closeDrawer();
              lastFocusedItem.focus();
            } else if (event.key === 'Tab') {
              if (
                event.shiftKey &&
                document.activeElement === firstFocusableChild
              ) {
                event.preventDefault();
                lastFocusableChild.focus();
              } else if (
                !event.shiftKey &&
                document.activeElement === lastFocusableChild
              ) {
                event.preventDefault();
                firstFocusableChild.focus();
              }
            }
          };

          if (innerRef.current)
            innerRef.current.addEventListener('keydown', handleKeydown);
        }
      } else {
        setAnimateOpen(false);
      }

      return () => removeEventListener('keydown', handleKeydown);
    }, [isOpen]);

    return (
      <span
        id="drawer"
        ref={innerRef}
        className={classNames([
          'absolute h-full w-full flex overflow-hidden',
          autoPositioning,
          userSetPosition,
          backdropBrightness,
          backdropBlur,
          hideDrawerOnClose,
        ])}
        onClick={handleClose}
      >
        <span
          className={classNames([
            'flex justify-center items-center transition ease duration-[500ms]',
            glass && 'bg-white/[.07] shadow-button-up',
            animateOpen ? openAnimation : closeAnimation,
            glassBackgroundBlur,
            className,
          ])}
          {...otherProps}
        >
          {children}
        </span>
      </span>
    );
  }
);
