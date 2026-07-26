function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">

      <div className="grid lg:grid-cols-3 gap-5">

        {/* Banner 1 */}
        <div className="bg-[#7C3AED] text-white rounded-2xl p-8 flex flex-col justify-between h-72">

          <div>
            <h2 className="text-4xl font-bold">
              ALL NEW
            </h2>

            <h1 className="text-5xl font-extrabold mt-2">
              ZEPTO
            </h1>

            <p className="mt-4 text-lg">
              Delivery in 10 Minutes ⚡
            </p>
          </div>

          <button className="bg-white text-purple-700 px-5 py-3 rounded-xl font-bold w-fit">
            Shop Now
          </button>

        </div>

        {/* Banner 2 */}
        <div className="bg-green-100 rounded-2xl p-8 h-72 flex flex-col justify-between">

          <div>

            <h2 className="text-4xl font-bold text-green-700">
              Fresh Fruits
            </h2>

            <p className="mt-3 text-gray-700">
              Flat 30% OFF on fresh fruits & vegetables
            </p>

          </div>

          <button className="bg-green-700 text-white px-5 py-3 rounded-xl w-fit">
            Buy Now
          </button>

        </div>

        {/* Banner 3 */}

        <div className="bg-orange-100 rounded-2xl p-8 h-72 flex flex-col justify-between">

          <div>

            <h2 className="text-4xl font-bold text-orange-600">
              Paan Corner
            </h2>

            <p className="mt-3">
              Cigarettes, chocolates & more
            </p>

          </div>

          <button className="bg-orange-600 text-white px-5 py-3 rounded-xl w-fit">
            Explore
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;