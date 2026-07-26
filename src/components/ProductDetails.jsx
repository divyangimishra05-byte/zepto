function ProductDetails() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
            alt="Basmati Rice"
            className="w-full rounded-2xl"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold">
            India Gate Basmati Rice
          </h1>

          <p className="text-yellow-500 text-lg mt-2">
            ⭐⭐⭐⭐⭐ (4.8)
          </p>

          <h2 className="text-3xl font-bold mt-4">
            ₹299
          </h2>

          <p className="text-gray-400 line-through">
            ₹399
          </p>

          <p className="mt-6 text-gray-600">
            Premium quality basmati rice with rich aroma and long grains.
          </p>

          <button className="mt-8 bg-purple-700 text-white px-8 py-3 rounded-xl hover:bg-purple-800">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;