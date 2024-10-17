"use server";
import { CarBrand, MotoBrand } from "@/models/Brands";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../../mongoDb/connect";

export const deleteCarBrand = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      await CarBrand.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete a Brand!");
    }
  
    revalidatePath("/configuracoes");
  };

  export const deleteCarModel = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      await CarBrand.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete a Brand!");
    }
  
    revalidatePath("/configuracoes");
  };

  export const deleteMotoBrand = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      await MotoBrand.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete a Brand!");
    }
  
    revalidatePath("/configuracoes");
  };