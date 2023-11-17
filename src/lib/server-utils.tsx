"use server";

import { ActionValidationError } from "@/types";
import { ZodError } from "zod";

export const formatZodValidationErrors = (error: ZodError) => {
  const errors: Record<string, string> = {};

  error.errors.forEach((er) => {
    console.log("er", er);
    errors[er.path[0]] = er.message;
  });

  return errors;
};

export const returnValidationError = (
  error: ZodError | string | string[]
): ActionValidationError => {
  const errors: ActionValidationError = {
    success: false,
    isValidationError: true,
    message: "Invalid form input",
    errors: {},
  };

  if (error instanceof ZodError) {
    Object.entries(formatZodValidationErrors(error)).forEach((e) => {
      errors.errors[e[0]] = e[1];
    });
  }

  return errors;
};

export const checkIfDuplicationError = (err: Error) => {
  if (err?.code === 11000 || err?.code === 11001) {
    const key = Object.keys(err?.keyPattern)[0];
    return `[DUPLICATE] '${key}' already exists`;
  }

  return false;
};
