
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AddCompany from './components/AddCompany';
import ViewCompany from './components/ViewCompany';
import AddStock from './components/AddStock';
import ViewStock from './components/ViewStock';

function App() {
  return (
   
  <div>
    <Router>
    <Container>
      <Header/>

      <Row>
        <Col md={4}>
          <Menu />
        </Col>

        <Col md={8}>

          <Route path="/" component={Home} exact />
          <Route path="/add-company" component={AddCompany} exact />
          <Route path="/view-company" component={ViewCompany} exact />
          <Route path="/add-stock" component={AddStock} exact />
          <Route path="/view-stock" component={ViewStock} exact />

        </Col>
      </Row>
    </Container>
    </Router>
  </div>

  );
}

export default App;
