const people = [
  {
    id: 1,
    image: "/images/Product/pro-1.png",
    name: "Blue Bull Honey 22g Pouches",
    category: "Male enhancement Supplement",
    quote: "Don't Quit ... ",

    price: "$100",
  },
  {
    id: 2,
    image: "/images/Product/pro-2.png",
    name: "Black Bull Honey 22g Pouches",
    category: "Male enhancement Supplement",
    quote: "Extra strength",
    quantity: "15 pcs",
    price: "$150",
  },
  {
    id: 3,
    image: "/images/Product/pro-3.png",
    name: "Etumax Honey 22g Pouches",
    category: "VIP Royal Honey",
    quote: "Honey for Extra Energy",
    quantity: "10pcs",
    price: "$100",
  },
  {
    id: 4,
    image: "/images/Product/pro-4.png",
    name: "Vitamax Double Shot 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 5,
    image: "/images/Product/pro-5.png",
    name: "Leopard Miracle Honey 15g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 6,
    image: "/images/Product/pro-6.png",
    name: "Leopard Miracle Honey 22g Pouches",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 7,
    image: "/images/Product/pro-7.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 8,
    image: "/images/Product/pro-8.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 9,
    image: "/images/Product/pro-9.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 10,
    image: "/images/Product/pro-10.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 12,
    image: "/images/Product/pro-12.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 13,
    image: "/images/Product/pro-13.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 14,
    image: "/images/Product/pro-14.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 15,
    image: "/images/Product/pro-15.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 16,
    image: "/images/Product/pro-16.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 17,
    image: "/images/Product/pro-17.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 18,
    image: "/images/Product/pro-18.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 19,
    image: "/images/Product/pro-19.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 20,
    image: "/images/Product/pro-20.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
  {
    id: 21,
    image: "/images/Product/pro-21.png",
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",

    price: "$120",
  },
];

export default people;

export const getProductById = (id) => {
  return people.find((person) => person.id === Number(id));
};
