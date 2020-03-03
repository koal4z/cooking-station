import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import RecipePages from "./RecipePages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";
export default function CardComponent(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {props.data.map(detail => {
        return (
          <Card
            key={detail.id}
            style={{ width: "100%", maxWidth: "49% ", margin: "0 0 2.5% 0" }}
            onClick={() => props.select(detail.id)}
          >
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/recipepages/${detail.id}`}
            >
              <CardHeader
                title={detail.menu}
                subheader={
                  detail.typeRecipe !== ""
                    ? JSON.parse(detail.typeRecipe).join(",")
                    : "Other..."
                }
              />
              <CardMedia
                style={{ height: "150px" }}
                image={JSON.parse(detail.image)[0]}
                title="pic"
              />
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
