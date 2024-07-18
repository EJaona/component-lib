import React, { HTMLAttributes, Ref, forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from '../../dynamicIcon';

type variant = 'up' | 'down' | 'right' | 'left' | 'scale';
type size = 'sm' | 'md' | 'lg';

type baseProps = {
  variant?: variant;
  backdrop?: boolean;
  glass?: boolean;
  close: () => void;
};

type dialogProps = HTMLAttributes<HTMLDialogElement> &
  baseProps &
  (backdrop | backdropNone) &
  (glassType | standardType);

type backdrop = {
  backdrop: true;

  /** the size of background blur to apply behind the modal if backdrop props is true*/
  blur?: size;
  /** how dark of a background to apply behind the modal if backdrop props is true*/
  opacity?: size;
};

type backdropNone = {
  backdrop?: never;
  blur?: never;
  opacity?: never;
};

type glassType = {
  glass: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblur: size;
};

type standardType = {
  glass?: never;
  glassblur?: never;
};

export const Popup = forwardRef(
  (props: dialogProps, ref: Ref<HTMLDialogElement>) => {
    const {
      className,
      children,
      variant = 'down',
      glass,
      backdrop,
      close,
      ...rest
    } = props;

    const handleClickAwayClose = (e: React.MouseEvent<Element>) => {
      if (e.target instanceof HTMLDialogElement)
        e.target.nodeName === 'DIALOG' && close();
    };

    const backdropBlurMap: { [option in size]: string } = {
      sm: 'backdrop:backdrop-blur-sm',
      md: 'backdrop:backdrop-blur-md',
      lg: 'backdrop:backdrop-blur-lg',
    };
    const backdropOpacityMap: { [option in size]: string } = {
      sm: 'backdrop:backdrop-brightness-[.75]',
      md: 'backdrop:backdrop-brightness-[.5]',
      lg: 'backdrop:backdrop-brightness-[.1]',
    };

    const animationMap: {
      [option in variant]: { open: string; close: string };
    } = {
      up: {
        open: 'translate-y-20 open:animate-modal-open',
        close: '[&:not([open])]:animate-modal-close-down',
      },
      down: {
        open: '-translate-y-20 open:animate-modal-open',
        close: '[&:not([open])]:animate-modal-close-up',
      },
      right: {
        open: '-translate-x-20 open:animate-modal-open',
        close: '[&:not([open])]:animate-modal-close-right',
      },
      left: {
        open: 'translate-x-20 open:animate-modal-open',
        close: '[&:not([open])]:animate-modal-close-left',
      },
      scale: {
        open: 'scale-0 open:animate-modal-scale-open',
        close: '[&:not([open])]:animate-modal-scale-close',
      },
    };

    const { open: openAnimation, close: closeAnimation } = animationMap[
      variant
    ];

    const backdropBlur = backdrop && props.blur && backdropBlurMap[props.blur];
    const backdropBrightness =
      backdrop && props.opacity && backdropOpacityMap[props.opacity];
    const shadowEffect = glass
      ? 'bg-white/[.07] shadow-button-up'
      : 'shadow-inset';
    const glassBackgroundBlur =
      glass && backdropBlurMap[props.glassblur ?? 'sm'].split(':')[1];

    return (
      <dialog
        ref={ref}
        className={classNames([
          'inset-0 block opacity-0 border-[5px] border-transparent',
          'drop-shadow-scaled',
          shadowEffect,
          glassBackgroundBlur,
          backdropBrightness,
          backdropBlur,
          openAnimation,
          closeAnimation,
          className,
        ])}
        onClick={handleClickAwayClose}
        {...rest}
      >
        <div className={classNames(['relative w-ful h-full flex '])}>
          {children}

          <Icon
            name="x-circle"
            onClick={() => close()}
            className={classNames([
              'absolute right-1 top-1 cursor-pointer self-start brightness-75 drop-shadow-scaled hover:brightness-100 px-1 text-3xl',
            ])}
          />
        </div>
      </dialog>
    );
  }
);
