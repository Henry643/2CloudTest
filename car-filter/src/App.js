import {Button, Layout, Typography} from "antd";
import React, { useEffect,useState } from 'react';
import GridListView from "./components/Grid List View/GridListView";
import "./App.css"
import JsonData from './cars.json'
const {Header,Content} = Layout;
const {Title} = Typography;




function App() {
  
  const [filteredData, setfilteredData] = useState([]);
  const [Horsepower,setHorsepower] = useState('');
  const [MilesPerGallon,setMilesPerGallon] = useState('');
  const [Cylinders,setCylinders] = useState('');
  const [Displacement,setDisplacement] = useState('');
  const [Acceleration,setAcceleration] = useState('');
  const [Weight,setWeight] = useState('');
  const [completefilteredData, setcompletefilteredData] = useState([]);
  function optionSelected(e) {
    let { value } = e.target;
    if (value) {
      let filteredData = JsonData.filter(element => element["Origin"] == value);
      setfilteredData(filteredData);
    }
  };
  
  function renderFilterOptions(filterOption,filteredData) {
    if (filteredData) {
      let options = Array.from(new Set(filteredData.map(element => element[filterOption])));
      return options.map((option, i) => <option key={i} value={option}> {option} </option>);
    }
    return [];
  }
  
  function renderTableData(data) {
    return data.map((element, i) => (
      <tr key={i}>
        <td>{element.Name}</td>
        <td>{element.Origin}</td>
        <td>{element.Horsepower}</td>
        <td>{element.Miles_per_Gallon}</td>
        <td>{element.Cylinders}</td>
        <td>{element.Displacement}</td>
        <td>{element.Acceleration}</td>
        <td>{element.Weight_in_lbs}</td>
        <td>{element.Year}</td>
      </tr>
    ));
  }
  
  
 const filterHorsepowerSelected = (e) => { 
    let  {value}  = e.target;
    setHorsepower(value);
  }

  const filterMilesPerGallonSelected = (e) => { 
    let  {value}  = e.target;
    setMilesPerGallon(value);
  }

  const filterCylindersSelected = (e) => { 
    let  {value}  = e.target;
    setCylinders(value);
  }
  const filterDisplacementSelected = (e) => { 
    let  {value}  = e.target;
    setDisplacement(value);
  }

  const filterAccelerationSelected = (e) => { 
    let  {value}  = e.target;
    setAcceleration(value);
  }

  const filterWeightSelected = (e) => { 
    let  {value}  = e.target;
    setWeight(value);
  }
  
  const completeFilter =  () => {
    alert(Horsepower+","+MilesPerGallon+","+Cylinders+","+Displacement+","+Acceleration+","+Weight);
    let finalData = filteredData.filter(element => element["Horsepower"] == Horsepower);
    finalData = finalData.filter(element => element["Miles_per_Gallon"] == MilesPerGallon);
    finalData = finalData.filter(element => element["Cylinders"] == Cylinders);
    finalData = finalData.filter(element => element["Displacement"] == Displacement);
    finalData = finalData.filter(element => element["Acceleration"] == Acceleration);
    finalData = finalData.filter(element => element["Weight_in_lbs"] == Weight);
    setcompletefilteredData(finalData);
  }

    return (
      <><Layout>
        <Header className="header">
          <Title
            level={3}
            style={{ color: "white", textAlign: "center", marginTop: "15px" }}
          >
            React Demo
          </Title>
        </Header>
        <div>
          <div>
            <label> Filter By </label>
            <select onChange={optionSelected.bind(this)}>
              <option value="">  </option>
              <option value="USA"> USA </option>
              <option value="Europe"> Europe </option>
              <option value="Japan"> Japan </option>
            </select>

            <select onChange={filterHorsepowerSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Horsepower",filteredData)}
            </select>

            <select onChange={filterMilesPerGallonSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Miles_per_Gallon",filteredData)}
            </select>

            <select onChange={filterCylindersSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Cylinders",filteredData)}
            </select>

            <select onChange={filterDisplacementSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Displacement",filteredData)}
            </select>

            <select onChange={filterAccelerationSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Acceleration",filteredData)}
            </select>

            <select onChange={filterWeightSelected.bind(this)}>
              <option value="">  </option>
              {renderFilterOptions("Weight_in_lbs",filteredData)}
            </select>

            <button onClick={completeFilter}> filter </button>

          </div>
          <table border="1">
            <thead>
              <th> Name </th>
              <th> Origin </th>
              <th> Horsepower </th>
              <th> Miles_per_Gallon </th>
              <th> Cylinders </th>
              <th> Displacement </th>
              <th> Acceleration </th>
              <th> Weight_in_lbs </th>
              <th> Year </th>
            </thead>
            <tbody>
              {renderTableData(completefilteredData)}
            </tbody>
          </table>
        </div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>
            {/*
                <GridListView
                  carSalesData={JsonData}
                />
               */}
          </Content>
        </Layout>
      </Layout>
      </>
    );
}

export default App;
