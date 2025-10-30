"use client";

import React from "react";
import { signUpSchema } from "@/lib/FromValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldGeneration from "./FromFieldGeneration";
import { SIGNUP_FORM_FIELDS } from "@/lib/constants";

function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      preferredIndustry: "Technology",
      riskTolerance: "Medium",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        {SIGNUP_FORM_FIELDS.map((field) => (
          <React.Fragment key={field.name}>
            {field.type === "select" ? (
              <FormFieldGeneration
                form={form}
                name={field.name as keyof SignUpFormData}
                label={field.label}
                placeholder={`Select your ${field.label}`}
                inputType={field.type}
                items={field.items as string[]}
              />
            ) : (
              <FormFieldGeneration
                form={form}
                name={field.name as keyof SignUpFormData}
                label={field.label}
                placeholder={`Enter your ${field.label}`}
                inputType={field.type}
              />
            )}
          </React.Fragment>
        ))}
        <Button
          type="submit"
          className="yellow-btn w-full mt-3"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          Start Your Investing Journey
        </Button>
      </form>
    </Form>
  );
}
export default SignUpForm;
