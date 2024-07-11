import React from "react";
import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
    const [player, setPlayer] = useState("")

    const changeCard=(name)=>{
        
        setPlayer(player !== name? name : "")

    }
  
  return (
    <div className="g-3 justify-content-center row">
      <div
        className="card card-1 col-xl-3 col-lg-4 col-md-6 col-sm-12 p-0"
        style={{ width: "18rem", height:"32rem"}}
      >{
            name !== player? (
                <div onClick={()=>changeCard(name)} style={{height:"100%"}}>
                    <img src={img} className="card-img-top h-100" alt="..." />
                </div>
            ) : (
            <ul onClick={()=>changeCard(name)} className="list-group mt-0 p-5" style={{height:"100%"}}>
          <li className="h5 text-start list-unstyled">🎞️ {statistics[0]}</li>
          <li className="h5 text-start  list-unstyled">⭐ {statistics[1]}</li>
          <li className="h5 text-start list-unstyled">📽️ {statistics[2]}</li>
          <li className="h5 text-start list-unstyled">🎥 {statistics[3]}</li>
         </ul>
        )





      }
        
        <div className="card-footer">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>

        
    </div>
  );
};

export default PlayerCard;
