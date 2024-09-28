"use server";
import { Auto } from "@/models/Auto";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../../mongoDb/connect";

export const deleteAuto = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      await Auto.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete a Auto!");
    }
  
    revalidatePath("/automoveis");
  };