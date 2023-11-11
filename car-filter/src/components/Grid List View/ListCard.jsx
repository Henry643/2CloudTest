import React from "react";
import {Col,Row} from "antd";
import Popup from 'reactjs-popup';
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
import 'reactjs-popup/dist/index.css';

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
          <Popup
            trigger={<MDBBtn> See more </MDBBtn>}
            modal
            nested
          >
            {close => (
              <div className="customModal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Vehicle Condition Report </div>
                <Row className="square border">
                  <Col className="column1" md={6}>Name</Col>
                  <Col className="column2">{carData.Name}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Miles per Gallon</Col>
                  <Col className="column2">{carData.Miles_per_Gallon}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Cylinders</Col>
                  <Col className="column2">{carData.Cylinders}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Displacement</Col>
                  <Col className="column2">{carData.Displacement}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Horsepower</Col>
                  <Col className="column2">{carData.Horsepower}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Weight</Col>
                  <Col className="column2">{carData.Weight_in_lbs} lbs</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Acceleration</Col>
                  <Col className="column2">{carData.Acceleration}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Year</Col>
                  <Col className="column2">{carData.Year}</Col>
                </Row>
                <Row className="square border border-top-0">
                  <Col className="column1" md={6}>Origin</Col>
                  <Col className="column2">{carData.Origin}</Col>
                </Row>

              </div>
            )}
          </Popup>
          </Col>
        </Row>
    </MDBCard>
  );

}
export default ListCard