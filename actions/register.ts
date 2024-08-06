"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent" };
};
