"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, email, password } = validateFields.data;

  // hashed password
  const hashedPassword = await bcryptjs.hash(password, 10);

  // check existing user
  const existingUser = await getUserByEmail(email);
  
  if (existingUser) {
    return { error: "Email already in use" };
  }

  // create user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send email verification

  return { success: "User created" };
};
