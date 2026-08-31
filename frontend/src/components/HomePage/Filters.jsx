import "../../styles/Filters.css";

const filters = [
  { name: "All Stays", icon: "fa-solid fa-tree" },
  { name: "Beach", icon: "fa-solid fa-umbrella-beach" },
  { name: "Mountains", icon: "fa-solid fa-mountain" },
  { name: "Cabins", icon: "fa-solid fa-house" },
  { name: "Camping", icon: "fa-solid fa-campground" },
  { name: "Forest", icon: "fa-solid fa-tree" },
  { name: "City", icon: "fa-solid fa-city" },
  { name: "Lakefront", icon: "fa-solid fa-water" },
  { name: "Treehouses", icon: "fa-solid fa-tree-city" },
  { name: "Boats", icon: "fa-solid fa-sailboat" },
];

function Filters() {
  return (
    <section className="filters-section">
      <div className="container">

        <div className="filters-header">

          <h2>Explore by category</h2>

          <button className="view-all-btn">
            View all
            <i className="fa-solid fa-chevron-right"></i>
          </button>

        </div>

        <div className="filters-wrapper">

          {filters.map((filter, index) => (
            <div
              className={`filter-card ${index === 0 ? "active" : ""}`}
              key={filter.name}
            >
              <i className={filter.icon}></i>

              <span>{filter.name}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Filters;