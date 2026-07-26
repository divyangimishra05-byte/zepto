function CafeSection() {
  const products = [
    {
      name: "Cappuccino",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
    {
      name: "Sandwich",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    },
    {
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      name: "Burger",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
  ];

  return (
    <section
      id="cafe"
      className="scroll-mt-40 px-8 py-12"
    >
      <h2 className="text-3xl font-bold mb-6">
        ☕ Zepto Cafe
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h3 className="font-bold text-lg mt-4">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Fresh & Delicious
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">
                ₹{product.price}
              </span>

              <button
                className="border border-purple-600 text-purple-600 font-bold px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white"
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafeSection;