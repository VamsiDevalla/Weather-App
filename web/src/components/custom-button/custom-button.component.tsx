import React, { ComponentPropsWithoutRef } from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, type, ...otherProperties }: ComponentPropsWithoutRef<'button'>): JSX.Element => {
  return (
    <button
      className="custom-button"
      type={type === 'submit' ? 'submit' : 'button'}
      {...otherProperties}
    >
      {children}
    </button>
  );
};

export default CustomButton;