import { CarBrand, MotoBrand } from "@/models/Brands";
import { connectToDB } from "@/mongoDb/connect";

export const fetchCarBrands = async () => {
  try {
    await connectToDB();
    const carBrands = await CarBrand.find();
    return carBrands;
  } catch (error) {
    console.log('erro', error);
    throw new Error("Failed to fetch carBrands!");
  }
};

export const fetchMotoBrands = async () => {
  try {
    await connectToDB();
    const motoBrands = await MotoBrand.find()
    return motoBrands;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch motoBrands!");
  }
};
