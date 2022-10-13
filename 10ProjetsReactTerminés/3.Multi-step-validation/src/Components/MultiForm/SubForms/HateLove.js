import React, { useState } from "react";
import "./SubForm.css";

export default function HateLove(props) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const handleTxtArea = (e, pref) => {
      if(pref === "love") {
          setFormData({
              prefs: {
                  ...formData.prefs,
                  love: e.target.value
              }
          })
      }
      else if (pref === "hate"){
        setFormData({
            prefs: {
                ...formData.prefs,
                hate: e.target.value
            }
        })
      }
  }

  const preventFunc = (e) => {
    e.preventDefault();

    props.modifyIndex(6, formData)
  };

  const handleReturn = () => {
    props.modifyIndex(4);
  };

  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>

      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "love")}
        id="prefered"
        placeholder="Un ou plusieurs, si tu en as"
      ></textarea>

      <label htmlFor="hated">
        Les aliments que tu ne supportes pas, séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "hate")}
        id="hated"
        placeholder="Un ou plusieurs, si tu en as"
      ></textarea>

      <div className="container-nav-btns">
        <button type="button" onClick={handleReturn} className="prev">
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  );
}
