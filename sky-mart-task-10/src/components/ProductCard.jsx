import React, { useState } from "react";
import {
  ShoppingCart,
  Star,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

/* ==========================================================================
   1. CART SIDEBAR (DYNAMIC STATE & IMAGE SUPPORT)
   ========================================================================== */
const CartSidebar = ({ isOpen, onClose, cartItem = [], setCartItem }) => {
  if (!isOpen) return null;

  // Calculate the live subtotal price across all items
  const dynamicTotal = cartItem.reduce((sum, item) => sum + item.totalPrice, 0);

  // Handle adjustments from the plus and minus stepper actions
  const handleQuantityAdjustment = (id, delta) => {
    setCartItem((prev) =>
      prev.map((item) => {
          if (item.id === id) {
            const updatedQty = item.quantity + delta;
            return {
              ...item,
              quantity: updatedQty,
              totalPrice: updatedQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Automatically drop item if count drops below 1
    );
  };

  // Handle immediate deletion via the trash icon


  const handleRemoveItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay blur background mask */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over presentation anchoring panel left */}
      <div className="absolute inset-y-0 left-0 flex max-w-full pr-10">
        <div className="w-screen max-w-md transform bg-white shadow-2xl transition-all duration-300 border-r border-slate-200 flex flex-col h-full">
          {/* Header Strip Wrapper */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Cart
                </h2>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {cartItem.reduce((acc, item) => acc + item.quantity, 0)} items
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Cart Pipeline */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-slate-100">
            {cartItem.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
                <ShoppingBag size={36} className="mb-2 text-slate-300 stroke-1" />
                <p className="text-sm font-medium">Your shopping cart is empty.</p>
              </div>
            ) : (
              cartItem.map((item) => (
                <div
                  key={item.id}
                  className="py-5 flex items-start gap-4 group animate-fadeIn"
                >
                  {/* Embedded Product Image Container */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-1">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  {/* Pricing and Action Control Layer */}
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-bold text-slate-800 tracking-tight line-clamp-1 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>

                    <div className="space-y-0.5">
                      <div className="text-base font-black text-slate-900">
                        ${item.totalPrice.toFixed(2)}
                      </div>
                      <div className="text-xs font-medium text-slate-400">
                        ${item.unitPrice.toFixed(2)} each
                      </div>
                    </div>

                    {/* Quantity Actions Stepper Controls */}
                    <div className="pt-2 flex items-center gap-1">
                      <div className="flex items-center border border-slate-200 bg-slate-50 rounded-lg p-1">
                        <button 
                          onClick={() => handleQuantityAdjustment(item.id, -1)}
                          className="p-1 text-slate-500 hover:text-slate-800 hover:bg-white rounded transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-bold text-slate-800 min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => handleQuantityAdjustment(item.id, 1)}
                          className="p-1 text-slate-500 hover:text-slate-800 hover:bg-white rounded transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-slate-300 hover:text-rose-600 transition-colors rounded-lg"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Totals Strip */}
          <div className="border-t border-slate-200 bg-slate-50/80 backdrop-blur-md p-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  Total
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Taxes and shipping calculated at checkout
                </span>
              </div>
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                ${dynamicTotal.toFixed(2)}
              </span>
            </div>

            <button 
              disabled={cartItem.length === 0}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-400 text-white font-bold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-xs shadow-md shadow-slate-900/10"
            >
              Checkout
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. MAIN PRODUCT CARD WITH INTEGRATED SIDEBAR CONTROLS
   ========================================================================== */
const ProductCard = ({ product, setCartItem, cartItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    thumbnail,
  } = product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);
  const displayImage =
    thumbnail ||
    (images && images.length > 0 ? images[0] : "https://placehold.co/600x400");
  const isLowStock = stock < 20;

  return (
    <>
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
            <div className="absolute top-4 left-4 z-10 rounded-lg bg-orange-600 px-2.5 py-1 text-xs font-black text-white shadow-sm capitalize">
              {category}
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
              <span className="text-xs text-slate-400">
                ({product.reviews?.length || 0})
              </span>
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
                
                setCartItem((prev) => {
                  const existingItem = prev.find((item) => item.id === product.id);
                  
                  // If item exists, increase quantity rather than rendering a separate item row
                  if (existingItem) {
                    return prev.map((item) =>
                      item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: (item.quantity + 1) * item.unitPrice,
                          }
                        : item
                    );
                  }
                  
                  // If it's a completely fresh item addition, populate properties including layout thumbnail
                  return [
                    ...prev,
                    {
                      id: product.id,
                      title: product.title,
                      quantity: 1,
                      unitPrice: product.price,
                      totalPrice: product.price,
                      imageUrl: displayImage,
                    },
                  ];
                });
                
                setIsCartOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-orange-600 active:scale-95 shadow-sm shadow-slate-900/10"
            >
              <ShoppingCart size={13} />
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Sidebar Portal Viewport overlay layout */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
    </>
  );
};

export default ProductCard;