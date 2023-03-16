const people = [
    {
      id: 1,
      image: "/images/Product/pro-1.png",
      name: "Rhino 69 600K",
      category: "Male enhancement Supplement",
      quote: "Don't Quit ... ",
      quantity: "10 pcs",
      price: "$100",
    },
    {
      id: 2,
      image: "/images/Product/pro-2.png",
      name: "Rhino 69 1900K",
      category: "Male enhancement Supplement",
      quote: "Extra strength",
      quantity: "15 pcs",
      price: "$150",
    },
    {
      id: 3,
      image: "/images/Product/pro-3.png",
      name: "Rhino 69 2400K",
      category: "VIP Royal Honey",
      quote: "Honey for Extra Energy",
      quantity: "10pcs",
      price: "$100",
    },
    {
      id: 4,
      image: "/images/Product/pro-4.png",
      name: "Rhino 69 10000K",
      category: "Dietary Supplement",
      quote: "Discover the potential",
      quantity: "10 pcs",
      price: "$120",
    },
    {
      id: 5,
      image: "/images/Product/pro-5.png",
      name: "Pink Pussy Cat Liquid Shot ",
      category: "Dietary Supplement",
      quote: "Discover the potential",
      quantity: "12 Bottles Per Box",
      price: "$120",
    },
  ];
  
  export default people;
  
  export const getProductById = (id) => {
    return people.find((person) => person.id === Number(id));
  };
  