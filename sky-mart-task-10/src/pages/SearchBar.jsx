import React from "react";
import { Search, RotateCcw, SlidersHorizontal, X } from "lucide-react";

const SearchBar = ({
  searchQuery = "",
  setSearchQuery,
  selectedCategory = "all",
  setSelectedCategory,
  sortBy = "featured",
  setSortBy,
  categories = [],
  onReset,
  totalResults = 0,
}) => {
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    sortBy !== "featured";

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
      {/* Search Bar Input */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search products by name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
        {/* Category Filter Dropdown */}
        <div className="relative min-w-[160px] flex-1 md:flex-none">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-9 text-sm font-semibold text-slate-700 capitalize focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.replace("-", " ")}
              </option>
            ))}
          </select>
          <SlidersHorizontal
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative min-w-[180px] flex-1 md:flex-none">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-9 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Highest Rated</option>
            <option value="rating-low-high">Lowest Rated</option>
          </select>
          <SlidersHorizontal
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* Active Items Badge & Reset */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-2.5 rounded-xl border border-slate-200 shrink-0">
            {totalResults} {totalResults === 1 ? "Item" : "Items"}
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-orange-600 transition-colors shrink-0"
              title="Reset all filters"
            >
              <RotateCcw size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;