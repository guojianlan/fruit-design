import React, { FC } from "react";
import cx from "classnames";
export type ButtonSizeType = "large" | "small" | "middle" | undefined;
export const tuple = <T extends string[]>(...args: T) => args;
export const ButtonTypes = tuple("default", "primary", "ghost", "link", "text");
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  size?: ButtonSizeType;
  type?: ButtonType;
}

export const Button: FC<ButtonProps> = (props) => {
  const { size: customSize, type, ...rest } = props;
  console.log(type);
  const classes = cx("btn", {
    [`btn-${customSize}`]: customSize,
  });
  return (
    <button className={classes} {...rest}>
      {props.children}
    </button>
  );
};
export default Button;
