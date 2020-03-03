import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RecipePages(props) {
  console.log(props.data);
  return (
    <section>
      <Row style={{ width: "100%", margin: "2% 0", height: "730px" }}>
        <Col
          sm={4}
          style={{
            backgroundColor: "#C4C4C4",
            padding: "0",
            overflowY: "auto",
            height: "730px"
          }}
        >
          {JSON.parse(props.data.image).map((item, idx) => {
            return (
              <img
                key={idx}
                style={{ width: "100%", height: "auto" }}
                src={item}
                alt=""
              />
            );
          })}
        </Col>
        <Col
          sm={8}
          style={{
            backgroundColor: "#FFB677",
            padding: "0",
            overflowY: "auto",
            height: "730px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
              marginBottom: "16px"
            }}
          >
            <h1
              style={{
                color: "#FFF",
                backgroundColor: "#FF8364",
                padding: "2% 14px"
              }}
            >
              {props.data.menu}
            </h1>
          </div>
          <div style={{ margin: "0 2.5%" }}>
            <h3>Ingredients</h3>
            <hr />
            <ol>
              {JSON.parse(props.data.ingradient).map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ol>
          </div>

          <div style={{ margin: "0 2.5%" }}>
            <h3>Directions</h3>
            <hr />
            <ol>
              {JSON.parse(props.data.direction).map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ol>
          </div>
          {/* <div style={{ margin: "0 2.5%" }}>
            <h3>Nutrition Facts</h3>
            <hr />
            <p>
              Per Serving: 158 calories; 3.9 g fat; 29.8 g carbohydrates; 3.2 g
              protein; 30 mg cholesterol; 114 mg sodium. Full nutrition
            </p>
          </div> */}
        </Col>
      </Row>
    </section>
  );
}
