import { baseUrl } from "./config";
export const generateAbsoluteImageUrl = (productPictures) => {
  return productPictures.map((imageUrl) => {
    return { img: `${baseUrl}${imageUrl}` };
  });
};
export const generateCategoryImageUrl = (categoryImage) => {
  return { img: `${baseUrl}${categoryImage}` };
};
