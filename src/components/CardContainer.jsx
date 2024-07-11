import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";
import "../App.css";


const CardContainer = () => {

    const [word,setWord] = useState("")

   

       const veri=data.filter((item)=> item.name.toLowerCase().includes(word.toLowerCase()))

       console.log(veri)
        


    
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="mt-3 w-75">
        <input
          type="search"
          className="form-control"
          id="search-bar"
          placeholder="Search Player..."
          onChange={(e)=>setWord(e.target.value)}
        />
      </div>

      <div className="rounded-4 my-4 p-3  card-container container d-flex justify-content-center gap-5 flex-wrap">
        {veri.map((item) => (
          <PlayerCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
