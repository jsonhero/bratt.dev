import { clsx } from 'clsx';
import { HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx("text-primary", className)} {...props}>
      {children}
    </button>
  )
}