import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Gigs = () => {
  const query = useQuery();
  const categoryQuery = query.get("category")?.toLowerCase() || "";
  const searchQuery = query.get("search")?.toLowerCase() || "";
  const navigate = useNavigate();

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [filteredGigs, setFilteredGigs] = useState(gigs);

  useEffect(() => {
    let filtered = gigs;

    // Filter by category query (if exists)
    if (categoryQuery) {
      filtered = filtered.filter((gig) => {
        const categories = gig.category
          .toLowerCase()
          .split(/,|and/)
          .map((cat) => cat.trim());

        return categories.some((cat) => cat.includes(categoryQuery));
      });
    }

    // Filter by search query in desc and username
    if (searchQuery) {
      filtered = filtered.filter(
        (gig) =>
          gig.desc.toLowerCase().includes(searchQuery) ||
          gig.username.toLowerCase().includes(searchQuery)
      );
    }

    // Budget filter
    filtered = filtered.filter((gig) => {
      const price = gig.price;
      const min = minBudget === "" ? 0 : parseInt(minBudget);
      const max = maxBudget === "" ? Infinity : parseInt(maxBudget);
      return price >= min && price <= max;
    });

    // Sorting
    if (sort === "sales") {
      filtered.sort((a, b) => (b.sales || 0) - (a.sales || 0));
    } else if (sort === "createdAt") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredGigs(filtered);
  }, [categoryQuery, searchQuery, minBudget, maxBudget, sort]);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const clearFilters = () => {
    setMinBudget("");
    setMaxBudget("");
    navigate("/gigs"); // This clears the URL search/category params
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs"> FREELANCIA SERVICES </span>
        <h1>
          {searchQuery || categoryQuery ? "Search Results" : "Explore Gigs"}
        </h1>

        <p>Browse and hire from the best talents.</p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input
              type="number"
              placeholder="min"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
            />
            <input
              type="number"
              placeholder="max"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
            />
            <button onClick={() => {}}>Apply</button>
            <button
              onClick={clearFilters}
              style={{ marginLeft: "10px", backgroundColor: "#ff6b6b" }}
            >
              Clear
            </button>
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort By:</span>
            <div className="sort-dropdown" onClick={() => setOpen(!open)}>
              <span className="sort-selected">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src="/img/down.png" alt="Toggle" />
              {open && (
                <div className="sort-options">
                  {sort !== "sales" && (
                    <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  {sort !== "createdAt" && (
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cards">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>

        {/* ❌ Show if no results */}
        {filteredGigs.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#666",
            }}
          >
            <p>No gigs found matching your search.</p>
            <button
              onClick={clearFilters}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#1dbf73",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gigs;
