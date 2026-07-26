import { ChevronRight } from "lucide-react";
import products from "../Data/Products";

function PersonalCareSection() {
  const personalProducts = [
    {
      title: "Dove Soap",
      weight: "100 g",
      price: 65,
      originalPrice: 80,
      discount: "18% OFF",
      rating: "4.7 (10k)",
      image:
        "https://superbhyper.co.za/wp-content/uploads/2023/08/dove-coco.jpg"
    },
        {
      title: "Colgate Toothpaste",
      weight: "200 g",
      price: 120,
      originalPrice: 150,
      discount: "20% OFF",
      rating: "4.8 (8k)",
      image:
        "https://p.turbosquid.com/ts-thumb/my/6VvodP/2sOKfMA8/colgatetoothpasteboxandtubemb3dmodel001/jpg/1540678597/1920x1080/fit_q87/d120d40216b60fe5a7389d1326df792cb17d7ea9/colgatetoothpasteboxandtubemb3dmodel001.jpg",
    },
    {
      title: "Mamaearth Face Wash",
      weight: "100 ml",
      price: 249,
      originalPrice: 299,
      discount: "17% OFF",
      rating: "4.8 (12k)",
      image:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/377714/mamaearth-ubtan-natural-face-wash-for-dry-skin-with-turmeric-and-saffron-for-tan-removal-and-skin-brightning-100-ml-65-11_1_display_1700558693_4cd289f4.jpg"
    },
    {
      title: "Clinic Plus Shampoo",
      weight: "340 ml",
      price: 220,
      originalPrice: 260,
      discount: "15% OFF",
      rating: "4.6 (9k)",
      image:
        "https://m.media-amazon.com/images/I/51LmmOtr0WL.jpg"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Personal Care</h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {personalProducts.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain"
            />

            <h3 className="font-semibold mt-3">{item.title}</h3>

            <p className="text-gray-500 text-sm">{item.weight}</p>

            <p className="text-green-600 text-sm">{item.discount}</p>

            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="font-bold text-lg">₹{item.price}</span>

                <span className="line-through text-gray-400 text-sm ml-2">
                  ₹{item.originalPrice}
                </span>
              </div>

              <button className="bg-pink-600 text-white px-4 py-1 rounded-lg">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PersonalCareSection;