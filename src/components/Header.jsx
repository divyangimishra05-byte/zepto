 import {useState} from "react";
 import {
  Search,
  UserCircle,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import products from "../data/Products";

function Header({ setIsCartOpen }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const[searchText,setSearchText]=useState("");
  const[searchResult,setSearchResult]=useState([]);
   const handleLogin = () => {
    alert("Login page open hoga");
  };

  const handleCart = () => {
  setIsCartOpen(true);
};
  const handleSearch = () => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResult(result);
  };

 const menu = [
  { name: "All", icon: "🛒", id: "all" },
  { name: "Cafe", icon: "☕", id: "cafe" },
  { name: "Home", icon: "🏠", id: "home" },
  { name: "Toys", icon: "🧸", id: "toys" },
  { name: "Fresh", icon: "🍎", id: "fresh" },
  { name: "Electronics", icon: "💻", id: "electronics" },
  { name: "Mobiles", icon: "📱", id: "mobiles" },
  { name: "Beauty", icon: "💄", id: "beauty" },
  { name: "Fashion", icon: "👕", id: "fashion" },
];

  const categories = [
    {
      title: "Fruits & Vegetables",
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300",
    },
    {
      title: "Dairy, Bread & Eggs",
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300",
    },
    {
      title: "Atta, Rice & Dals",
      img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=300",
    },
    {
      title: "Chicken, Fish & Meat",
      img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300",
    },
    {
      title: "Masala & Dry Fruits",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300",
    },
    {
      title: "Breakfast",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    },
    {
      title: "Packaged Food",
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300",
    },
    {
      title: "Zepto Cafe",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300",
    },
    {
      title: "Tea & Coffee",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300",
    },
    {
      title: "Ice Cream",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300",
    },
    {
      title: "Frozen Food",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300",
    },
  ];

  return (
    <>
      <header className="sticky top-0 bg-white shadow-sm z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          <div className="flex items-center gap-5">

            <h1 className="text-5xl font-bold text-purple-700">
              zepto
            </h1>

            <div>

              <h2 className="font-bold text-lg">
                ⚡ Delivery in minutes*
              </h2>

              <button className="flex items-center text-gray-600 hover:text-purple-700">
                Select Location
                <ChevronDown size={18} className="ml-1"/>
              </button>

            </div>

          </div>

          <div className="relative w-[45%]">

            <Search
              className="absolute left-4 top-3 text-gray-500"
              size={22}
            />

            <input
              type="text"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              onKeyDown={(e)=>{if(e.key==="Enter"){handleSearch();
              }
              }}
              placeholder='Search for "banana"'
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-purple-700"
            />

          </div>

          <div className="flex items-center gap-8">

            <div onClick={handleLogin} className="flex flex-col items-center cursor-pointer">
              <UserCircle size={30}/>
              <span className="text-sm">Login</span>
            </div>

            <div onClick={handleCart} className="flex flex-col items-center cursor-pointer">
              <ShoppingCart size={30}/>
              <span className="text-sm">Cart</span>
            </div>

          </div>

        </div>

        <div className="border-y bg-white">

          <div className="max-w-7xl mx-auto flex gap-8 px-8 py-4 overflow-x-auto">

            {menu.map((item,index)=>(
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 whitespace-nowrap ${
                  item.name==="All"
                  ? "text-purple-700 font-bold border-b-4 border-purple-700 pb-2"
                  : "hover:text-purple-700"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </button>
            ))}

          </div>

        </div>
{/* Categories */}

        <div className="max-w-7xl mx-auto px-8 py-6">

<div className="flex gap-4 overflow-x-auto whitespace-nowrap py-2">

            {categories.map((item, index) => (
              <div
  key={index}
  className="min-w-[100px] bg-gray-100 rounded-xl p-2 text-center cursor-pointer hover:shadow-lg"
>

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover mx-auto rounded-xl"
                />

                <p className="mt-2 text-xs font-medium">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </header>
    </>
  );
}

export default Header;