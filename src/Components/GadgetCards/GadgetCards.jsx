import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";

const GadgetCards = () => {
  const params = useParams();
  const { category } = params;
  const data = useLoaderData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (category) {
      const filterdDatas = [...data].filter(
        (gadget) => gadget.category === category
      );
      setCards(filterdDatas);
    } else {
      setCards(data);
    }
  }, [category, data]);

  return (
    <div>
      {cards.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No products available in this category. Please select a different category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((gadget, idx) => (
            <GadgetCard gadget={gadget} key={idx}></GadgetCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GadgetCards;
