import { model, models, Schema } from "mongoose";

const MotoSchema = new Schema(
  {
    procedimento: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
    },
    modelo: {
      type: String,
    },
    placa: {
      type: String,
    },
    chassi: {
      type: String,
    },
    cor: {
      type: String,
    },
    chave: {
      type: Boolean,
      required: true,
    },
    capacete: {
      type: Boolean,
      required: true,
    },
    situacao: {
      type: String,
    },
    imagem: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    updatedBy: {
      type: String,
    },
    observacao: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Moto = models.Moto || model("Moto", MotoSchema);
