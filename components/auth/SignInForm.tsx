"use client";

import React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldGeneration from "./FromFieldGeneration";
import { signInSchema } from "@/lib/FromValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SIGNIN_FORM_FIELDS } from "@/lib/constants";

function SignInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        {SIGNIN_FORM_FIELDS.map((field) => (
          <FormFieldGeneration
            key={field.name}
            form={form}
            name={field.name as keyof SignInFormData}
            inputType={field.type as "password" | "email"}
            label={field.label}
            placeholder={`Enter your ${field.label}`}
          />
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
export default SignInForm;
