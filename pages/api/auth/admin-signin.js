import dbConnect from "../../../db/dbConnect";
import User from "../../../models/user";
import jwt from "jsonwebtoken";
import Cors from "cors";

const cors = Cors({
  origin: "http://localhost:3001",
  methods: ["GET", "POST"],
});

export default async function adminSignin(req, res) {
  await dbConnect();

  cors(req, res, async () => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid Admin Name or Password" });
      }

      const isPasswordValid =
        (await user.authenticate(req.body.password)) && user.role === "admin";

      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid Admin Password" });
      }

      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "48h",
        }
      );

      const { _id, name, email, role } = user;

      res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly`);

      return res.status(200).json({
        token,
        user: {
          _id,
          name,
          email,
          role,
        },
      });
    } catch (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
}
