import { z } from "zod";

const PASSWORD_SCHEMA = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must be at most 20 characters long")
  .regex(/[a-z]/, "At least one lowercase letter is required")
  .regex(/[A-Z]/, "At least one uppercase letter is required")
  .regex(/^\S+$/, "Spaces are not allowed");

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name must be at most 50 characters long"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .email("Invalid email address"),
  country: z
    .string()
    .min(2, "Country must be at least 2 characters long")
    .max(50, "Country must be at most 50 characters long"),
  password: PASSWORD_SCHEMA,
  investmentGoals: z.enum([
    "Growth",
    "Income",
    "Balanced",
    "Conservative",
  ]),
  riskTolerance: z.enum(["Low", "Medium", "High"]),
  preferredIndustry: z.enum([
    "Technology",
    "Finance",
    "Healthcare",
    "Consumer Goods",
    "Energy",
  ]),
});

export const signInSchema = z.object({
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .email("Invalid email address"),
  password: PASSWORD_SCHEMA,
});
