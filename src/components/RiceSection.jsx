import React from "react";
import { Star, ChevronRight } from "lucide-react";


const riceProducts = [
  {
    id: 1,
    title: "India Gate Basmati Rice",
    weight: "5 kg",
    price: 650,
    originalPrice: 750,
    discount: "₹100 OFF",
    rating: "4.8 (15.2k)",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 2,
    title: "Daawat Basmati Rice",
    weight: "5 kg",
    price: 620,
    originalPrice: 720,
    discount: "₹100 OFF",
    rating: "4.7 (12.5k)",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
  },
  {
    id: 3,
    title: "Tata Sampann Rice",
    weight: "5 kg",
    price: 540,
    originalPrice: 620,
    discount: "₹80 OFF",
    rating: "4.8 (9.8k)",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
  },
  {
    id: 4,
    title: "Fortune Everyday Rice",
    weight: "5 kg",
    price: 480,
    originalPrice: 560,
    discount: "₹80 OFF",
    rating: "4.6 (8.2k)",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
  },
  {
    id: 5,
    title: "Sona Masoori Rice",
    weight: "5 kg",
    price: 430,
    originalPrice: 500,
    discount: "₹70 OFF",
    rating: "4.7 (7.4k)",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
  },
  {
    id: 6,
    title: "Brown Rice",
    weight: "1 kg",
    price: 150,
    originalPrice: 180,
    discount: "₹30 OFF",
    rating: "4.6 (5.6k)",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    id: 7,
    title: "Kolam Rice",
    weight: "5 kg",
    price: 390,
    originalPrice: 450,
    discount: "₹60 OFF",
    rating: "4.7 (6.1k)",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
  },
  {
    id: 8,
    title: "Organic Rice",
    weight: "2 kg",
    price: 260,
    originalPrice: 320,
    discount: "₹60 OFF",
    rating: "4.8 (4.9k)",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
];
function RiceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Rice
        </h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">

        {riceProducts.map((product) => (

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

export default RiceSection;