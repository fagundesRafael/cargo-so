"use server"
import { Moto } from "@/models/Moto";
import { connectToDB } from "@/mongoDb/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addNewMoto = async (formData) => {
  
  const {
    procedimento,
    numero,
    marca,
    modelo,
    placa,
    chassi,
    cor,
    chave,
    capacete,
    situacao,
    observacao,
    imagem,
    createdBy,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newMoto = new Moto({
      procedimento,
      numero,
      marca,
      modelo,
      placa: placa.length === 0 ? "SEM PLACA" : placa,
      chassi: chassi.length === 0 ? "SEM CHASSI" : chassi,
      cor,
      chave,
      capacete,
      situacao,
      observacao,
      imagem,
      createdBy,
    });

    await newMoto.save()

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
  revalidatePath("/motos");
  redirect("/motos");
};
