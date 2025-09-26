import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const updatedAuthOptions = {
  ...authOptions,
  session: {
	...authOptions.session,
	strategy: "jwt" as const, // Ensure the strategy is a valid SessionStrategy
  },
};

const handler = NextAuth(updatedAuthOptions);
export { handler as GET, handler as POST };