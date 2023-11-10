import React from "react";
import {Col,Card} from "antd";

const {Meta} = Card;
const GridCard = () => {
  return(
    <div>
        <Col>
          <Card
            hoverable
            style={{width:240 }}
            cover={
                <img
                  src="https://unsplash.com/photos/a-person-standing-in-a-narrow-canyon-between-two-mountains-lrhF4w-KKjA"
                  alt="exmples"
                />
            }
          >
            <Meta title="Sample Card Grid View" description="aaaaaaaa"/>
          </Card>
        </Col>
    </div>
  )

}
export default GridCard