const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  jobAddress: { type: String, required: true },
  trackingStatus: {
    type: String,
    enum: [
      "Pending",
      "Final Measurements Taken",
      "Order Placed",
      "Products being Fabricated",
      "Order Shipped to Shutter Brothers",
      "Order Received at Shutter Brothers",
      "Quality Control Inspection",
      "Products Ready to be Installed",
      "Installation complete",
    ],
    default: "Pending",
  },
  permitStatus: {
    type: String,
    enum: ["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"],
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
