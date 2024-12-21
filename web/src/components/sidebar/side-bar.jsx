import { useState } from "react";

function SideBar({ onCategorySelect }) {
  const [categoryName, setCategoryName] = useState("Trending");
 

  const categories = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Trending", id: null }
  ];

  return (
    <div className="d-flex flex-column" style={{ minWidth: "200px" }}>
      <h1>Filter</h1>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {categoryName}
        </button>

        <ul className="dropdown-menu">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  onCategorySelect(category.id);
                  setCategoryName(category.name);
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
