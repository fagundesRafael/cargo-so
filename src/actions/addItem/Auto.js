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
    imagem,
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
      placa: placa.length === 0 ? "SEM PLACA" : placa,
      chassi: chassi.length === 0 ? "SEM CHASSI" : chassi,
      cor,
      chave,
      situacao,
      imagem,
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
    throw new Error('Ocorreu um erro de validação.');
  }
  revalidatePath("/automoveis");
  redirect("/automoveis");
};
