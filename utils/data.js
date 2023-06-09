import { reactive } from "vue";

import { getRandomString } from "@/utils/randomGenerators";

export const rawProducts = [
  {
    id: getRandomString(),
    name: "Product 1",
    categoryText: "For Boys",
    category: "boys",
    rating: 5,
    price: "$10",
    image: "/boys-8-1-580x870.jpg",
    relatedImages: ["/boys-8-1-580x870.jpg", "/boys-8-580x870(1).jpg"],
  },
  {
    id: getRandomString(),
    name: "Product 2",
    categoryText: "For Boys",
    category: "boys",
    rating: 2,
    price: "$20",
    image: "/boys-8-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 3",
    categoryText: "For Home",
    category: "home",
    rating: 4,
    price: "$30",
    image: "/for-home-5-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 4",
    categoryText: "For Home",
    category: "home",
    rating: 5,
    price: "$40",
    image: "/for-home-5-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 5",
    categoryText: "For Home",
    category: "home",
    rating: 4,
    price: "$50",
    image: "/for-home-5-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 6",
    categoryText: "For Girls",
    category: "girls",
    rating: 4,
    price: "$60",
    image: "/girls-1-2-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 7",
    categoryText: "For Girls",
    category: "girls",
    rating: 3,
    price: "$70",
    image: "/girls-2-2-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 8",
    categoryText: "For Girls",
    category: "girls",
    rating: 4,
    price: "$80",
    image: "/girls-6-1-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Product 9",
    categoryText: "For Girls",
    category: "girls",
    rating: 4,
    price: "$90",
    image: "/girls-8-1-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Bunny backpack",
    categoryText: "Toys",
    category: "toys",
    rating: 4,
    price: "$10",
    image: "/for-home-2-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Rabbit pillow",
    categoryText: "Toys",
    category: "toys",
    rating: 4,
    price: "$10",
    image: "/for-home-13-1-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Bear pillow",
    categoryText: "Toys",
    category: "toys",
    rating: 4,
    price: "$70",
    image: "/for-home-14-580x870.jpg",
  },
  {
    id: getRandomString(),
    name: "Rabbit Casket",
    categoryText: "Toys",
    category: "toys",
    rating: 4,
    price: "$100",
    image: "/for-home-15-580x870.jpg",
  },
];
export const products = reactive(rawProducts);
