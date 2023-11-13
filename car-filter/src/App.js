import {Button, Layout, Typography, Row, Col, Slider, InputNumber,Select, Space,Input} from "antd";
import React, { useEffect,useState } from 'react';
import GridListView from "./components/Grid List View/GridListView";
import "./App.css"
import "./slider.less"
import JsonData from './cars.json'
const {Header,Content} = Layout;
const {Title} = Typography;
const { Option } = Select;



function App() {
  const [inputValue1, setInputValue1] = useState(1);
  const [inputValue2, setInputValue2] = useState(1);
  const [filteredData, setfilteredData] = useState(JsonData);
  const [Origin,setOrigin] = useState('');
  const [Horsepower,setHorsepower] = useState('');
  const [MilesPerGallon,setMilesPerGallon] = useState('');
  const [Cylinders,setCylinders] = useState('');
  const [Displacement,setDisplacement] = useState('');
  const [Acceleration,setAcceleration] = useState('');
  const [Weight,setWeight] = useState('');
  const [searchItem, setSearchItem] = useState('')
  const [completefilteredData, setcompletefilteredData] = useState([]);
  function optionSelected(value) {
    setOrigin(value);
    if (value) {
      let filteredData = JsonData.filter(element => element["Origin"] == value);
      setfilteredData(filteredData);
    }
    else{
      setfilteredData(JsonData);
    }
  };
  
  function renderFilterOptions(filterOption,filteredData) {

    if (filteredData) {
      let options = Array.from(new Set(filteredData.map(element => element[filterOption])));
      options.sort((a,b) => a - b);
      return options.map((option, i) => <Option key={i} value={option}> {option} </Option>);
    }
    return [];
  }
  
  const completeFilter =  () => {
    let finalData = filteredData;
    let marker = 0;
    if(Origin != ""){
      marker = 1;
    };
    if(Horsepower != ""){
      finalData = finalData.filter(element => element["Horsepower"] == Horsepower);
      marker = 1;
    };
    console.log(finalData.length);
    console.log(Horsepower+","+MilesPerGallon+","+Cylinders+","+Displacement+","+Acceleration+","+Weight);
    if(MilesPerGallon != ""){
      finalData = finalData.filter(element => element["Miles_per_Gallon"] == MilesPerGallon);
      marker = 1;
    };
    console.log(finalData.length);
    if(Cylinders!= ""){
      marker = 1;
      finalData = finalData.filter(element => element["Cylinders"] == Cylinders);};
    if(Displacement != ""){
      marker = 1;
      finalData = finalData.filter(element => element["Displacement"] == Displacement);};
    if(Acceleration!= ""){
      marker = 1;
      finalData = finalData.filter(element => element["Acceleration"] == Acceleration);};
    if(Weight!= ""){
      marker = 1;
      finalData = finalData.filter(element => element["Weight_in_lbs"] == Weight);};
    if(searchItem !=""){
      marker = 1;
      finalData = finalData.filter((element) =>element.Name.toLowerCase().includes(searchItem.toLowerCase()));
    };
    
    console.log(finalData.length);
    if(marker == 1){
      setcompletefilteredData(finalData);
    }
    else{
      setcompletefilteredData([]);
    }
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
        <div style={{display: 'flex',  justifyContent:'center', paddingTop:20}}>
          <div>
            <Space wrap>
              <Select value={Origin} style={{ width: 100 }} onSelect={(value)=>optionSelected(value)}>
                <Option value=""> Origin </Option>
                <Option value="USA"> USA </Option>
                <Option value="Europe"> Europe </Option>
                <Option value="Japan"> Japan </Option>
              </Select>

              <Select value={Horsepower} style={{ width: 120 }} onSelect={(value) => setHorsepower(value)}>
                <Option value=""> Horsepower </Option>
                {renderFilterOptions("Horsepower",filteredData)}
              </Select>

              <Select value={MilesPerGallon} style={{ width: 150 }} onSelect={(value) => setMilesPerGallon(value)}>
                <Option value=""> Miles per Gallon </Option>
                {renderFilterOptions("Miles_per_Gallon",filteredData)}
              </Select>

              <Select value={Cylinders} style={{ width: 100 }} onSelect={(value) => setCylinders(value)}>
                <Option value=""> Cylinders </Option>
                {renderFilterOptions("Cylinders",filteredData)}
              </Select>

              <Select value={Displacement} style={{ width: 130 }} onSelect={(value) => setDisplacement(value)}>
                <Option value=""> Displacement </Option>
                {renderFilterOptions("Displacement",filteredData)}
              </Select>

              <Select value={Acceleration} style={{ width: 120 }} onSelect={(value) => setAcceleration(value)}>
                <Option value=""> Acceleration </Option>
                {renderFilterOptions("Acceleration",filteredData)}
              </Select>

              <Select value={Weight} style={{ width: 100 }} onSelect={(value) => setWeight(value)}>
                <Option value=""> Weight </Option>
                {renderFilterOptions("Weight_in_lbs",filteredData)}
              </Select>
            </Space>
            <br/>
            {/* 
            <>
              <Slider
                range
                defaultValue={[inputValue1, inputValue2]}
                value={[inputValue1, inputValue2]}
                onChange={(value) => {
                  setInputValue1(value[0]);
                  setInputValue2(value[1]);
                }}
              />
              <div>
                <InputNumber
                  style={{ margin: "0 16px" }}
                  value={inputValue1}
                  onChange={(value) => setInputValue1(value)}
                />
              </div>
              <div>
                <InputNumber
                  style={{ margin: "0 16px" }}
                  value={inputValue2}
                  onChange={(value) => setInputValue2(value)}
                />
              </div>
            </>
              */}
            <br/>
            <div className="d-flex justify-content-between gap-3">
                <Input
                  type="text"
                  value={searchItem.toString()}
                  onChange={(e)=> setSearchItem(e.target.value)}
                  placeholder='Type to search'
                />
                <Button type="primary" onClick={completeFilter}> Apply Filter </Button>
                <Button type="primary" onClick={()=>{setSearchItem("");setHorsepower("");setMilesPerGallon("");setCylinders("");setDisplacement("");setAcceleration("");setWeight("");setfilteredData(JsonData);setcompletefilteredData([]);}}> Clear Filter </Button>
            </div>
          </div>

        </div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>
            <GridListView
              carSalesData={completefilteredData}
            />
          </Content>
        </Layout>
      </Layout>
      </>
    );
}

export default App;
