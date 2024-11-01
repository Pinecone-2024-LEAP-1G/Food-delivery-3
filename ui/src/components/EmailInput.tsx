import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const EmailInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
        placeholder="Нэрээ оруулна уу"
        ref={ref}
        {...props}
      />
    );
  }
);
EmailInput.displayName = "EmailInput";

export { EmailInput };
