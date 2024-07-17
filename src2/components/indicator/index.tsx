import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Ref, forwardRef } from 'react';

export type indicatorProps = HTMLAttributes<HTMLDivElement> & {
  active: boolean;
};

export const Indicator = forwardRef(
  (props: indicatorProps, ref: Ref<HTMLDivElement>) => {
    const { active, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={classNames([
          `absolute block h-[1px] w-full bg-black z-10`,
          active ? 'animate-add-indicator' : 'animate-remove-indicator',
          className,
        ])}
        {...rest}
      />
    );
  }
);
