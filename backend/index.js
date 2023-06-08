const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/coincol", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  day: String,
  month: String,
  year: String,
  gender: String,
  phone: String,
  lineId: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password, day, month, year, gender, phone, lineId } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ message: "This email is already registered" });
    } else {
      const newUser = new UserModel({
        name,
        email,
        password,
        day,
        month,
        year,
        gender,
        phone,
        lineId,
      });
      await newUser.save();
      res.send({ message: "Registration successful" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.status(401).send({ message: "Invalid email or password" });
      }
    } else {
      res.status(404).send({ message: "This email is not registered" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
