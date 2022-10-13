import React, { useContext, useState } from "react";
import "./DashboardEmployees.css";
import { DashboardContext } from "../../context/DashboardContext";
import PieChart from "../../Components/AllChart/PieChart";

export default function DashboardEmployees() {
  const { dataChart, changeYear, yearData } = useContext(DashboardContext);

  return (
    <div className="global-container">
      <h1>Les résultats de l'année : {yearData}</h1>

      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option selected={yearData === "2020" && "selected"} value="2020">2020</option>
          <option selected={yearData === "2019" && "selected"} value="2019">2019</option>
          <option selected={yearData === "2018" && "selected"} value="2018">2018</option>
          <option selected={yearData === "2017" && "selected"} value="2017">2017</option>
        </select>
      </form>


        <h2>Les secteurs qui ont recruté :</h2>
        <PieChart
          labels={["Marketing", "Securité", "Front-End"]}
          data={dataChart.chart5}
        />
        <h2>L'âge des nouveaux employés :</h2>
        <PieChart
          labels={["< 20", "> 20 && < 30", "> 30 && < 60"]}
          data={dataChart.chart6}
        />
        <h2>Le niveau d'études :</h2>
        <PieChart
          labels={["Bac", "> Bac + 2", "> Bac + 5"]}
          data={dataChart.chart7}
        />
        <h2>La nationalité :</h2>
        <PieChart labels={["USA", "Germany", "UK"]} data={dataChart.chart8} />
   
    </div>
  );
}
