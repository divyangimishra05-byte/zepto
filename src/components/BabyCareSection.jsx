import { ChevronRight } from "lucide-react";

function BabyCareSection() {

  const babyProducts = [
    {
      title: "Johnson's Baby Oil",
      price: 210,
      originalPrice: 250,
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=300",
    },
    {
      title: "Baby Powder",
      price: 160,
      originalPrice: 190,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300",
    },
    {
      title: "Baby Wipes",
      price: 120,
      originalPrice: 150,
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300",
    },
    {
      title: "Baby Shampoo",
      price: 180,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Baby Care
        </h2>

        <button className="flex items-center text-pink-600 font-semibold">
          See All
          <ChevronRight size={18}/>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {babyProducts.map((item,index)=>(
          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-lg transition"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain"
            />

            <h3 className="font-semibold mt-3">
              {item.title}
            </h3>

            <div className="flex justify-between items-center mt-3">

              <div>
                <span className="font-bold text-lg">
                  ₹{item.price}
                </span>

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

export default BabyCareSection;