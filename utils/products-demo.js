const people = [
  {
    id: 85,
    image: ["/images/Product/pro-1.png"],
    name: "Rhino 69 600K",
    category: "Male enhancement Supplement",
    quote: "Don't Quit ... ",
    offer: 20,
    price: 100,
    quantity: 1,
  },
  {
    id: 86,
    image: ["/images/Product/pro-2.png"],
    name: "Rhino 69 1900K",
    category: "Male enhancement Supplement",
    quote: "Extra strength",
    price: 150,
    offer: 20,
    quantity: 1,
  },
  {
    id: 87,
    image: ["/images/Product/pro-3.png"],
    name: "Rhino 69 2400K",
    category: "VIP Royal Honey",
    quote: "Honey for Extra Energy",
    price: 70,
    offer: 20,
  },
  {
    id: 88,
    image: ["/images/Product/pro-4.png"],
    name: "Rhino 69 10000K",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 80,
    offer: 20,
    quantity: 1,
  },
  {
    id: 89,
    image: ["/images/Product/pro-5.png"],
    name: "Pink Pussy Cat Liquid Shot ",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 90,
    offer: 20,
    quantity: 1,
  },
  {
    id: 90,
    image: ["/images/Product/pro-6.png"],
    name: "Rhino 69 4750k",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 50,
    offer: 20,
  },
  {
    id: 91,
    image: ["/images/Product/pro-7.png"],
    name: "Rhino 69 15000K",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 20,
    offer: 20,
    quantity: 1,
  },
  {
    id: 92,
    image: ["/images/Product/pro-8.png"],
    name: "Rhino 69 3750K",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 70,
    offer: 20,
    quantity: 1,
  },
  {
    id: 93,
    image: ["/images/Product/pro-9.png"],
    name: "Rhino 69 23000K",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 22,
    offer: 20,
  },
  {
    id: 94,
    image: ["/images/Product/pro-10.png"],
    name: "Rhino 69 7500K",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 24,
    offer: 20,
    quantity: 1,
  },
  {
    id: 95,
    image: ["/images/Product/pro-12.png"],
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 32,
    offer: 20,
    quantity: 1,
  },
  {
    id: 96,
    image: ["/images/Product/pro-13.png"],
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 43,
    offer: 20,
    quantity: 1,
  },
  {
    id: 97,
    image: ["/images/Product/pro-14.png"],
    name: "Trojan MAGNUM",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 67,
    offer: 20,
    quantity: 1,
  },
  {
    id: 98,
    image: ["/images/Product/pro-15.png"],
    name: "BLACK BULL EXTREME",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 23,
    offer: 20,
    quantity: 1,
  },
  {
    id: 99,
    image: ["/images/Product/pro-16.png"],
    name: "Royal Honey VIP 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 11,
    offer: 20,
    quantity: 1,
  },
  {
    id: 100,
    image: ["/images/Product/pro-17.png"],
    name: "Miracle of Honey 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 3,
    offer: 20,
    quantity: 1,
  },
  {
    id: 101,
    image: ["/images/Product/pro-18.png"],
    name: "Leopard Miracle Honey 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 90,
    offer: 20,
    quantity: 1,
  },
  {
    id: 102,
    image: ["/images/Product/pro-19.png"],
    name: "Red Bull",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 88,
    offer: 20,
    quantity: 1,
  },
  {
    id: 103,
    image: ["/images/Product/pro-20.png"],
    name: "VITA MAX Double Shot 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 77,
    offer: 20,
    quantity: 1,
  },
  {
    id: 104,
    image: ["/images/Product/pro-21.png"],
    name: "ETUMA Royal Honey 20g Sachet",
    category: "Dietary Supplement",
    quote: "Discover the potential",
    price: 99,
    offer: 20,
    quantity: 1,
  },
];

export default people;

export const getProductByIdSecond = (id) => {
  return people.find((person) => person.id === Number(id));
};
