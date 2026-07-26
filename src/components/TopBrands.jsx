function TopBrands() {
  const brands = [
    {
      name: "Amul",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Amul_official_logo.svg",
    },
    {
      name: "Coca Cola",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
    },
    {
      name: "Britannia",
      image: "https://logodix.com/logo/1726255.png"
    },
    {
      name: "Nestle",
      image: "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Nestle_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1693494961",
    },
      {
      name: "Aashirvaad",
      image: "https://plastcom.in/img/client/ashirvad.png",
      },
    {
      name: "Maggi",
      image:"https://tse1.mm.bing.net/th/id/OIP.9UmYU_Fmxnm1j9p1b_LEcgHaBl?r=0&pid=Api&h=220&P=0"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">
        Shop by Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 object-contain"
            />

            <p className="mt-3 font-semibold">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopBrands;