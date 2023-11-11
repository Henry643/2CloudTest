import React from "react";
import {Col,Row} from "antd";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import{CarTwoTone } from '@ant-design/icons'
import{CalendarTwoTone } from '@ant-design/icons'


const ListCard = ({carData}) => {
  return (
    <MDBCard style={{padding:10,margin:5}}>
        <MDBCardTitle>{carData.Name}</MDBCardTitle>
        <Row>
          <Col md={20}>
            <Row>
              <MDBBtn color="secondary" disabled style={{margin:5}}>{carData.Origin}</MDBBtn>
              <MDBBtn color="secondary" disabled style={{margin:5}}>{carData.Weight_in_lbs} lbs</MDBBtn>
              <MDBBtn color="secondary" disabled style={{margin:5}}>{carData.Horsepower} Horsepower</MDBBtn>
              <MDBCardText style={{margin:5}}><CarTwoTone />{carData.Cylinders} Cylinders</MDBCardText>
              <MDBCardText style={{margin:5}}><CalendarTwoTone />{carData.Year}</MDBCardText>
            </Row>
          </Col>
          <Col md={4}>
            <MDBBtn>See more</MDBBtn>
          </Col>
        </Row>
    </MDBCard>
  );

}
export default ListCard