import React from "react";
import {Col,Card} from "antd";

const {Meta} = Card;
const GridCard = () => {
  return(
    <div>
        <Col>
          <Card style={{width:"100%"}}>
            <Meta title="Sample Card Grid View" description="aaaaaaaa"/>
          </Card>
        </Col>
    </div>
  )

}
export default GridCard