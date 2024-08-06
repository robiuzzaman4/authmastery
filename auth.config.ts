import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user: any = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (passwordMatched) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
