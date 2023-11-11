import React from "react";
import { useState } from "react";
import {Button,Row} from "antd";
import{UnorderedListOutlined,AppstoreOutlined} from '@ant-design/icons'
import GridCard from "./GridCard";
import ListCard from "./ListCard";

const GridListView = ({carSalesData}) => {
   const [view, setView] = useState(false);

   const DisplayData = carSalesData.map(
    (car)=>{
        return(
            <ListCard carData={car}/>
        )
    }
  )

   return(
    <>
      <div
        style={{textAlign:"center",marginTop:"2rem",marginBottom:"2rem"}}
        >
       <Button size="large" icon={<UnorderedListOutlined style={{fontSize:"1.5rem"}}/>}/>
       <Button size="large" icon={<AppstoreOutlined style={{fontSize:"1.5rem"}}/>}/>
      </div>
      {DisplayData}
    </>

   );


};

export default GridListView