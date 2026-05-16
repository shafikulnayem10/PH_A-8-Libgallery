import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://ph-a-8-libgallery.vercel.app",
  plugins: [jwtClient()],
});


export const { signIn, signUp, useSession, getSession, signOut, updateUser } = authClient;