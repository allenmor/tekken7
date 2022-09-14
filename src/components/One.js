import React from "react";
import "./One.css";

function one() {


  let names = ['akuma', 'alisa' ,'anna', 'asuka', 'bob', 'bryan', 'claudio', 'dragunov', 'eddy', 'eliza', 'feng', 'geese']
  
  const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
  }


  return (
    <>
    <div className="backg">
      <div className="fighters">
        {names.map((el, i) => {
          return <img className="each" src={fighterUrl(el)} /> 
        })}
      </div>
      </div>
    </>
  );
}

export default one;
