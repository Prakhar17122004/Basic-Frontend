import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UNSPLASH_KEY = "d_Z_7LVinN-C_6wO6tD-Xm1xUSO4QG2T0DErxuN6i9s";


const ChapterPage = () => {
  const { classId, chapterId } = useParams(); // ✅ Correct position
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

const allClasses = {
  class7: [
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
    }
  ]
}; // ✅ step 2 (your dataset here)

  const chaptersData = allClasses[classId]; // ✅ step 3
  const chapterIndex = parseInt(chapterId.replace("chapter", "")) - 1;
  const chapter = chaptersData?.[chapterIndex];

  const [selectedWord, setSelectedWord] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [hindiMeaning, setHindiMeaning] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(""); // "hindi" or "image"
  const [showChoice, setShowChoice] = useState(false);

  if (!chapter) {
    return <p>Chapter not found</p>;
  }

  const fetchImage = async (wordObj) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${wordObj.word}&client_id=${UNSPLASH_KEY}&per_page=1`
      );
      const data = await response.json();
      const img = data.results[0]?.urls.small || "";
      setImageUrl(img);
    } catch (err) {
      console.error("Error fetching image:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHindiMeaning = async (wordObj) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const handleWordClick = (wordObj) => {
    setSelectedWord(wordObj);
    setShowChoice(true);
    setImageUrl("");
    setHindiMeaning("");
    setMode("");
  };

  const handleChoice = (type) => {
    setMode(type);
    setShowChoice(false);

    if (type === "hindi") fetchHindiMeaning(selectedWord);
    else if (type === "image") fetchImage(selectedWord);
  };

  const closePopup = () => {
    setSelectedWord(null);
    setImageUrl("");
    setHindiMeaning("");
    setMode("");
    setShowChoice(false);
    setLoading(false);
  };

  const backToChoice = () => {
    setMode("");
    setShowChoice(true);
  };

  return (
    <div style={{ padding: "1rem 1.5rem", fontFamily: "Poppins, sans-serif" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#1E3A8A",
          color: "white",
          border: "none",
          borderRadius: "15px 50px",
          cursor: "pointer",
          fontWeight: "600",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#1E3A8A",
          marginBottom: "1rem",
        }}
      >
        {chapter.name}
      </h1>

      {/* Main Container */}
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(8px)",
          borderRadius: "15px 50px",
          padding: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        {/* Word Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1.2rem",
            justifyItems: "center",
          }}
        >
          {chapter.words.map((wordObj, idx) => (
            <div
              key={idx}
              onClick={() => handleWordClick(wordObj)}
              style={{
                width: "130px",
                height: "50px",
                borderRadius: "15px 50px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(29,78,216,0.25))",
                boxShadow:
                  "0 6px 12px rgba(0,0,0,0.1), inset 0 2px 6px rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "1.1rem",
                color: "#1E3A8A",
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.15), inset 0 3px 8px rgba(255,255,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0,0,0,0.1), inset 0 2px 6px rgba(255,255,255,0.4)";
              }}
            >
              {wordObj.word}
            </div>
          ))}
        </div>
      </div>

      {/* Choice Popup */}
      {showChoice && selectedWord && (
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
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "15px 50px",
              textAlign: "center",
              width: "90%",
              maxWidth: "400px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              What would you like to see for "{selectedWord.word}"?
            </h2>
            <button
              onClick={() => handleChoice("image")}
              style={{
                margin: "0.5rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#2563EB",
                color: "white",
                border: "none",
                borderRadius: "15px 50px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Show Image
            </button>
            <button
              onClick={() => handleChoice("hindi")}
              style={{
                margin: "0.5rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#F59E0B",
                color: "white",
                border: "none",
                borderRadius: "15px 50px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Hindi Meaning
            </button>
            <button
              onClick={closePopup}
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#1E3A8A",
                color: "white",
                border: "none",
                borderRadius: "15px 50px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Result Popup */}
      {selectedWord && mode && (
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
            zIndex: 1100,
          }}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "16px",
              textAlign: "center",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h2>{selectedWord.word}</h2>
            <p>
              <strong>English:</strong> {selectedWord.english}
            </p>

            {loading && <p>Loading...</p>}
            {!loading && mode === "image" && imageUrl && (
              <img
                src={imageUrl}
                alt={selectedWord.word}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginTop: "1rem",
                }}
              />
            )}
            {!loading && mode === "hindi" && hindiMeaning && (
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#2563EB",
                  marginTop: "1rem",
                }}
              >
                <strong>Hindi:</strong> {hindiMeaning}
              </p>
            )}

            <button
              onClick={backToChoice}
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#F59E0B",
                color: "white",
                border: "none",
                borderRadius: "15px 50px",
                cursor: "pointer",
                fontWeight: "600",
                marginRight: "0.5rem",
              }}
            >
              ← Back
            </button>

            <button
              onClick={closePopup}
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#1E3A8A",
                color: "white",
                border: "none",
                borderRadius: "15px 50px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterPage;
