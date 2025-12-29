import { useState } from "react";
import FoodCard from "../component/FoodCard";
import FoodData from "../data/FoodData";

function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredFood = FoodData.filter(item => {
    const matchesFilter = filter === "all" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="menu-page">
      <div className="menu-controls">
        <div className="filter-box">
          {["all", "veg", "nonveg", "coffee"].map(f => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="food-container">
        {filteredFood.length > 0 ? (
          filteredFood.map(item => <FoodCard key={item.id} food={item} />)
        ) : (
          <p className="no-result">No food found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
