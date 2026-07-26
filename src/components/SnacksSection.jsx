import React from "react";
import { Star, ChevronRight } from "lucide-react";

const snacksProducts = [
  {
    id: 1,
    title: "Lays Classic Salted Chips",
    weight: "52 g",
    price: 30,
    originalPrice: 35,
    discount: "₹5 OFF",
    rating: "4.7 (15k)",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
  },
  {
    id: 2,
    title: "Chocolate",
    weight: "90 g",
    price: 40,
    originalPrice: 50,
    discount: "₹10 OFF",
    rating: "4.8 (12k)",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
  },
  {
    id: 3,
    title: "Bingo Tedhe Medhe",
    weight: "90 g",
    price: 35,
    originalPrice: 45,
    discount: "₹10 OFF",
    rating: "4.6 (8.5k)",
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b",
  },
  {
    id: 4,
    title: "Haldiram Bhujia",
    weight: "400 g",
    price: 120,
    originalPrice: 140,
    discount: "₹20 OFF",
    rating: "4.8 (10k)",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },
  {
    id: 5,
    title: "Too Yumm Chips",
    weight: "70 g",
    price: 45,
    originalPrice: 55,
    discount: "₹10 OFF",
    rating: "4.7 (6.4k)",
    image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f",
  },
  {
    id: 6,
    title: "Parle Monaco Biscuits",
    weight: "75 g",
    price: 25,
    originalPrice: 30,
    discount: "₹5 OFF",
    rating: "4.6 (7k)",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
  },
  {
    id: 7,
    title: "Oreo Chocolate Biscuit",
    weight: "120 g",
    price: 55,
    originalPrice: 65,
    discount: "₹10 OFF",
    rating: "4.8 (14k)",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
  },
  {
    id: 8,
    title: "Popcorn Classic",
    weight: "100 g",
    price: 80,
    originalPrice: 100,
    discount: "₹20 OFF",
    rating: "4.7 (5.5k)",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f",
  },
];

function SnacksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Snacks
        </h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">

        {snacksProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl border p-3 hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-contain"
            />

            <button className="w-full mt-2 border border-pink-600 text-pink-600 rounded-lg py-1 font-semibold hover:bg-pink-50">
              ADD
            </button>

            <h3 className="text-sm font-semibold mt-3 line-clamp-2">
              {product.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {product.weight}
            </p>

            <div className="flex items-center mt-2">
              <Star
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-xs ml-1">
                {product.rating}
              </span>
            </div>

            <div className="mt-2">
              <span className="font-bold text-lg">
                ₹{product.price}
              </span>

              <span className="line-through text-gray-400 text-sm ml-2">
                ₹{product.originalPrice}
              </span>
            </div>

            <p className="text-green-600 text-xs font-semibold mt-1">
              {product.discount}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SnacksSection;