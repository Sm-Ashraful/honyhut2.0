import Category from "../../models/category";
import slugify from "slugify";
import dbConnect from "../../db/dbConnect";

export default async function addCategory(req, res) {
  await dbConnect();

  //   try {
  //     const categoryObj = {
  //       name: req.body.name,
  //       slug: slugify(req.body.name),
  //     };

  //     if (req.file) {
  //       categoryObj.categoryImage = "/uploads/" + req.file.filename;
  //     }

  //     if (req.body.parentId) {
  //       categoryObj.parentId = req.body.parentId;
  //     }

  //     const category = new Category(categoryObj);
  //     const savedCategory = await category.save();
  //     console.log("Save Category: ", savedCategory);
  //     res.status(201).json({ category: savedCategory });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  //   return res.status(201).json({ message: savedCategory });
  //   cat
  //     .save()
  //     .then((category) => {
  //       return res.status(201).json({ category });
  //     })
  //     .catch((error) => {
  //       return res.status(400).json({ error });
  //     });
}
