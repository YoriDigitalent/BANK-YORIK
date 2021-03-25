const mongoose = require ('mongoose');

const customersSchema = mongoose.Schema(
  {
    noKTP: {
      type: String,
      required: true,
    },
    namaLengkap: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    tempatLahir: {
      type: String,
      required: true,
    },
    tanggalLahir: {
      type: String,
      required: true,
    },
    noHP: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;