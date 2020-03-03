import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CardComponent from "./CardComponent";

export default function Dashboard() {
  return (
    <section
      style={{
        margin: "2% 0",
        backgroundColor: "#FFB677",
        width: "100%",
        height: "75vh",
        paddingTop: "2.5%"
      }}
    >
      <div style={{ margin: "0 2.5%" }}>
        <div
          style={{
            backgroundColor: "#EDEDED",
            display: "flex",
            flexFlow: "row no-wrap"
          }}
        >
          <div
            style={{
              margin: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              style={{
                borderRadius: "100%",
                width: "100px",
                height: "100px",
                marginLeft: "15px"
              }}
              src="https://dummyimage.com/150x150/000/fff.png"
              alt=""
            />
          </div>
          <div
            style={{
              margin: "1.5% 1.5% 1.5% 5%",
              display: "block",
              width: "100%"
            }}
          >
            <h3>Personal Details</h3>
            <hr style={{ marginTop: "0" }} />
            <p>Username: Abanol onlynoy</p>
            <p>Email: aaamzi@google.co</p>
            <p>Register Date: 7 feb 1929</p>
          </div>
        </div>
        <hr />

        <div
          style={{
            backgroundColor: "#EDEDED",
            display: "flex",
            flexFlow: "row no-wrap",
            padding: "1.5% 2%"
          }}
        >
          <Button variant="contained">
            <SortIcon />
          </Button>

          <Button
            style={{ marginLeft: "auto", marginRight: "2%" }}
            variant="contained"
          >
            <AddIcon />
          </Button>

          <Button variant="contained">
            <DeleteIcon />
          </Button>
        </div>
        <div
          style={{ overflowY: "scroll", maxHeight: "40vh", marginTop: "2%" }}
        >
          <CardComponent />
        </div>
      </div>
    </section>
  );
}
