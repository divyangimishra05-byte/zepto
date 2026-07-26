import React from "react";
import { Star, ChevronRight } from "lucide-react";

const drinkProducts = [
  {
    id: 1,
    title: "Coca Cola",
    weight: "750 ml",
    price: 40,
    originalPrice: 45,
    discount: "₹5 OFF",
    rating: "4.8 (12k)",
    image: "https://wallpapers.com/images/hd/coca-cola-1920-x-1280-picture-spks3nd3fgh3945k.jpg",
  },
  {
    id: 2,
    title: "Pepsi",
    weight: "750 ml",
    price: 40,
    originalPrice: 45,
    discount: "₹5 OFF",
    rating: "4.7 (10k)",
    image: "https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_1280.jpg",
  },
  {
    id: 3,
    title: "Sprite",
    weight: "750 ml",
    price: 40,
    originalPrice: 45,
    discount: "₹5 OFF",
    rating: "4.8 (9k)",
    image:"https://static.vecteezy.com/system/resources/previews/010/552/767/large_2x/isolated-sprite-clear-plastic-bottle-free-photo.jpg"
  },
  {
    title: "Fanta",
    weight: "750 ml",
    price: 40,
    originalPrice: 45,
    discount: "₹5 OFF",
    rating: "4.7 (8k)",
    image: "https://static.vecteezy.com/system/resources/previews/030/673/709/large_2x/product-shots-of-fanta-high-quality-4k-ultra-hd-free-photo.jpg",
  },
    {
    id: 5,
    title: "Real Mixed Fruit Juice",
    weight: "1 L",
    price: 120,
    originalPrice: 140,
    discount: "₹20 OFF",
    rating: "4.8 (7k)",
    image: "https://www.vishalmegamart.com/on/demandware.static/-/Sites-vmm-fmcg-master-catalog/default/dw7ed6fb3b/images/large/1310001600.jpg"
  },
  {
    id: 6,
    title: "Maaza",
    weight: "600 ml",
    price: 45,
    originalPrice: 50,
    discount: "₹5 OFF",
    rating: "4.8 (9k)",
image:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ff48d59b-4923-4fff-86b6-abf44dc0cf51.__CR0,0,970,600_PT0_SX970_V1___.jpg"
  },
  {
    id: 7,
    title: "Slice Mango Drink",
    weight: "600 ml",
    price: 45,
    originalPrice: 50,
    discount: "₹5 OFF",
    rating: "4.7 (8k)",
    image: "https://m.media-amazon.com/images/I/61bErV8BOvL._SL1500_.jpg",
  },
  {
    id: 8,
    title: "Tropicana Orange Juice",
    weight: "1 L",
    price: 130,
    originalPrice: 150,
    discount: "₹20 OFF",
    rating: "4.8 (6k)",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VF+PvKTmL.jpg"
  },
];

function DrinkSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Drinks</h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {drinkProducts.map((product) => (
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

            <p className="text-xs text-gray-500 mt-1">{product.weight}</p>

            <div className="flex items-center mt-2">
              <Star
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-xs ml-1">{product.rating}</span>
            </div>

            <div className="mt-2">
              <span className="font-bold text-lg">₹{product.price}</span>
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

export default DrinkSection;