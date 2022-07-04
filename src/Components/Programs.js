import React from "react";
import img1 from "../img/exercises.png";
import img2 from "../img/gymnastics.png";
import img3 from "../img/yoga.png";
import img4 from "../img/24-7.png";
import img5 from "../img/gym.png";
import img6 from "../img/yoga.png";
import { ProgrammCard } from "./ProgrammCard";

export const Programs = () => {
  return (
    <>
      <section className="sec_2">
       
          <div className="cat_flx">
            <ProgrammCard image={img1} title="Zumba" />
            <ProgrammCard image={img2} title="Souna" />
            <ProgrammCard image={img3} title="Exclusive" />
          </div>

          <div className="cat_flx2">
            <ProgrammCard image={img4} title="open 24/7" />
            <ProgrammCard image={img5} title="Personal" />
            <ProgrammCard image={img6} title="Yoga" />
          </div>
  
      </section>
    </>
  );
};
