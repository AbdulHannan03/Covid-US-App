import axios from "axios";
import React, { useEffect, useState } from "react";
import "./state.css"
const State = () => {
  const [data, setdata] = useState([]);

  const api = axios.create({
    baseURL: "https://api.covidtracking.com/v1/states/current.json",
  });

  const getCovidData = () => {
    api.get("").then((e) => {
      setdata(e.data);
    });
    console.log(data);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="mb-5 pt-4">Covid-19 Tracker Dashboard</h1>
        <div className="table-responsive">
          <table className="table table-hover shadow border">
            <thead className="bg-dark text-light shadow mb-2">
              <tr>
                <th>State</th>
                <th>Positive</th>
                <th>Probable Cases</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, i) => {
                return (
                  <tr key={i}>
                    <th>{curElement.state}</th>
                    <td>{curElement.positive}</td>
                    <td>{curElement.probableCases==null?"Not Confirmed":curElement.probableCases}</td>
                    <td>{curElement.recovered==null?"Not Confirmed":curElement.recovered}</td>
                    <td>{curElement.death}</td>
                    <td>{curElement.checkTimeEt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default State;
