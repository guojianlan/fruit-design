/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import cx from 'classnames';
import { tuple } from '../_util/type';

export type ButtonSizeType = 'large' | 'small' | 'middle' | undefined;

export const ButtonTypes = tuple('default', 'primary', 'ghost', 'link', 'text');
export type ButtonType = typeof ButtonTypes[number];
export const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
  size?: ButtonSizeType;
  type?: ButtonType;
  children?: React.ReactNode;
}
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export type ButtonProps = Partial<NativeButtonProps>;
export const Button: FC<ButtonProps> = (props) => {
  const { size: customSize, type, children, htmlType, ...rest } = props;
  const classes = cx('btn', {
    [`btn-${customSize}`]: customSize,
  });
  return (
    <button {...(rest as NativeButtonProps)} type={htmlType} className={classes}>
      {children}
    </button>
  );
};
export default Button;
