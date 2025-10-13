import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../data/ClassesData";

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/classes`)
      .then(res => res.json())
      .then(setClasses)
      .catch(err => console.error("Error loading classes", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Classes</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.id} style={{ marginBottom: "10px" }}>
            <Link to={`/classes/${cls.id}`} style={{ textDecoration: "none" }}>
              <strong>{cls.name}</strong> — {cls.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
