import {Layout, Typography} from "antd";
import React from 'react';
import GridListView from "./components/Grid List View/GridListView";

import JsonData from './cars.json'
const {Header,Content} = Layout;
const {Title} = Typography;

function App() {

  const DisplayData=JsonData.map(
    (car)=>{
        return(
            <tr>
                <td>{car.Name}</td>
                <td>{car.Miles_per_Gallon}</td>
                <td>{car.Cylinders}</td>
                <td>{car.Displacement}</td>
                <td>{car.Horsepower}</td>
                <td>{car.Weight_in_lbs}</td>
                <td>{car.Acceleration}</td>
                <td>{car.Year}</td>
                <td>{car.Origin}</td>
            </tr>
        )
    }
  )

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
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content>
          <GridListView
            carSalesData={JsonData}
          />
        </Content>
      </Layout>
    </Layout>
    <div>
        <table class="table table-striped">
          <thead>
            <tr>
                <th>Name</th>
                <th>Miles_per_Gallon</th>
                <th>Cylinders</th>
                <th>Displacement</th>
                <th>Horsepower</th>
                <th>Weight_in_lbs</th>
                <th>Acceleration</th>
                <th>Year</th>
                <th>Origin</th>
            </tr>
          </thead>
          <tbody>
            {DisplayData}
          </tbody>
        </table>

      </div></>
  );
}

export default App;
