"use client";
import type { Context } from "react";

import { buttonVariants } from "@/components/ui/button";
import { containerMultiStepNavbar as container } from "@/constants/framer-motion";
import { useMultiStepForm } from "@/hooks/multi-step-form";
import { cn } from "@/lib/utils";
import type { UseMultiStepFormTypeOptions } from "@/types/multi-step-form";
import { motion } from "framer-motion";

interface MultiStepNavBarProps<T> extends React.HTMLAttributes<HTMLElement> {
  context: Context<T>;
}
// biome-ignore lint: must be any as it is a any object
function MultiStepNavbar<T extends UseMultiStepFormTypeOptions<any>>({
  className,
  context,
  ...props
}: MultiStepNavBarProps<T>) {
  const { currentStepLabel, labels } = useMultiStepForm(context);
  return (
    <ul
      className={cn(
        "flex items-center justify-around rounded-lg border-2 sm:min-w-36 sm:flex-col sm:items-start sm:justify-start lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {labels.map((label) => (
        <li
          key={label}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            currentStepLabel === label ? "" : "",
            "w-full rounded-none",
          )}
        >
          <div className="relative">
            {label}
            {currentStepLabel === label ? (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[0.15rem] bg-primary"
                layoutId="underline"
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MultiStepNavbar;
