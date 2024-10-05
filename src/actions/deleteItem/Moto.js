"use server";
import { Moto } from "@/models/Moto";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../../mongoDb/connect";

export const deleteMoto = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      await Moto.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete a Moto!");
    }
  
    revalidatePath("/motos");
  };