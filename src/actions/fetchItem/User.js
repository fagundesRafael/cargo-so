import User from "@/models/User";
import { connectToDB } from "@/mongoDb/connect";

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const usuario = await User.findById(id);
    if (!usuario) {
      throw new Error("User not found");
    }
    return usuario;
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao buscar usuário!");
  }
}

export const fetchUsers = async (na, em, pa, is, page) => {
  const regex1 = new RegExp(na, "i");
  const regex2 = new RegExp(em, "i");
  const regex3 = new RegExp(pa, "i");
  const regex4 = new RegExp(is, "i");


  const ITEM_PERPAGE = 18;

  try {
    connectToDB();
    const count = await User.find({
      $or: [
        {
          name: { $regex: regex1 },
          email: { $regex: regex2 },
          password: { $regex: regex3 },
          isAdmin: { $regex: regex4 },
        },
      ],
    }).countDocuments();
    const users = await User.find({
      $or: [
        {
          name: { $regex: regex1 },
          email: { $regex: regex2 },
          password: { $regex: regex3 },
          isAdmin: { $regex: regex4 },
        },
      ],
    })
      .limit(ITEM_PERPAGE)
      .skip(ITEM_PERPAGE * (page - 1));
    return {users, count};
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao buscar lista de usuários!");
  }
};

export const fetchAllUsers = async () => {
  try {
    await connectToDB()
    const usuarios = await User.find();
    return usuarios; 
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao buscar lista de usuários!");
  }
};