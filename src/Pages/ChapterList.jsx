import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../data/ClassesData";

const ChapterList = () => {
  const { id } = useParams();
  const [cls, setCls] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/classes/${id}`)
      .then(res => res.json())
      .then(setCls)
      .catch(() => navigate("/classes"));
  }, [id, navigate]);

  if (!cls) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{cls.name}</h2>
      <p>{cls.description}</p>
      <h3>Chapters:</h3>
      <ul>
        {cls.chapters.map(ch => (
          <li key={ch.id}>
            <strong>{ch.title}</strong>: {ch.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
