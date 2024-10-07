import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative overflow-hidden h-[15px] w-[300px] bg-[#2126AB]",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-[15px] w-[300px] flex-1 bg-[#EDEDED] transition-all"
      style={{ transform: `translateX(${(1 - (value || 0) / 10000) * 1000}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
