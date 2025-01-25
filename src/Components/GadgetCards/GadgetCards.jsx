import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import GadgetCard from "../GadgetCard/GadgetCard";

const GadgetCards = () => {
    const params = useParams();
    const {category} = params;
    const data = useLoaderData();
    const [cards, setCards] = useState([])


    console.log(category, data);
    useEffect(()=>{
        if(category){
            const filterdDatas = [...data].filter(gadget => gadget.category === category);
            setCards(filterdDatas)
        }
        else{
            setCards(data)
        }
    
    },[category, data])
  return (
    <div>
        {
            cards.map((gadget, idx) => <GadgetCard gadget={gadget} key={idx}></GadgetCard>)
        }
    </div>
  )
}

export default GadgetCards