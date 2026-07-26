function ElectronicsSection() {
  const products = [
    {
      name: "Laptop",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      name: "Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      name: "Keyboard",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
    {
      name: "Wireless Mouse",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
  ];

  return (
    <section
      id="electronics"
      className="scroll-mt-40 px-8 py-12 bg-gray-50"
    >
      <h2 className="text-3xl font-bold mb-6">
        💻 Electronics
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

            <p className="text-gray-500 text-sm">
              Latest Electronics
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

export default ElectronicsSection;