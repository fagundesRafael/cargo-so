import { model, models, Schema } from "mongoose";

const CarBrandSchema = new Schema({
  brand: {
    type: String,
    required: true,
    unique: true,
  },
  models: {
    type: [String],
    required: true,
  },
});

const MotoBrandSchema = new Schema({
  brand: {
    type: String,
    required: true,
    unique: true,
  },
  models: {
    type: [String],
    required: true,
  },
});

export const CarBrand = models.CarBrand || model("CarBrand", CarBrandSchema);
export const MotoBrand =
  models.MotoBrand || model("MotoBrand", MotoBrandSchema);
