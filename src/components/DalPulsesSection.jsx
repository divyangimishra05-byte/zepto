import React from "react";
import{Star, ChevronRight} from "lucide-react";
const dalProducts = [
  {
    id: 1,
    title: "Tata Sampann Toor Dal",
    weight: "1 kg",
    price: 165,
    originalPrice: 190,
    discount: "₹25 OFF",
    rating: "4.8 (12.4k)",
    image: "https://5.imimg.com/data5/FA/FQ/MY-5329745/tata-sampann-toor-dal-500x500.jpg"
  },
  {
    id: 2,
    title: "Tata Sampann Moong Dal",
    weight: "1 kg",
    price: 149,
    originalPrice: 170,
    discount: "₹21 OFF",
    rating: "4.7 (10.8k)",
    image: "https://tse2.mm.bing.net/th/id/OIP.vbscmDD3LAwJLCVw0Gd9hgHaHa?r=0&pid=Api&h=220&P=0",
  },
  {
    id: 3,
    title: "Tata Sampann Masoor Dal",
    weight: "1 kg",
    price: 135,
    originalPrice: 155,
    discount: "₹20 OFF",
    rating: "4.8 (8.6k)",
    image: "https://5.imimg.com/data5/WC/OI/MY-5329745/tata-sampann-masoor-dal-500x500.jpg",
  },
  {
    id: 4,
    title: "Chana Dal Premium",
    weight: "1 kg",
    price: 110,
    originalPrice: 130,
    discount: "₹20 OFF",
    rating: "4.7 (7.5k)",
    image: "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
  },
    {
    id: 5,
    title: "Kabuli Chana",
    weight: "1 kg",
    price: 165,
    originalPrice: 195,
    discount: "₹30 OFF",
    rating: "4.8 (6.9k)",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/12/HU/IF/NF/105834893/white-coops-kabuli-chana-1000x1000.jpg",
  },
  {
    id: 6,
    title: "Kala Chana",
    weight: "1 kg",
    price: 98,
    originalPrice: 120,
    discount: "₹22 OFF",
    rating: "4.6 (5.8k)",
    image: "https://tiimg.tistatic.com/fp/1/007/423/rich-in-taste-tata-sampann-unpolished-kala-chana-packed-in-plastic-packet-078.jpg",
  },
    {
    id: 7,
    title: "Urad Dal",
    weight: "1 kg",
    price: 172,
    originalPrice: 199,
    discount: "₹27 OFF",
    rating: "4.8 (6.3k)",
    image: "https://5.imimg.com/data5/WU/MX/QJ/SELLER-17008860/biri-dal-1000x1000.jpg",
  },
  {
    id: 8,
    title: "Rajma Chitra",
    weight: "1 kg",
    price: 145,
    originalPrice: 170,
    discount: "₹25 OFF",
    rating: "4.7 (4.9k)",
    image:"https://res.retailershakti.com/incom/images/product/Tata-Sampann-Unpolished-Rajma-Chitra-1624444135-10087770-1.jpg"
  },];
function DalPulsesSection() {
return (
<section className="max-w-7xl mx-auto px-6 py-6">

<div className="flex items-center justify-between mb-5">  
    <h2 className="text-2xl font-bold">  
      Dal & Pulses  
    </h2>  

    <button className="flex items-center text-pink-600 font-semibold">  
      See All  
      <ChevronRight size={18} />  
    </button>  
  </div>  

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">  

    {dalProducts.map((product) => (  

      <div  
        key={product.id}  
        className="bg-white rounded-2xl border p-3 hover:shadow-lg transition"  
      >  

        <img  
          src={product.image}  
          alt={product.title}  
          className="w-full h-32 object-contain"  
        />  

        <button className="w-full mt-2 border border-pink-600 text-pink-600 rounded-lg py-1 font-semibold hover:bg-pink-50">  
          ADD  
        </button>  

        <h3 className="text-sm font-semibold mt-3 line-clamp-2">  
          {product.title}  
        </h3>  

        <p className="text-xs text-gray-500 mt-1">  
          {product.weight}  
        </p>  

        <div className="flex items-center mt-2">  
          <Star  
            size={14}  
            className="fill-yellow-400 text-yellow-400"  
          />  

          <span className="text-xs ml-1">  
            {product.rating}  
          </span>  
        </div>  

        <div className="mt-2">  
          <span className="font-bold text-lg">  
            ₹{product.price}  
          </span>  

          <span className="line-through text-gray-400 text-sm ml-2">  
            ₹{product.originalPrice}  
          </span>  
        </div>  

        <p className="text-green-600 text-xs font-semibold mt-1">  
          {product.discount}  
        </p>  

      </div>  

    ))}  

  </div>  

</section>

);
}

export default DalPulsesSection;