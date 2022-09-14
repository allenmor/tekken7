import React from "react";
import "./One.css";

function one() {

  let fighters = ["bryan", "anna", 'feng', 'steve', 'hwoarang', 'jin', 'lars', 'paul', 'eddy', 'heihachi', 'kazuya', 'yoshimitsu']

  // Recreate the Fighters grid using this function
  
  const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
  }


  return (
    <>
    <nav id="nav">
      <div>News</div>
      <div>Fighters</div>
      <div>Features</div>
      <div>Guides</div>
      <div><img src="https://tk7.tekken.com/assets/images/header/logo.png" id="logo"/></div>
      <div>Media</div>
      <div>Esports</div>
      <div>Buy Now</div>
    </nav>
    <h1>Fighters</h1>
    <div id="fighters-grid">
      
      {fighters.map((el, i) => {
        return <div className="fighter-thumb"><img style={{height: '100px', width: '100px'}} src={fighterUrl(el)}  /></div>
      })}
    </div>
    </>
  );
}

export default one;
