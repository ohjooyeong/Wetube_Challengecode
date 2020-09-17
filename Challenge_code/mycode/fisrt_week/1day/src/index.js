import express from "express";

const app = express();

const home = (req, res) => {
  res.send("Home");
};

const aboutUs = (req, res) => {
  res.send("About Us");
};

const contact = (req, res) => {
  res.send("Contact");
};

const protected2 = (req, res) => {
  res.send("Protected");
};

const middleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const protectedMiddleware = (req, res) => {
  res.redirect("/");
};

app.use(middleware);

app.get("/", home);

app.get("/about-us", aboutUs);

app.get("/contact", contact);

app.use(protectedMiddleware);

app.get("/protected", protected2);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
