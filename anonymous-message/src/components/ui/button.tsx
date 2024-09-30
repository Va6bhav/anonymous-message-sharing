import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60', // General styling
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl', // Gradient background
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
        outline:
          'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 shadow-sm',
        secondary:
          'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm hover:shadow-md',
        ghost:
          'text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-150',
        link: 'text-blue-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-3', // Slightly bigger buttons
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-12 w-12', // For icon buttons
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
