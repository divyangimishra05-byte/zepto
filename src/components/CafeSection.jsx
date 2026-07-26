function CafeSection({ setCartItems }) {
  const cafeProducts = [
    {
      name: "Cappuccino",
      price: 4,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
    {
      name: "Sandwich",
      price: 6,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    },
    {
      name: "Pizza",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      name: "Burger",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
  ];

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <section
      id="cafe"
      className="scroll-mt-40 px-8 py-16 bg-orange-50"
    >
      <h2 className="text-3xl font-bold mb-8">
        ☕ Zepto Cafe
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cafeProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition"
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

            <div className="flex items-center justify-between mt-4">
              <span className="font-bold text-lg">
                ${product.price}
              </span>

              <button
                onClick={() => addToCart(product)}
                className="border border-purple-600 text-purple-600 font-bold px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
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