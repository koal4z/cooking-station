import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import RecipePages from "./components/RecipePages";
import AddReciptPages from "./components/AddReciptPages";
import Dashboard from "./components/Dashboard";
import RegisterLogin from "./components/RegisterLogin";
import Logout from "./components/Logout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useAxios from "axios-hooks";
function App() {
  const [id, setId] = useState(0);

  const [{ data, loading, error }] = useAxios("http://localhost:5000/recipes");
  if (error) {
    return <p>error!!</p>;
  }

  const handlePageClick = id => {
    setId(id-1)
  };

  return (
    <Container
      className="container"
      style={{
        width: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Router>
        <Row style={{ height: "70px", backgroundColor: "#FFB677" }}>
          <Col style={{ padding: "0" }}>
            <Header />
          </Col>
        </Row>
        <Row style={{ height: "100%" }}>
          <Col style={{ padding: "0" }}>
            <Switch>
              <Route exact path="/">
                {!loading ? (
                  <Main data={data} selectPages={handlePageClick} />
                ) : null}
              </Route>
              <Route path="/addmenu">
                <AddReciptPages />
              </Route>
              {/* <Route path="/dashboard">
                <Dashboard />
              </Route> */}
              <Route path="/login">
                <RegisterLogin />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/recipepages">
                {!loading ? <RecipePages data={data[id]} /> : null}
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row
          style={{
            height: "12.5vh",
            backgroundColor: "#FFB677",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Footer />
        </Row>
      </Router>
    </Container>
  );
}

export default App;
