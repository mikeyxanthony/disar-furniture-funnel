import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-2xl border border-rustic-200 bg-white px-4 py-2 text-sm text-rustic-900 shadow-sm transition-colors placeholder:text-rustic-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rustic-500 focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
