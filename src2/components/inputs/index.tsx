import React, {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  Ref,
  forwardRef,
} from 'react';
import classNames from 'classnames';
import { Icon } from '../dynamicIcon';

type Variant = 'standard' | 'rounded' | 'underline';
type size = 'sm' | 'md' | 'lg';

type generalProps = {
  variant: Variant;
  glass?: boolean;
  scaleOnFocus?: boolean;
};

type rounded = {
  variant: 'rounded';
  radius: size;
};

type notRounded = {
  variant: 'standard' | 'underline';
  radius?: never;
};

type glassType = {
  glass?: true;
  /** the size of blur to apply to the modal if glass prop is true*/
  glassblurr?: size;
};

type standardType = {
  glass?: false;
  glassblurr?: never;
};

export type inputProps = InputHTMLAttributes<HTMLInputElement> &
  generalProps &
  (rounded | notRounded) &
  (standardType | glassType);
export type textAreaProps = ComponentPropsWithoutRef<'textarea'> &
  generalProps &
  (rounded | notRounded) &
  (standardType | glassType);

export const Input = forwardRef(
  (props: inputProps, ref: Ref<HTMLInputElement>) => {
    const {
      name,
      required,
      type,
      variant,
      glass,
      scaleOnFocus,
      className,
      ...rest
    } = props;

    const borderStyleMap: { [option in Variant]: string } = {
      standard: 'border-[3px]',
      rounded: 'border-[3px]',
      underline: 'border-b-[3px] border-dark-grey',
    };

    const roundedBorderSize: { [option in size]: string } = {
      sm: 'rounded-lg',
      md: 'rounded-2xl',
      lg: 'rounded-3xl',
    };

    const shadowMap: { [variant in Variant]: string } = {
      rounded: 'drop-shadow-standard shadow-inner',
      standard: 'drop-shadow-standard shadow-inner',
      underline: 'drop-shadow-underline',
    };

    const dropShadow = shadowMap[variant];
    const underlineShadow =
      variant === 'underline' &&
      'shadow-none border-b-5 border-black/[.5] focus:shadow-none';

    const borderStyle = borderStyleMap[variant];
    const borderRadius =
      variant === 'rounded' && roundedBorderSize[props.radius];

    return (
      <div className={classNames([`relative flex flex-col group/input`])}>
        <input
          id={name}
          ref={ref}
          type={type}
          name={name}
          placeholder=" "
          autoComplete="_"
          required={required}
          className={classNames([
            `peer transition ease duration-500 bg-inherit shadow-input-out`,
            `border-transparent p-3 w-full brightness-95`,
            `focus:outline-none focus:ring focus:shadow-input-in focus:scale-[.99] focus:brightness-100`,
            scaleOnFocus && 'focus:drop-shadow-scaled focus:scale-[1.05]',
            glass && 'bg-black/[.07] backdrop-blur-lg backdrop-brightness-75',
            underlineShadow,
            borderStyle,
            borderRadius,
            dropShadow,
            className,
          ])}
          {...rest}
        />

        <label
          id={name}
          htmlFor={name}
          className={classNames(
            `
                    absolute -top-[1.5rem] left-3 translate-y-[2.5rem] uppercase tracking-[.2rem] transition ease duration-500`,

            'brightness-[110%]',

            'group-focus-within/input:translate-y-0',

            'peer-[:not(:placeholder-shown)]:translate-y-0',

            required &&
              `-translate-x-[1rem] peer-valid:translate-x-0 peer-valid:[&>i]:scale-100
                    after:content-['*'] after:ml-0.5 after:text-red-500 peer-valid:after:content-['']`
          )}
        >
          {required ? (
            <Icon
              name="check-circle"
              className={`text-green-600 transition ease duration-500 scale-0`}
            />
          ) : null}

          <p className="inline bg-gray-500 bg-clip-text text-transparent invert grayscale mix-blend-difference">
            {name}
          </p>
        </label>
      </div>
    );
  }
);

export const TextArea = forwardRef(
  (props: textAreaProps, ref: Ref<HTMLTextAreaElement>) => {
    const {
      name,
      required,
      variant,
      scaleOnFocus,
      glass,
      className,
      ...rest
    } = props;

    const borderStyleMap: { [option in Variant]: string } = {
      standard: 'border-[3px]',
      rounded: 'border-[3px]',
      underline: 'border-b-[3px] border-dark-grey',
    };

    const roundedBorderSize: { [option in size]: string } = {
      sm: 'rounded-lg',
      md: 'rounded-2xl',
      lg: 'rounded-3xl',
    };

    const shadowMap: { [variant in Variant]: string } = {
      rounded: 'drop-shadow-standard shadow-inner',
      standard: 'drop-shadow-standard shadow-inner',
      underline: 'drop-shadow-underline',
    };

    const underlineShadow =
      variant === 'underline' &&
      'shadow-none border-b-5 border-black/[.5] focus:shadow-none';

    const dropShadow = shadowMap[variant];
    const borderStyle = borderStyleMap[variant];
    const borderRoundness =
      variant === 'rounded' && roundedBorderSize[props.radius];

    return (
      <div
        className={classNames([
          `relative flex flex-col group/input bg-transparent`,
        ])}
      >
        <textarea
          id={name}
          ref={ref}
          name={name}
          placeholder=" "
          required={required}
          className={classNames([
            `peer transition ease duration-500 bg-inherit shadow-input-out`,
            `border-transparent px-[1rem] w-full brightness-95`,
            `focus:outline-none focus:ring focus:shadow-input-in focus:scale-[.99] focus:brightness-100`,
            scaleOnFocus && 'focus:drop-shadow-scaled focus:scale-[1.05]',
            glass && 'bg-black/[.07] backdrop-blur-lg backdrop-brightness-75',
            underlineShadow,
            borderStyle,
            borderRoundness,
            dropShadow,
            className,
          ])}
          {...rest}
        />

        <label
          id={name}
          htmlFor={name}
          className={classNames(
            `
                    absolute -top-[2rem] left-3 translate-y-[5.5rem] uppercase tracking-[.2rem] transition ease duration-500`,

            'brightness-[110%]',

            'group-focus-within/input:-translate-y-0 group-focus-within/input:-translate-x-2',

            'peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:-translate-x-2',

            required &&
              `-translate-x-[1rem] group-focus-within/input:-translate-x-[2rem] peer-valid:[&>*]:scale-100 
                    after:content-['*'] after:ml-0.5 after:text-red-500 peer-valid:after:content-['']
                    `
          )}
        >
          {required ? (
            <Icon
              name="check-circle"
              className={`text-green-600 transition ease duration-300 scale-0`}
            />
          ) : null}
          <p className="inline bg-gray-500 bg-clip-text text-transparent invert grayscale mix-blend-difference">
            {name}
          </p>
        </label>
      </div>
    );
  }
);
