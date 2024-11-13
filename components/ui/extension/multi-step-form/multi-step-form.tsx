"use client";
import React, { PropsWithChildren } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card";

import { CampaignFormContext } from "@/app/example/multi-step-form/campaign/_components/multi-step-campaign-config";
import { Form } from "@/components/ui/form";
import { containerMultiStepForm as container } from "@/constants/framer-motion";
import { useMultiStepForm } from "@/hooks/multi-step-form";
import { motion } from "framer-motion";

interface Props extends PropsWithChildren {
  title: string;
  description: string;
}

const MultiStepForm = ({ title, description, children }: Props) => {
  const { form, onSubmit, onErrors } = useMultiStepForm(CampaignFormContext);
  return (
    <Form {...form}>
      <form onSubmit={form?.handleSubmit(onSubmit, onErrors)}>
        <motion.div variants={container} className="flex flex-col gap-2" initial="hidden" animate="visible" exit="exit">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary md:text-3xl">{title}</CardTitle>
              <CardDescription className="text-sm text-neutral-400 md:text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent className="m-2 flex flex-col gap-2 p-2 shadow-md sm:flex-row">{children}</CardContent>
          </Card>
        </motion.div>
      </form>
    </Form>
  );
};

export default MultiStepForm;
