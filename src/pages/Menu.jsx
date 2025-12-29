import { useState } from "react";
import FoodCard from "../component/FoodCard";
import FoodData from "../data/FoodData";


function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredFood = FoodData.filter((item) => {
    const matchesFilter = filter === "all" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="menu-page">
      {/* Filter + Search */}
      <div className="menu-controls">
        <div className="filter-box">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "veg" ? "active" : ""}
            onClick={() => setFilter("veg")}
          >
            Veg
          </button>
          <button
            className={filter === "nonveg" ? "active" : ""}
            onClick={() => setFilter("nonveg")}
          >
            Non-Veg
          </button>
          <button
            className={filter === "coffee" ? "active" : ""}
            onClick={() => setFilter("coffee")}
          >
            Coffee
          </button>
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

      {/* Food Cards */}
      <div className="food-container">
        {filteredFood.length > 0 ? (
          filteredFood.map((item) => <FoodCard key={item.id} food={item} />)
        ) : (
          <p className="no-result">No food found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
