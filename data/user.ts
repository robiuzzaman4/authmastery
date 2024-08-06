import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email: email } });
    if (!user) {
      return { error: "User not found" };
    }
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id: id } });
    if (!user) {
      return { error: "User not found" };
    }
    return user;
  } catch (error) {
    return null;
  }
};
