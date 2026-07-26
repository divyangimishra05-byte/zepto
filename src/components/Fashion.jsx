function MobilesSection() {
  const products = [
    {
      name: "Smartphone",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      name: "Mobile Charger",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    },
    {
      name: "Power Bank",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1609592424848-5d7f6a1f5e6c?w=500",
    },
    {
      name: "Mobile Cover",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1601593346740-925612772716?w=500",
    },
  ];

  return (
    <section
      id="mobiles"
      className="scroll-mt-40 px-8 py-12"
    >
      <h2 className="text-3xl font-bold mb-6">
        📱 Mobiles
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
              Mobile Accessories
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

export default MobilesSection;