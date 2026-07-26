import { ChevronRight } from "lucide-react";

function BeautySection() {
  const beautyProducts = [
    {
      title: "Lakme Face Cream",
      price: 299,
      originalPrice: 350,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300",
    },
    {
      title: "Maybelline Lipstick",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300",
    },
    {
      title: "Nivea Body Lotion",
      price: 249,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300",
    },
    {
      title: "Mamaearth Face Wash",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Beauty & Personal Care</h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {beautyProducts.map((item, index) => (
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

            <div className="flex justify-between items-center mt-3">
              <span className="font-bold">₹{item.price}</span>

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

export default BeautySection;