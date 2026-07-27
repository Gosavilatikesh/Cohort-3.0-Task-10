import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import axios from "axios";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { toast } from "react-toastify";

const ProductDetails = ({ cartItem = [], setCartItem }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = parseInt(id, 10);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fetch product data on ID change
  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(res.data);
        setSelectedImage(res.data.thumbnail || res.data.images?.[0] || "");
        setQuantity(1); // Reset quantity when switching products
      } catch (err) {
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  // Handle Add to Cart with selected quantity
  const handleAddToCart = () => {
    if (!product) return;

    setCartItem((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: (item.quantity + quantity) * item.unitPrice,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          quantity: quantity,
          unitPrice: product.price,
          totalPrice: product.price * quantity,
          imageUrl: selectedImage,
        },
      ];
    });

    toast.success(`Added ${quantity} ${product.title} to cart!`);
  };

  // Next & Previous Handlers (DummyJSON has 194 products)
  const handlePrevProduct = () => {
    if (productId > 1) {
      navigate(`/main/shop/${productId - 1}`);
    }
  };

  const handleNextProduct = () => {
    if (productId < 194) {
      navigate(`/main/shop/${productId + 1}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-semibold text-sm">Loading Product Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-md mx-auto my-20 text-center p-8 bg-white rounded-3xl border border-slate-200">
        <p className="text-slate-600 font-bold mb-4">Product Not Found</p>
        <Link
          to="/main/shop"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors"
        >
          <ArrowLeft size={14} /> Back To Shop
        </Link>
      </div>
    );
  }

  const originalPrice = (
    product.price /
    (1 - (product.discountPercentage || 0) / 100)
  ).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Navigation Bar: Back & Next/Prev Stepper */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 font-bold text-sm transition-colors"
        >
          <ArrowLeft size={18} /> Back to Products
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevProduct}
            disabled={productId <= 1}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Previous Product"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-bold text-slate-400 px-2">
            #{product.id}
          </span>
          <button
            onClick={handleNextProduct}
            disabled={productId >= 194}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Next Product"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Grid: Gallery Left, Details Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Product Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden p-6 flex items-center justify-center">
            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-full max-w-full object-contain mix-blend-multiply"
            />
            {product.discountPercentage > 0 && (
              <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-lg">
                -{Math.round(product.discountPercentage)}% OFF
              </span>
            )}
          </div>

          {/* Image Thumbnails Carousel */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-20 w-20 rounded-2xl border-2 p-1 overflow-hidden shrink-0 transition-all ${
                    selectedImage === img
                      ? "border-orange-500 bg-orange-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} ${idx}`}
                    className="h-full w-full object-contain mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Information & Purchasing Options */}
        <div className="space-y-6">
          {/* Brand & Category */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                {product.category}
              </span>
              {product.brand && (
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  • {product.brand}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {product.title}
            </h1>
          </div>

          {/* Rating & Stock Badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-xl">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span className="text-sm font-extrabold text-amber-900">
                {product.rating}
              </span>
              <span className="text-xs text-amber-700 font-medium">
                ({product.reviews?.length || 0} Reviews)
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold">
              {product.stock < 20 ? (
                <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/60">
                  <AlertCircle size={14} /> Only {product.stock} left in stock
                </span>
              ) : (
                <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/60">
                  <CheckCircle2 size={14} /> In Stock ({product.stock})
                </span>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 pt-2 border-t border-slate-100">
            <span className="text-4xl font-black text-slate-900">
              ${product.price?.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-lg text-slate-400 line-through font-semibold">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-sm font-medium">
            {product.description}
          </p>

          {/* Stepper Quantity Selector & Add To Cart */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Quantity
              </span>
              <div className="flex items-center border border-slate-200 bg-slate-50 rounded-xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-slate-600 hover:bg-white rounded-lg transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-bold text-slate-800 min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-slate-600 hover:bg-white rounded-lg transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 active:scale-95"
            >
              <ShoppingCart size={16} /> Add {quantity} To Cart
            </button>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-1">
              <Truck size={18} className="mx-auto text-orange-500" />
              <p className="text-[11px] font-bold text-slate-700">
                {product.shippingInformation || "Fast Shipping"}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-1">
              <ShieldCheck size={18} className="mx-auto text-orange-500" />
              <p className="text-[11px] font-bold text-slate-700">
                {product.warrantyInformation || "1 Year Warranty"}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-1">
              <RotateCcw size={18} className="mx-auto text-orange-500" />
              <p className="text-[11px] font-bold text-slate-700">
                {product.returnPolicy || "30 Days Return"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;