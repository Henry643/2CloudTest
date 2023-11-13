import React from "react";
import { useState } from "react";
import {Button,Row} from "antd";
import{UnorderedListOutlined,AppstoreOutlined} from '@ant-design/icons'
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import {Col} from "antd";

const GridListView = ({carSalesData}) => {
   const [view, setView] = useState(false);
   const [numberlimit, setnumberlimit] = useState(15);

   const DisplayListData = carSalesData.slice(0,numberlimit).map(
    (car)=>{
        return(
            <ListCard carData={car}/>
        )
    }
  )
  const DisplayGridData = carSalesData.map(
    (car)=>{
        return(
          <Col md={7} style={{margin:"2%"}}>
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
          <Button size="middle" 
          onClick = {() =>setView(false)}
          icon={<UnorderedListOutlined style={{fontSize:"1.5rem"}}/>}/>
       :  <Button size="middle"
          onClick = {() =>setView(true)}
          icon={<AppstoreOutlined style={{fontSize:"1.5rem"}}/>}/>
          }
      </div>
      {view == true ? (<Row>{DisplayGridData}</Row>)
      :(<div>{DisplayListData}</div>)
      }
      <br/>
      <div
        style={{textAlign:"center",marginTop:"1rem"}}
        >
      {carSalesData.length>0 ?<Button size="large" type="primary" style={{ background: "white", borderColor: "blue",color:"blue"}}
          onClick = {() => setnumberlimit(numberlimit+15)}
      > Load more </Button>: <div></div>}
      
      </div>
    </>

   );


};

export default GridListView