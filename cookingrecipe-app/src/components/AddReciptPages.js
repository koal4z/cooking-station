import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DoneIcon from "@material-ui/icons/Done";
import axios from "axios";
export default function AddReciptPages() {
  const [newMenu, setNewMenu] = useState({
    title: "",
    ingradient: "",
    direction: "",
    image: ""
  });

  const [ingradientList, setIngradientList] = useState([]);
  const [directionList, setDirectionList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const addTitle = e => {
    const menuTitle = e.target.value;
    const name = e.target.name;
    // console.log(name);
    // console.log(menuTitle);
    setNewMenu({ ...newMenu, [name]: menuTitle });
  };

  const addIngredient = () => {
    if (newMenu.ingradient !== "") {
      setIngradientList([...ingradientList, newMenu.ingradient]);
    }
    setNewMenu({ ...newMenu, ["ingradient"]: "" });
  };

  const handleDeleteIngradient = e => {
    let id = parseInt(e.target.id);
    setIngradientList(() => {
      return ingradientList.filter((item, idx) => {
        return id !== idx;
      });
    });
  };

  const addDirection = () => {
    if (newMenu.direction !== "") {
      setDirectionList([...directionList, newMenu.direction]);
    }
    setNewMenu({ ...newMenu, ["direction"]: "" });
  };

  const handleDeleteDirection = e => {
    let id = parseInt(e.target.id);
    setDirectionList(() => {
      return directionList.filter((item, idx) => {
        return id !== idx;
      });
    });
  };

  const addImage = () => {
    if (newMenu.image !== "") {
      setImageList([newMenu.image, ...imageList]);
    }
    setNewMenu({ ...newMenu, ["image"]: "" });
  };

  const handleDeleteImage = e => {
    let id = parseInt(e.target.id);
    setImageList(() => {
      return imageList.filter((item, idx) => {
        return id !== idx;
      });
    });
  };

  const handleSubmit = e => {
    const data = {
      title: newMenu.title,
      ingradient: ingradientList,
      direction: directionList,
      image: imageList
    };
    axios
      .post("http://localhost:5000/create-recipe", {
        menu: newMenu.title,
        typeRecipe: "",
        ingradient: JSON.stringify(ingradientList),
        direction: JSON.stringify(directionList),
        image: JSON.stringify(imageList)
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
    console.log(data);
    setIngradientList([]);
    setDirectionList([]);
    setImageList([]);
    setNewMenu({
      title: "",
      ingradient: "",
      direction: "",
      image: ""
    });
  };

  return (
    <section>
      <form>
        <Row
          style={{
            width: "100%",
            margin: "2% 0",
            overflowY: "scroll",
            overflowX: "hidden",
            height: "77vh"
          }}
        >
          <Col
            style={{
              backgroundColor: "#FFB677",
              padding: "0"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px"
              }}
            >
              <h1
                style={{
                  color: "#FFF",
                  backgroundColor: "#FF8364",
                  padding: "2% 14px",
                  margin: "0 auto"
                }}
              >
                {newMenu.title !== "" ? newMenu.title : "Add Your menu"}
              </h1>
              <TextField
                style={{ margin: "2% 5%" }}
                name="title"
                id="outlined-basic"
                label="Menu"
                variant="outlined"
                onChange={addTitle}
                value={newMenu.title}
              />
            </div>
            <div style={{ margin: "3% 2.5%" }}>
              <h3>Ingredients</h3>
              <hr />
              <ol>
                {ingradientList.map((ingradient, idx) => {
                  return (
                    <li key={idx} style={{ padding: "9px 0" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <p
                          style={{
                            maxWidth: "500px",
                            height: "auto",
                            wordBreak: "break-all"
                          }}
                        >
                          {ingradient}
                        </p>
                        <span
                          style={{
                            display: "block",
                            float: "right",
                            backgroundColor: "red",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            cursor: "pointer"
                          }}
                          id={idx}
                          onClick={handleDeleteIngradient}
                        ></span>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <Row style={{ width: "100%", margin: "0" }}>
                <Col style={{ padding: "0" }} sm={10}>
                  <TextField
                    style={{ width: "98%" }}
                    id="outlined-basic"
                    label="Add Ingredient"
                    variant="outlined"
                    name="ingradient"
                    onChange={addTitle}
                    value={newMenu.ingradient}
                  />
                </Col>
                <Col style={{ padding: "0" }} sm={2}>
                  <Button
                    style={{ width: "100%", height: "100%" }}
                    variant="contained"
                    onClick={addIngredient}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
            </div>

            <div style={{ margin: "3% 2.5%" }}>
              <h3>Directions</h3>
              <hr />
              <ol>
                {directionList.map((direction, idx) => {
                  return (
                    <li key={idx} style={{ padding: "9px 0" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <p
                          style={{
                            maxWidth: "500px",
                            height: "auto",
                            wordBreak: "break-all"
                          }}
                        >
                          {direction}
                        </p>
                        <span
                          style={{
                            display: "block",
                            float: "right",
                            backgroundColor: "red",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            cursor: "pointer"
                          }}
                          id={idx}
                          onClick={handleDeleteDirection}
                        ></span>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <Row style={{ width: "100%", margin: "0" }}>
                <Col style={{ padding: "0" }} sm={10}>
                  <TextField
                    name="direction"
                    style={{ width: "98%" }}
                    id="outlined-basic"
                    label="Add Directions"
                    variant="outlined"
                    onChange={addTitle}
                    value={newMenu.direction}
                  />
                </Col>
                <Col style={{ padding: "0" }} sm={2}>
                  <Button
                    style={{ width: "100%", height: "100%" }}
                    variant="contained"
                    onClick={addDirection}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
            </div>

            <div style={{ margin: "3% 2.5%" }}>
              <h3>Add Your Image</h3>
              <hr />
              <Row style={{ width: "100%", margin: "0" }}>
                <Col style={{ padding: "0" }}>
                  <div
                    style={{
                      backgroundColor: "#C4C4C4",
                      width: "100%",
                      overflowX: "scroll",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      padding: "0 0.4%"
                    }}
                  >
                    {imageList.map((img, idx) => {
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: "0 0.4%"
                          }}
                        >
                          <img
                            id={idx}
                            style={{
                              width: "auto",
                              height: "150px",
                              margin: "0.8% 0.4%"
                            }}
                            src={img}
                            alt={`pic${idx}`}
                            onClick={handleDeleteImage}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <TextField
                    style={{ width: "100%", margin: "1% 0" }}
                    size="small"
                    id="outlined-basic"
                    label="Add Image"
                    variant="outlined"
                    name="image"
                    onChange={addTitle}
                    value={newMenu.image}
                  />
                  <Button
                    style={{ width: "100%" }}
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                    onClick={addImage}
                  >
                    Upload
                  </Button>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      style={{ width: "20%", margin: "3% 0 2% 0" }}
                      variant="contained"
                      color="default"
                      startIcon={<DoneIcon />}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </form>
    </section>
  );
}
