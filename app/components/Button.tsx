import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";

export type ButtonFill = "contained" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fill?: ButtonFill;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  fill = "contained",
  icon,
  children = "Button",
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-fill={fill}
      disabled={disabled}
      className={`btn ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
