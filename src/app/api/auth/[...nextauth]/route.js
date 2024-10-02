import NextAuth from "next-auth";
import mongoose from "mongoose";
import { User } from "../../../../models/User";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { name, email, password } = credentials;

        // const email = credentials?.email;
        // const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });

        const nameOk = user && name === user.name;
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        
        if (passwordOk && nameOk) {
          return user;
        } 

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
