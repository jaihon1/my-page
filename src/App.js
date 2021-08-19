import React from 'react';
import { Layout, Typography } from 'antd';
import { About } from './About';
import { Home } from './Home';

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
          <div className="navbar" style={{ position: 'absolute', right: "0px" }}>
              <Link to="/" style={{ padding: '13px', color: '#000000' }}>Home</Link>
              <Link to="/about" style={{ padding: '13px', color: '#000000' }}>About</Link>
          </div>
        </Header>
        <Content style={{ padding: '0 50px', backgroundColor: '#F8F8F8' }}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ padding: '0 50px', backgroundColor: '#F5F5F5', textAlign: 'right' }}>
          <Text>Codex helped human!</Text>
        </Footer>
      </Router>
    </Layout>
  )
}

export default App;
