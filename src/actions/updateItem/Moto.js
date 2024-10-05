"use server";
import { Moto } from "@/models/Moto";
import { connectToDB } from "@/mongoDb/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateMoto = async (formData) => {
  const {
    id,
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
    imagem,
    observacao,
    createdBy,
    updatedBy,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
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
      imagem,
      observacao,
      createdBy,
      updatedBy,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Moto.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      for (let field in error.errors) {
        const errorMessage = error.errors[field].message;
        console.log(errorMessage);
      }
    }
    throw new Error(errorMessage);
  }
  revalidatePath("/motos");
  redirect("/motos");
};
