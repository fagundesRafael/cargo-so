import { User } from "../../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;

  if (!pass || pass.length < 5) {
    return {
      status: 400,
      body: { error: "Senha deve ter no mínimo 5 caracteres." },
    };
  }

  body.password = await bcrypt.hash(pass, 10);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
