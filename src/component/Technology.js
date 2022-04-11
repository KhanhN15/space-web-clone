import data from "../mock/data.json";
import { useState } from "react";

const TechNology = () => {
  const [showTech, setShowTech] = useState("1");

  const handleShowTech = (value) => {
    setShowTech(value);
  };
  return (
    <main id="main" class="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>
      {data.technology.map((e) => (
        <>
          <div className="dot-technology flex-col">
            <button
              className="small-button"
              aria-selected={showTech == "1" ? true : false}
              onClick={() => handleShowTech("1")}
            >
              1
            </button>
            <button
              className="small-button"
              aria-selected={showTech == "2" ? true : false}
              onClick={() => handleShowTech("2")}
            >
              2
            </button>
            <button
              className="small-button"
              aria-selected={showTech == "3" ? true : false}
              onClick={() => handleShowTech("3")}
            >
              3
            </button>
          </div>
          <article
            className="crew-details technology-details flow"
            hidden={showTech === e.id ? false : true}
          >
            <header class="flow flow--space-small">
              <h2 className="fs-400 ff-serif uppercase">THE TERMINOLOGY…</h2>
              <p className="fs-600 uppercase ff-serif">{e.name}</p>
            </header>
            <p className="fs-300 ">{e.description}</p>
          </article>
          <picture>
            <img
              className={showTech === e.id ? "" : "hidden"}
              src={e.images.landscape}
              alt="img"
            />
          </picture>
        </>
      ))}
    </main>
  );
};

export default TechNology;
