import {Layout, Typography} from "antd";
import React from 'react';
import GridListView from "./components/Grid List View/GridListView";
const {Header,Content} = Layout;
const {Title} = Typography;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Title
          level={3}
          style={{color:"white",textAlign:"center",marginTop:"15px"}}
          >
            React Demo
          </Title>
      </Header>
      <Layout style={{padding:"0 24px 24px"}}>
        <Content>
          <GridListView/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
