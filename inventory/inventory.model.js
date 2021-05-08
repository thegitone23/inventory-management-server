const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const InventorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  quantity: {
    type: int,
    required: true
  },
  category: {
    type: String,
    required: false
    default: 'inventory 1'
  }
}); 