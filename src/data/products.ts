export type Product = {
  id: number;
  name: string;
  mainType: string;
  subType: string;
  image: string;
  description: string;
};

export const categories = [
  {
    mainType: "Faux Rabbit Fur Carpet",
    subTypes: ["Solid Color", "Patterned", "Jacquard"],
  },
  {
    mainType: "PV Fur Fluffy Carpet",
    subTypes: ["Luxury Fluffy", "Shaggy Style"],
  },
  {
    mainType: "Aranga Carpet",
    subTypes: ["Classic", "Modern"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Solid Color Rabbit Fur Jacquard Carpet",
    mainType: "Faux Rabbit Fur Carpet",
    subType: "Jacquard",
    image: "assets/img/products/slider1.jpg",
    description:
      "A premium faux rabbit fur jacquard carpet with soft canvas backing and elegant design.",
  },
  {
    id: 2,
    name: "Luxury Fluffy PV Fur Carpet",
    mainType: "PV Fur Fluffy Carpet",
    subType: "Luxury Fluffy",
    image: "assets/img/products/slider2.jpg",
    description:
      "Thick and cozy fluffy PV fur carpet, perfect for living rooms and bedrooms.",
  },
];
