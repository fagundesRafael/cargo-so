"use server"
import { Auto } from "@/models/Auto";
import { connectToDB } from "@/mongoDb/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addNewAuto = async (formData) => {
  
  const {
    procedimento,
    numero,
    marca,
    modelo,
    placa,
    chassi,
    cor,
    chave,
    situacao,
    observacao,
    createdBy,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newAuto = new Auto({
      procedimento,
      numero,
      marca,
      modelo,
      placa,
      chassi,
      cor,
      chave,
      situacao,
      observacao,
      createdBy,
    });

    await newAuto.save()

  } catch (error) {
    console.log(error);
    if (error.name === 'ValidationError') {
      for (let field in error.errors) {
        const errorMessage = error.errors[field].message;
        console.log(errorMessage);
      }
    }
    throw new Error(errorMessage);
  }
  revalidatePath("/automoveis");
  redirect("/automoveis");
};
