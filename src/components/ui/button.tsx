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
  
  // @ts-ignore
  return (<button className={clsx("text-primary", className)} {...props}>
      {children}
    </button>
  )
}