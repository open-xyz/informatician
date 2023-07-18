import Newsletter from "@/model/Newsletter";
import { connectedToDB } from "@/utils/database";

export const POST = async (req, res) => {
  await connectedToDB();
  try {
    const newUser = new Newsletter(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
