import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("libgalleryDB");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true
  },
  baseURL: process.env.BETTER_AUTH_URL, 
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      
    }
  },

   trustedOrigins: [
    "http://localhost:3000",
    "https://ph-a-8-libgallery.vercel.app",
  ],
  
  plugins: [jwt()],
});