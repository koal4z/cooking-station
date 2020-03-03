import React from "react";
import SwiperComponent from "./SwiperComponent";
import CardComponent from "./CardComponent";


export default function Main(props) {
  return (
    <main>
      <section style={{ marginBottom: "2%" }}>
        <SwiperComponent />
      </section>
      <hr style={{ borderColor: "#FFB677", borderWidth: "3px" }} />
      <section
        style={{
          overflowY: "scroll",
          maxHeight: "46vh",
          marginTop: "2%",
          padding: "0 1.5%",
          height: "500px"
        }}
      >
        <CardComponent data={props.data} select={props.selectPages} /> 
      </section>
    </main>
  );
}
