import React from 'react';
import { Layout, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { About } from './About';
import { Home } from './Home';
import { Data } from './Data';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'antd/dist/antd.css';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header style={{ backgroundColor: '#F5F5F5' }}>
          <div className="navbar" style={{ position: 'absolute', right: "55px" }}>
              <Link to="/" style={{ padding: '13px', color: '#000000' }}>Home</Link>
              <Link to="/data" style={{ padding: '13px', color: '#000000' }}>Data</Link>
              <Link to="/about" style={{ padding: '13px', color: '#000000' }}>About</Link>
          </div>
          <div className="navbar" style={{ position: 'absolute', right: "13px" }}>
              <Avatar size={32} icon={<UserOutlined />} />
          </div>
        </Header>
        <Content style={{ padding: '0 50px', backgroundColor: '#F8F8F8' }}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ padding: '0 50px', backgroundColor: '#F5F5F5', textAlign: 'right' }}>
          <Text>Codex help hooman create this web site!</Text>
        </Footer>
      </Router>
    </Layout>
  )
}

export default App;
