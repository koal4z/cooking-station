import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function RegisterLogin() {
  return (
    <section
      style={{
        margin: "2% 0",
        backgroundColor: "#FFB677",
        width: "100%",
        height: "730px",
        paddingTop: "2.5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div style={{ margin: "0 5%" }}>
        <h1 style={{ color: "white" }}>Register</h1>
        <hr style={{ marginTop: "5px", marginBottom: "2%" }} />
        <form
          style={{ display: "flex", flexDirection: "column" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
          />

          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            style={{ width: "50%", margin: "1% auto" }}
            variant="contained"
            color="default"
          >
            registed
          </Button>
        </form>
      </div>
      <div style={{ margin: "0 5%" }}>
        <h1 style={{ color: "white" }}>login</h1>
        <hr style={{ marginTop: "5px", marginBottom: "2%" }} />
        <form
          style={{ display: "flex", flexDirection: "column" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            style={{ margin: "1% 5%" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button
            style={{ width: "50%", margin: "1% auto" }}
            variant="contained"
            color="default"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
