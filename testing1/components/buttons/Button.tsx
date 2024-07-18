import classNames from 'classnames';
import React, { ComponentPropsWithRef, Ref, forwardRef, useState } from 'react';

type size = 'sm' | 'md' | 'lg';

type baseProps = ComponentPropsWithRef<'button'> & {
  active?: boolean;
  glass?: boolean;
};

type glassType = {
  glass?: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblur?: size;
};

type standardType = {
  glass?: false;
  glassblur?: never;
};

export type buttonProps = baseProps & (standardType | glassType);

export const Button = forwardRef(
  (props: buttonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      children,
      className,
      active,
      glass,
      onClick,
      type,
      ...rest
    } = props;
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
      glass && backdropBlurMap[props.glassblur ?? 'sm'];
    const pressedBackgroundBlur =
      glass && pressedBlurMap[props.glassblur ?? 'sm'];

    return (
      <button
        ref={ref}
        type={type}
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
