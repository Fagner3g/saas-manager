"use client";

import type { Context } from "react";

import { Button } from "@/components/ui/button";
import { useMultiStepForm } from "@/hooks/multi-step-form";
import { cn } from "@/lib/utils";
import type { UseMultiStepFormTypeOptions } from "@/types/multi-step-form";

interface MultiStepNavButtonsProps<T> {
  previousLabel: string;
  nextLabel: string;
  endStepLabel: string;
  context: Context<T>;
  debug?: boolean;
}
// biome-ignore lint: must be any as it is a any object
function MultiStepNavButtons<T extends UseMultiStepFormTypeOptions<any>>({
  previousLabel,
  nextLabel,
  endStepLabel,
  debug = false,
  context,
}: MultiStepNavButtonsProps<T>) {
  const { currentStep, isFirstStep, isLastStep, goToStep, previousStep } = useMultiStepForm(context);
  return (
    <div className="mt-4 flex w-full flex-row justify-between">
      {debug && (
        <pre className="absolute bottom-2 right-2 flex h-32 w-32 items-center justify-center rounded-md border-2 bg-yellow-400 text-sm text-black">{`Current Step: ${currentStep}`}</pre>
      )}
      <Button
        variant={"default"}
        size={"sm"}
        onClick={() => {
          previousStep();
        }}
        type="button"
        className={cn(`${isFirstStep ? "invisible" : "visible"}`)}
      >
        {previousLabel}
      </Button>
      <Button variant={"default"} size={"sm"} type="submit">
        {`${isLastStep ? endStepLabel : nextLabel}`}
      </Button>
    </div>
  );
}

export default MultiStepNavButtons;
