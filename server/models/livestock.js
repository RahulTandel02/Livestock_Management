const mongoose = require("mongoose");

const livestockSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  type: String,
  breed: String,
  label: String,
  internalid: String,
  status: String,
  gender: String,
  isneutered: Boolean,
  isbreedingstock: Boolean,
  color: String,
  description: String,
  tagnumber: String,
  tagcolor: String,
  electronicid: String,
  registrynumber: String,
  birthdate: String,
  birthweigth: String,
  israised: Boolean,
  purchasedate: Date,
  purchaseamout: String,
  code: String,
});

const model = mongoose.model("livestock", livestockSchema);
module.exports = model;
