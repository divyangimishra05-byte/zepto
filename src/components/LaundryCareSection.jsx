import React from 'react';
import { Star, ChevronRight } from 'lucide-react';



// Images ke sath dono rows ke saare products ka exact data
const laundryProducts = [
  // --- ROW 1: Detergents ---
  {
    id: 1,
    title: 'Rin Matic Top Load Detergent Liquid | Pouch',
    weight: '1 pack (2 kg)',
    price: 224,
    originalPrice: 260,
    discount: '₹36 OFF',
    rating: '4.8 (41.7k)',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Hapiso Laundry Pods - Tropical Breeze',
    weight: '1 pack (15 pcs)',
    price: 304,
    originalPrice: 375,
    discount: '₹71 OFF',
    rating: '4.5 (12.2k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Surf Excel Matic Front Load Detergent Liquid | Pouch',
    weight: '1 pack (5 kg)',
    price: 695,
    originalPrice: 932,
    discount: '₹237 OFF',
    rating: '4.7 (8.3k)',
    tag: 'Stain Removal',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Surf Excel Matic Top Load Detergent Liquid Refill | Tough Dried...',
    weight: '1 pack (2 kg)',
    price: 335,
    originalPrice: 355,
    discount: '₹20 OFF',
    rating: '4.7 (15.7k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Wheel Detergent Powder',
    weight: '1 pack (4 kg)',
    price: 258,
    originalPrice: null,
    discount: 'Super Saver Pack',
    rating: '4.7 (20.3k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Surf Excel Matic Top Load Detergent Liquid | Pouch',
    weight: '1 pack (5 kg)',
    price: 599,
    originalPrice: 780,
    discount: '₹181 OFF',
    rating: '4.7 (15.4k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    title: 'Morelight Extra Power Detergent Powder',
    weight: '1 pack (4 kg)',
    price: 273,
    originalPrice: 540,
    discount: '₹267 OFF',
    rating: '4.7 (14.1k)',
    tag: 'Fabric Protect',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    title: 'Surf Excel Matic Front Load Detergent Liquid Refill | Tough Dried...',
    weight: '1 pack (2 kg)',
    price: 365,
    originalPrice: 415,
    discount: '₹50 OFF',
    rating: '4.7 (9.1k)',
    tag: 'Stain Removal',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80',
  },

  // --- ROW 2: Cleaners & Sprays ---
  {
    id: 9,
    title: 'Happi Planet Kitchen Cleaner Spray | Suitable for Stoves...',
    weight: '1 pc (500 ml)',
    price: 200,
    originalPrice: 299,
    discount: '₹99 OFF',
    rating: '4.5 (3.2k)',
    tag: 'Instant Clean',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 10,
    title: 'Harpic Lemon Bathroom Cleaner Liquid | Removes...',
    weight: '1 pc (1 L)',
    price: 195,
    originalPrice: 230,
    discount: '₹35 OFF',
    rating: '4.7 (9.8k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    title: 'BECO Max Kitchen Cleaner Liquid',
    weight: '1 pc (500 ml)',
    price: 189,
    originalPrice: 249,
    discount: '₹60 OFF',
    rating: '4.5 (842)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    title: 'Lizol Kitchen Cleaning Spray | Cleans Stove, Chimney & Sink',
    weight: '1 pc (450 ml)',
    price: 198,
    originalPrice: 225,
    discount: '₹27 OFF',
    rating: '4.8 (3.2k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 13,
    title: 'Elbow Grease Pink All Purpose Degreaser',
    weight: '1 pc (1 L)',
    price: 425,
    originalPrice: null,
    discount: null,
    rating: null,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 14,
    title: 'Domex Lime Fresh Toilet Cleaner | Fights Odour for Upto 3 Days',
    weight: '1 pc (1 L)',
    price: 195,
    originalPrice: 245,
    discount: '₹50 OFF',
    rating: '4.8 (3.6k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    title: 'Ranvika Ultimate Plus Broom | Assorted',
    weight: '1 pc',
    price: 110,
    originalPrice: 250,
    discount: '₹140 OFF',
    rating: '4.2 (3.5k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 16,
    title: 'Harpic Flushmatic Lavender Toilet Cleaner Blocks',
    weight: '2 pcs (100 g)',
    price: 171,
    originalPrice: 190,
    discount: '₹19 OFF',
    rating: '4.7 (3.7k)',
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&auto=format&fit=crop&q=80',
  },
];

const LaundryCareSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* 1. Header Row (Title & See All link) */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          Laundry Care
        </h2>
        <a 
          href="#" 
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-0.5"
        >
          <span>See All</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* 2. 2-Row Grid Container (Horizontal Scrollable) */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="grid grid-rows-2 grid-flow-col gap-4 auto-cols-[160px] sm:auto-cols-[180px]">
          {laundryProducts.map((product) => (
       
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-2xl p-2.5 flex flex-col justify-between shadow-sm hover:shadow-md transition group relative"
            >
              {/* Image Box */}
              <div className="relative w-full h-32 bg-gray-50/80 rounded-xl p-2 flex items-center justify-center">
                
                {/* Bestseller Badge */}
                {product.isBestseller && (
                  <span className="absolute top-1 left-1 bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded">
                    Bestseller
                  </span>
                )}

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain group-hover:scale-105 transition duration-200"
                />

                {/* Zepto Style ADD Button */}
                <button 
                  className="absolute bottom-1 right-1 bg-white hover:bg-red-50 text-red-600 border border-red-500 text-[11px] font-extrabold px-3 py-1 rounded-lg shadow-sm active:scale-95 transition"
                >
                  ADD
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-2.5 flex flex-col justify-between flex-1">
                <div>
                  {/* Price Row */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs sm:text-sm font-black text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Discount Text */}
                  {product.discount && (
                    <p className="text-[9px] sm:text-[10px] font-bold text-green-600">
                      {product.discount}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-[11px] font-medium text-gray-800 mt-1 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                </div>

                <div className="mt-1">
                  {/* Weight / Pack size */}
                  <p className="text-[10px] text-gray-400 font-normal">
                    {product.weight}
                  </p>

                  {/* Feature Tag (e.g., Stain Removal) */}
                  {product.tag && (
                    <p className="text-[9px] font-semibold text-blue-500 mt-0.5">
                      {product.tag}
                    </p>
                  )}

                  {/* Star Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-0.5 mt-1 text-[9px] text-gray-500 font-medium">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
      
  </div>
          </div>

    </section>
  );
};

export default LaundryCareSection;