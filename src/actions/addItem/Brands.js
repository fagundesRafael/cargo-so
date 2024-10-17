"use server";
import { CarBrand, MotoBrand } from "@/models/Brands";
import { connectToDB } from "@/mongoDb/connect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNewCarBrand = async (formData) => {
  const { brand, model } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const existingBrand = await CarBrand.findOne({
      brand: brand.toUpperCase(),
    });

    if (existingBrand) {
      if (!existingBrand.models.includes(model.toUpperCase())) {
        existingBrand.models.push(model.toUpperCase());
        await existingBrand.save();
    } else {
      throw new Error("Modelo já cadastrado.");
    }
    } else {
      const newCarBrand = new CarBrand({
        brand: brand.toUpperCase(),
        models: model ? [model.toUpperCase()] : [],
      });

      await newCarBrand.save();
    }

    revalidatePath("/configuracoes");
    redirect("/configuracoes");
  } catch (error) {
    console.log(error);
    redirect("/configuracoes");
  }
};

export const addNewCarModel = async (formData) => {
  const { id, model } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const existingBrand = await CarBrand.findById(id);

    if (existingBrand) {
      if (!existingBrand.models.includes(model.toUpperCase())) {
        existingBrand.models.push(model.toUpperCase());
        await existingBrand.save();
      } else {
        throw new Error("Modelo já cadastrado.");
      }
    } else {
      throw new Error("Marca não encontrada.");
    }

    revalidatePath("/configuracoes");
    redirect("/configuracoes");
  } catch (error) {
    console.log(error);
    redirect("/configuracoes");
  }
};