import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Replace with your Unsplash Access Key
const UNSPLASH_KEY = "d_Z_7LVinN-C_6wO6tD-Xm1xUSO4QG2T0DErxuN6i9s";

const chaptersData = [
  {
        name: "Thank You God (Poem)",
        words: [
          { word: "creature", english: "creature" },
          { word: "almighty", english: "almighty" },
          { word: "peace", english: "peace" },
          { word: "harmony", english: "harmony" },
          { word: "strength", english: "strength" },
          { word: "accept", english: "accept" },
          { word: "bow down", english: "bow down" }
        ]
      },
      {
        name: "The Holy Ganga",
        words: [
          { word: "lifeline", english: "lifeline" },
          { word: "sacred", english: "sacred" },
          { word: "worshipped", english: "worshipped" },
          { word: "cave", english: "cave" },
          { word: "melt", english: "melt" },
          { word: "international", english: "international" },
          { word: "fame", english: "fame" },
          { word: "journey", english: "journey" }
        ]
      },
      {
        name: "Sanjay the Brave Boy",
        words: [
          { word: "neglected", english: "neglected" },
          { word: "company", english: "company" },
          { word: "half-heartedly", english: "half-heartedly" },
          { word: "tottered", english: "tottered" },
          { word: "burst into", english: "burst into" },
          { word: "chinned up", english: "chinned up" },
          { word: "miserable", english: "miserable" },
          { word: "pretended", english: "pretended" },
          { word: "drowning", english: "drowning" },
          { word: "canal", english: "canal" },
          { word: "crutch", english: "crutch" },
          { word: "astonished", english: "astonished" },
          { word: "rescued", english: "rescued" }
        ]
      },
      {
        name: "Mr. Garbage and Mrs. Polythene",
        words: [
          { word: "garbage", english: "garbage" },
          { word: "fall sick", english: "fall sick" },
          { word: "pit", english: "pit" },
          { word: "dangerous", english: "dangerous" },
          { word: "utensils", english: "utensils" },
          { word: "torn clothes", english: "torn clothes" },
          { word: "destroy", english: "destroy" },
          { word: "manure", english: "manure" }
        ]
      },
      {
        name: "Little Birdie (Poem)",
        words: [
          { word: "a little longer", english: "a little longer" },
          { word: "stronger", english: "stronger" },
          { word: "peep", english: "peep" },
          { word: "rise", english: "rise" },
          { word: "limbs", english: "limbs" }
        ]
      },
      {
        name: "A Good Citizen",
        words: [
          { word: "citizen", english: "citizen" },
          { word: "tourist", english: "tourist" },
          { word: "fountain", english: "fountain" },
          { word: "bouquet", english: "bouquet" },
          { word: "pluck", english: "pluck" },
          { word: "tripped", english: "tripped" },
          { word: "further", english: "further" },
          { word: "suffering", english: "suffering" },
          { word: "responsible", english: "responsible" }
        ]
      },
      {
        name: "The Responsible King",
        words: [
          { word: "irresponsible", english: "irresponsible" },
          { word: "chariot", english: "chariot" },
          { word: "moaned", english: "moaned" },
          { word: "Wazir", english: "Wazir" },
          { word: "cart", english: "cart" },
          { word: "bother", english: "bother" },
          { word: "flock", english: "flock" },
          { word: "stunned", english: "stunned" },
          { word: "deserves", english: "deserves" },
          { word: "ashamed", english: "ashamed" }
        ]
      },
      {
        name: "Mahatma Gandhi",
        words: [
          { word: "devoted", english: "devoted" },
          { word: "entire", english: "entire" },
          { word: "upliftment", english: "upliftment" },
          { word: "clutches", english: "clutches" },
          { word: "bamboo yoke", english: "bamboo yoke" },
          { word: "luxuries", english: "luxuries" },
          { word: "obtain", english: "obtain" },
          { word: "movement", english: "movement" },
          { word: "ultimately", english: "ultimately" },
          { word: "injustice", english: "injustice" },
          { word: "inequality", english: "inequality" },
          { word: "deity", english: "deity" },
          { word: "contribution", english: "contribution" },
          { word: "assassinated", english: "assassinated" }
        ]
      },
      {
        name: "The Swing (Poem)",
        words: [
          { word: "swing", english: "swing" },
          { word: "pleasantest", english: "pleasantest" },
          { word: "wide", english: "wide" },
          { word: "cattle", english: "cattle" },
          { word: "countryside", english: "countryside" }
        ]
      },
      {
        name: "Chandra Shekhar Azad",
        words: [
          { word: "fearless", english: "fearless" },
          { word: "freedom fighter", english: "freedom fighter" },
          { word: "disguised", english: "disguised" },
          { word: "priest", english: "priest" },
          { word: "provoked", english: "provoked" },
          { word: "lashes", english: "lashes" },
          { word: "mentor", english: "mentor" },
          { word: "revolutionary", english: "revolutionary" },
          { word: "massacre", english: "massacre" }
        ]
      },
      {
        name: "A Courageous Act",
        words: [
          { word: "fisherman", english: "fisherman" },
          { word: "cyclone", english: "cyclone" },
          { word: "expected", english: "expected" },
          { word: "high tide", english: "high tide" },
          { word: "flood", english: "flood" },
          { word: "topple", english: "topple" },
          { word: "rowed", english: "rowed" },
          { word: "marooned", english: "marooned" },
          { word: "authorities", english: "authorities" },
          { word: "temporary", english: "temporary" }
        ]
      },
      {
        name: "Kabir",
        words: [
          { word: "saint", english: "saint" },
          { word: "follower", english: "follower" },
          { word: "writings", english: "writings" },
          { word: "couplets", english: "couplets" },
          { word: "thinker", english: "thinker" },
          { word: "social reformer", english: "social reformer" },
          { word: "bury", english: "bury" }
        ]
      },
      {
        name: "The Adorable Mother (Poem)",
        words: [
          { word: "lean", english: "lean" },
          { word: "troubles", english: "troubles" },
          { word: "scream", english: "scream" },
          { word: "heart", english: "heart" },
          { word: "soul", english: "soul" }
        ]
      },
      {
        name: "Florence Nightingale",
        words: [
          { word: "sheets", english: "sheets" },
          { word: "properly", english: "properly" },
          { word: "war", english: "war" },
          { word: "secretly", english: "secretly" },
          { word: "comfortable", english: "comfortable" },
          { word: "superintendent", english: "superintendent" },
          { word: "organization", english: "organization" }
        ]
      },
      {
        name: "Inspiration Helps",
        words: [
          { word: "expensive", english: "expensive" },
          { word: "spending", english: "spending" },
          { word: "boarding school", english: "boarding school" },
          { word: "hurdle", english: "hurdle" },
          { word: "excel", english: "excel" },
          { word: "scholarship", english: "scholarship" },
          { word: "gratitude", english: "gratitude" }
        ]
      },
      {
        name: "Save Water; Save Life",
        words: [
          { word: "conservation", english: "conservation" },
          { word: "inaugural", english: "inaugural" },
          { word: "adversely", english: "adversely" },
          { word: "scarcity", english: "scarcity" },
          { word: "migrate", english: "migrate" },
          { word: "overcrowded", english: "overcrowded" },
          { word: "accommodate", english: "accommodate" },
          { word: "ruthless", english: "ruthless" },
          { word: "voluntarily", english: "voluntarily" }
        ]
      },
      {
        name: "I Love Nature (Poem)",
        words: [
          { word: "morn", english: "morn" },
          { word: "grey", english: "grey" },
          { word: "waves", english: "waves" },
          { word: "sea shells", english: "sea shells" },
          { word: "crickets", english: "crickets" },
          { word: "creatures", english: "creatures" },
          { word: "lord", english: "lord" }
        ]
      },
];

const Class7 = () => {
  const [openChapter, setOpenChapter] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [hindiMeaning, setHindiMeaning] = useState("");
  const [loadingHindi, setLoadingHindi] = useState(false);

  const navigate = useNavigate();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChapterClick = (idx) => {
    // keep same navigation pattern as Class6 but for class7
    navigate(`/class7/chapter${idx + 1}`);
    // also toggle openChapter so the local list can expand if you want that behavior:
    setOpenChapter((prev) => (prev === idx ? null : idx));
  };

  const fetchImage = async (wordObj) => {
    setSelectedWord(wordObj);
    setImageUrl("");
    setHindiMeaning("");
    setLoadingImage(true);

    try {
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        wordObj.word
      )}&client_id=${UNSPLASH_KEY}&per_page=1`;
      const response = await fetch(url);
      const data = await response.json();
      const img = data.results?.[0]?.urls?.small || "";
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
      // response structure: data[0][0][0] is the translated string
      setHindiMeaning(data?.[0]?.[0]?.[0] || "No translation found");
    } catch (err) {
      console.error("Error fetching Hindi meaning:", err);
      setHindiMeaning("Translation error");
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
              onClick={() => handleChapterClick(idx)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1.05rem",
                padding: "0.6rem 1rem",
                borderRadius: "8px",
                background: "#E0F2FE",
                color: "#1E3A8A",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                whiteSpace: "pre-line",
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
                      maxWidth: "550px",
                      background: "white",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      listStyle: "none",
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
                        fontSize: "1.05rem",
                      }}
                    >
                      {wordObj.word}
                    </div>

                    <button
                      onClick={() => fetchImage(wordObj)}
                      style={{
                        marginRight: "0.5rem",
                        padding: "0.45rem 0.9rem",
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
                        padding: "0.45rem 0.9rem",
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
            <button
  onClick={() => navigate(-1)}   // 🔹 Go to previous page
  style={{
    marginTop: "1.5rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#1E3A8A",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#2563EB")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#1E3A8A")}
>
  ← Back
</button>


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
              maxWidth: "600px",
              width: "92%",
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
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
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

export default Class7;
