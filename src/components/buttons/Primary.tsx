import classNames from 'classnames';
import React, { HTMLAttributes, Ref, forwardRef, useState } from 'react';

type size = 'sm' | 'md' | 'lg';

type baseProps = HTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  glass?: boolean;
};

type glassType = {
  glass: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblurr: size;
};

type standardType = {
  glass?: never;
  glassblurr?: never;
};

export type buttonProps = baseProps & (glassType | standardType);

export const Primary = forwardRef(
  (props: buttonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, className, active, glass, onClick, ...rest } = props;
    const [pressed, setPressed] = useState(false);

    const backdropBlurMap: { [option in size]: string } = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
    };
    const pressedBlurMap: { [option in size]: string } = {
      sm: 'backdrop-blur-[2.25px]',
      md: 'backdrop-blur-[5.25px]',
      lg: 'backdrop-blur-[8.25px]',
    };

    const glassBackgroundBlur =
      glass && backdropBlurMap[props.glassblurr ?? 'sm'];
    const pressedBackgroundBlur =
      glass && pressedBlurMap[props.glassblurr ?? 'sm'];

    return (
      <button
        ref={ref}
        type="button"
        onMouseDown={() => setPressed(true)}
        onMouseUp={e => {
          setPressed(false), onClick && onClick(e);
        }}
        className={classNames([
          'relative overflow-hidden border-2 border-transparent',
          pressed || active
            ? 'shadow-button-down scale-[.98]'
            : 'shadow-button-up',
          glass && (pressed || active) && pressedBackgroundBlur,
          glassBackgroundBlur,
          className,
        ])}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
