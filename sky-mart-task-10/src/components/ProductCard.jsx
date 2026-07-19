import React from 'react';
import { ShoppingCart, Star, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    title,
    category,
    description,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    shippingInformation,
    images,
    thumbnail
  } = product;

  // Calculate the original price before discount
  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);
  
  // Choose the best image presentation asset available
  const displayImage = thumbnail || (images && images.length > 0 ? images[0] : 'https://placehold.co/600x400');

  // Determine low stock threshold warnings (e.g., alert if under 20 items left)
  const isLowStock = stock < 20;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200">
      
      {/* Visual Workspace: Image and dynamic state tags */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <img
          src={displayImage}
          alt={title}
          className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Absolute Ribbon: Discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 z-10 rounded-lg bg-orange-600 px-2.5 py-1 text-xs font-black text-white shadow-sm">
            {product.category}
          </div>
        )}

        {/* Dynamic Availability Indicator */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold shadow-sm border border-slate-100">
          {isLowStock ? (
            <>
              <AlertCircle size={12} className="text-amber-500" />
              <span className="text-amber-700">Only {stock} Left</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span className="text-slate-700">{availabilityStatus}</span>
            </>
          )}
        </div>
      </div>

      {/* Content Workspace */}
      <div className="flex flex-1 flex-col p-6">
        
        {/* Brand context flag */}
        {brand && (
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
            {brand}
          </span>
        )}

        {/* Title and Rating Array */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-extrabold text-slate-900 tracking-tight line-clamp-1 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          
          {/* Star System */}
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-500">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-bold text-slate-700">{rating}</span>
            <span className="text-xs text-slate-400">({product.reviews?.length || 0})</span>
          </div>
        </div>

        {/* Product Copy Description */}
        <p className="mt-3 text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed flex-1">
          {description}
        </p>

        {/* Pricing Layout Structure */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-900 tracking-tight">
            ${price.toFixed(2)}
          </span>
          {discountPercentage > 0 && (
            <span className="text-sm text-slate-400 line-through font-semibold">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Fulfillment Info Line */}
        <div className="mt-2 text-xs font-medium text-slate-400 flex items-center gap-1">
          <span>•</span>
          <span>{shippingInformation}</span>
        </div>

        {/* Call to Action Execution Strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase text-slate-400">
            <Sparkles size={11} className="text-amber-500" />
            Vetted Item
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              // Standard cart implementation hook goes here
            }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-orange-600 active:scale-95 shadow-sm shadow-slate-900/10"
          >
            <ShoppingCart size={13} />
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;