import React from "react";
import { useState } from "react";
import {Button,Row} from "antd";
import{UnorderedListOutlined,AppstoreOutlined} from '@ant-design/icons'
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import {Col} from "antd";

const GridListView = ({carSalesData}) => {
   const [view, setView] = useState(false);
   var rowCounter = 0;

   const DisplayListData = carSalesData.map(
    (car)=>{
        return(
            <ListCard carData={car}/>
        )
    }
  )
  const DisplayGridData = carSalesData.map(
    (car)=>{
        return(
          <Col md={7} style={{margin:10}}>
            <GridCard carData={car}/>
          </Col>
        )
    }
  )

   return(
    <>
      <div
        style={{textAlign:"center",marginTop:"2rem",marginBottom:"2rem"}}
        >
          {view == true ?
          <Button size="large" 
          onClick = {() =>setView(false)}
          icon={<UnorderedListOutlined style={{fontSize:"1.5rem"}}/>}/>
       :  <Button size="large"
          onClick = {() =>setView(true)}
          icon={<AppstoreOutlined style={{fontSize:"1.5rem"}}/>}/>
          }
      </div>
      {view == true ? (<Row>{DisplayGridData}</Row>)
      :(<div>{DisplayListData}</div>)
      }
    </>

   );


};

export default GridListView