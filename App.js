
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddCompany from './components/AddCompany';
import ViewCompany from './components/ViewCompany';
import AddStock from './components/AddStock';
import ViewStock from './components/ViewStock';
import CompanyTable from './components/CompanyTable';
import TestTable from './components/Testtable';


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

          <switch>
            <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/add-company" element={<AddCompany/>} exact />
            <Route path="/view-company" element={<ViewCompany/>} exact />
            <Route path="/add-stock" element={<AddStock/>} exact />
            <Route path="/view-stock" element={<ViewStock/>} exact />
            </Routes>
          
          </switch>
          
        
         

        </Col>
      </Row>
    </Container>
    </Router>
{/* <hr/>
<CompanyTable/> */}
{/* <hr/>
<TestTable/> */}
  </div>


  );
}

export default App;
