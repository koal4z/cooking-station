module.exports = (app, db) => {
  app.get("/recipes", (req, res) => {
    db.Recipe.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.post("/create-recipe", (req, res) => {
    db.Recipe.create({
      menu: req.body.menu,
      typeRecipe: req.body.typeRecipe,
      ingradient: req.body.ingradient,
      direction: req.body.direction,
      image: req.body.image
    })
      .then(data => {
        console.log(data);
        res.send("OK");
        res.redirect("http://localhost:3000/")
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.put("edit-recipe", (req, res) => {
    console.log("putting will work");
  });

  app.delete("/delete-recipe/:id", (req, res) => {
    db.Recipe.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.send("delete complete");
      })
      .catch(err => console.log(err));
  });
};
