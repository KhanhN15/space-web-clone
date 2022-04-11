import data from "../mock/data.json";
import { useState } from "react";

const Crew = () => {
  const [showCrew, setShowCrew] = useState("1");

  const handleChange = (id) => {
    setShowCrew(id);
  };

  return (
    <main id="main" class="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      {data.crew.map((e) => (
        <>
          <div className="dot-indicators flex">
            <button
              aria-selected={showCrew == "1" ? true : false}
              onClick={() => handleChange("1")}
            >
              <span className="sr-only">The commander</span>
            </button>
            <button
              aria-selected={showCrew == "2" ? true : false}
              onClick={() => handleChange("2")}
            >
              <span className="sr-only">The mission specialist</span>
            </button>
            <button
              aria-selected={showCrew == "3" ? true : false}
              onClick={() => handleChange("3")}
            >
              <span className="sr-only">The pilot</span>
            </button>
            <button
              aria-selected={showCrew == "4" ? true : false}
              onClick={() => handleChange("4")}
            >
              <span className="sr-only">The crew engineer</span>
            </button>
          </div>

          <article
            className="crew-details flow"
            hidden={showCrew === e.id ? false : true}
          >
            <header class="flow flow--space-small">
              <h2 className="fs-600 ff-serif uppercase">{e.role}</h2>
              <p className="fs-700 uppercase ff-serif">{e.name}</p>
            </header>
            <p>{e.bio}</p>
          </article>
          <picture>
            <img
              className={showCrew === e.id ? "" : "hidden"}
              src={e.images.png}
              alt={e.name}
            />
          </picture>
        </>
      ))}
    </main>
  );
};

export default Crew;
