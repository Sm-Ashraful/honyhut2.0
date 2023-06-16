import bcrypt from "bcrypt";
import shortid from "shortid";
import jwt from "jsonwebtoken";
import Cors from "cors";

import User from "../../../models/user";
import dbConnect from "../../../db/dbConnect";

const cors = Cors({
  origin: "*", // Update this with the appropriate origin(s) allowed to access your API
  methods: ["GET", "POST"], // Add the HTTP methods you want to allow
});

export default async function adminSignup(req, res) {
  await dbConnect();

  cors(req, res, async () => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({
          message: "Admin already registered",
        });
      }

      const { name, email, password } = req.body;

      const hash_password = await bcrypt.hash(password, 10);

      const _user = new User({
        name,
        email,
        hash_password,
        username: shortid.generate(),
        role: "admin",
      });

      const savedUser = await _user.save();
      if (savedUser) {
        const token = jwt.sign(
          { _id: savedUser._id, role: savedUser.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "48h",
          }
        );

        res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly`);

        return res.status(201).json({
          message: "Sign Up successfully...!",
          token: token,
          user: {
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
          },
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
}

// exports.signout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({
//     message: "Signout successfully.....!",
//   });
// };
