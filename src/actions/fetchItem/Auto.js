import { Auto } from "@/models/Auto";
import { connectToDB } from "@/mongoDb/connect";

export const fetchAuto = async (id) => {
  try {
    connectToDB();
    const auto = await Auto.findById(id);
    if (!auto) {
      throw new Error("Auto not found");
    }
    return auto;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch auto!");
  }
}

export const fetchAutos = async (pr, nu, pl, ch, ma, mo, page) => {
  const regex1 = new RegExp(pr, "i");
  const regex2 = new RegExp(nu, "i");
  const regex3 = new RegExp(pl, "i");
  const regex4 = new RegExp(ch, "i");
  const regex5 = new RegExp(ma, "i");
  const regex6 = new RegExp(mo, "i");

  const ITEM_PERPAGE = 18;

  try {
    connectToDB();
    const count = await Auto.find({
      $or: [
        {
          procedimento: { $regex: regex1 },
          numero: { $regex: regex2 },
          placa: { $regex: regex3 },
          chassi: { $regex: regex4 },
          marca: { $regex: regex5 },
          modelo: { $regex: regex6 },
        },
      ],
    }).countDocuments();
    const autos = await Auto.find({
      $or: [
        {
          procedimento: { $regex: regex1 },
          numero: { $regex: regex2 },
          placa: { $regex: regex3 },
          chassi: { $regex: regex4 },
          marca: { $regex: regex5 },
          modelo: { $regex: regex6 },
        },
      ],
    })
      .limit(ITEM_PERPAGE)
      .skip(ITEM_PERPAGE * (page - 1));
    return {autos, count};
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch autos!");
  }
};
