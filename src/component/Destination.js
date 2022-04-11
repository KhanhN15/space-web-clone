import { useState } from "react";
import data from "../mock/data.json";
const Destination = () => {
  const [tabs, setTabs] = useState("Moon");

  const handleTabs = (type) => {
    setTabs(type);
  };

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      {data.destinations.map((e, index) => (
        <>
          <picture id="moon-image" hidden={tabs == e.name ? false : true}>
            <source srcSet={e.images.webp} type="image/webp" />
            <img src={e.images.png} />
          </picture>

          <div
            className="tab-list underline-indicators flex"
            aria-label="destination list"
          >
            <button
              aria-selected={tabs == "Moon" ? true : false}
              role="tab"
              aria-controls="moon-tab"
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleTabs("Moon")}
              data-image="moon-image"
            >
              Moon
            </button>
            <button
              aria-selected={tabs == "Mars" ? true : false}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleTabs("Mars")}
              data-image="moon-image"
            >
              Mars
            </button>
            <button
              aria-selected={tabs == "Europa" ? true : false}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleTabs("Europa")}
              data-image="moon-image"
            >
              Europa
            </button>
            <button
              aria-selected={tabs == "Titan" ? true : false}
              role="tab"
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleTabs("Titan")}
              data-image="moon-image"
            >
              Titan
            </button>
          </div>
          <article
            className="destination-info flow"
            hidden={tabs == e.name ? false : true}
            id="moon-tab"
            tabIndex={0}
            role="tabpanel"
          >
            <h2 className="fs-800 uppercase ff-serif">{e.name}</h2>
            <p>{e.description}</p>
            <div className="destination-meta flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase">{e.distance}</p>
              </div>
              <div>
                <h3 className="text-accent fs-200 uppercase">
                  Est. travel time
                </h3>
                <p className="ff-serif uppercase">{e.travel}</p>
              </div>
            </div>
          </article>
        </>
      ))}
    </main>
  );
};

export default Destination;
