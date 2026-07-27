import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import SearchBar from "./SearchBar";

const Shop = () => {
  // 1. Data & Cart States
  const [productsData, setProductsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  // 2. Search, Filter, and Sort States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Fetch API Data
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProductsData(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // 3. Extract Categories dynamically from API data
  const categories = useMemo(() => {
    const set = new Set(productsData.map((item) => item.category).filter(Boolean));
    return Array.from(set);
  }, [productsData]);

  // 4. Live Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((item) => {
        // Search term matching (title or brand)
        const matchesQuery =
          item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand?.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter matching
        const matchesCategory =
          selectedCategory === "all" || item.category === selectedCategory;

        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        // Sorting
        switch (sortBy) {
          case "price-low-high":
            return a.price - b.price;
          case "price-high-low":
            return b.price - a.price;
          case "rating-high-low":
            return (b.rating || 0) - (a.rating || 0);
          case "rating-low-high":
            return (a.rating || 0) - (b.rating || 0);
          case "featured":
          default:
            return 0;
        }
      });
  }, [productsData, searchQuery, selectedCategory, sortBy]);

  // Reset Filters Handler
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* SearchBar at Top Center (Outside the product grid) */}
      <div className="w-full mb-8">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          onReset={handleResetFilters}
          totalResults={filteredProducts.length}
        />
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 font-medium">
            No products match your search criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-3 text-xs font-bold uppercase tracking-wider text-orange-600 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              setCartItem={setCartItem}
              cartItem={cartItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;  