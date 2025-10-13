import React, { useState } from "react";

// Replace with your Unsplash Access Key
const UNSPLASH_KEY = "d_Z_7LVinN-C_6wO6tD-Xm1xUSO4QG2T0DErxuN6i9s";

const chaptersData = [
  {
    name: "Chapter 1",
    words: [
      { word: "Bicycle", english: "A two-wheeled vehicle powered by pedaling" },
      { word: "Laptop", english: "A portable computer" },
      { word: "Guitar", english: "A stringed musical instrument" },
    ],
  },
  {
    name: "Chapter 2",
    words: [
      { word: "Backpack", english: "A bag carried on the back" },
      { word: "Microscope", english: "A device to see tiny objects" },
      { word: "Camera", english: "A device for taking photos" },
    ],
  },
];

const Class6 = () => {
  const [openChapter, setOpenChapter] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [hindiMeaning, setHindiMeaning] = useState("");
  const [loadingHindi, setLoadingHindi] = useState(false);

  const toggleChapter = (idx) => {
    setOpenChapter(openChapter === idx ? null : idx);
  };

  const fetchImage = async (wordObj) => {
    setSelectedWord(wordObj);
    setImageUrl("");
    setHindiMeaning("");
    setLoadingImage(true);

    try {
      const url = `https://api.unsplash.com/search/photos?query=${wordObj.word}&client_id=${UNSPLASH_KEY}&per_page=1`;
      const response = await fetch(url);
      const data = await response.json();
      const img = data.results[0]?.urls.small || "";
      setImageUrl(img);
    } catch (err) {
      console.error("Error fetching image:", err);
    } finally {
      setLoadingImage(false);
    }
  };

  const fetchHindiMeaning = async (wordObj) => {
    setSelectedWord(wordObj);
    setHindiMeaning("");
    setImageUrl("");
    setLoadingHindi(true);

    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(
          wordObj.english
        )}`
      );
      const data = await response.json();
      setHindiMeaning(data[0][0][0]);
    } catch (err) {
      console.error("Error fetching Hindi meaning:", err);
    } finally {
      setLoadingHindi(false);
    }
  };

  const closePopup = () => {
    setSelectedWord(null);
    setImageUrl("");
    setHindiMeaning("");
    setLoadingImage(false);
    setLoadingHindi(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          background: "linear-gradient(90deg, #2563EB, #1E3A8A)",
          color: "white",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        Contents
      </h1>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {chaptersData.map((chapter, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem" }}>
            <div
              onClick={() => toggleChapter(idx)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1.3rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                background: "#E0F2FE",
                color: "#1E3A8A",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
              }}
            >
              {chapter.name}
            </div>

            {openChapter === idx && (
              <ul style={{ marginLeft: "1.5rem", marginTop: "0.8rem" }}>
                {chapter.words.map((wordObj, wIdx) => (
                  <li
                    key={wIdx}
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                      borderRadius: "12px",
                      maxWidth: "450px",
                      background: "white",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "0.7rem",
                        fontSize: "1.1rem",
                      }}
                    >
                      {wordObj.word}
                    </div>

                    <button
                      onClick={() => fetchImage(wordObj)}
                      style={{
                        marginRight: "0.5rem",
                        padding: "0.4rem 0.8rem",
                        cursor: "pointer",
                        borderRadius: "6px",
                        border: "none",
                        background: "#2563EB",
                        color: "white",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#1E3A8A")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#2563EB")
                      }
                    >
                      Show Image
                    </button>

                    <button
                      onClick={() => fetchHindiMeaning(wordObj)}
                      style={{
                        padding: "0.4rem 0.8rem",
                        cursor: "pointer",
                        borderRadius: "6px",
                        border: "none",
                        background: "#F59E0B",
                        color: "white",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#B45309")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#F59E0B")
                      }
                    >
                      Show Hindi Meaning
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Popup */}
      {selectedWord && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 0.3s",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "16px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              animation: "scaleUp 0.3s",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              {selectedWord.word}
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              <strong>English:</strong> {selectedWord.english}
            </p>

            {loadingImage && <p>Loading image...</p>}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={selectedWord.word}
                style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
              />
            )}

            {loadingHindi && <p>Loading Hindi meaning...</p>}
            {hindiMeaning && (
              <p style={{ fontSize: "1.1rem", color: "#2563EB" }}>
                <strong>Hindi:</strong> {hindiMeaning}
              </p>
            )}

            <button
              onClick={closePopup}
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#1E3A8A",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2563EB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1E3A8A")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }

          @keyframes scaleUp {
            from {transform: scale(0.7); opacity: 0;}
            to {transform: scale(1); opacity: 1;}
          }
        `}
      </style>
    </div>
  );
};

export default Class6;
