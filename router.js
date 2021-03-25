const express = require ('express');
const Customer = require ("./database.js");
const router = express.Router();

//@desc   Create new Customer
//@route  POST /api/customer
router.post('/customers', async (req, res) => {
  
  try {
    const {
      noKTP,
      namaLengkap,
      alamat,
      tempatLahir,
      tanggalLahir,
      noHP,
    } = req.body;
  
    const customer = new Customer({
      noKTP,
      namaLengkap,
      alamat,
      tempatLahir,
      tanggalLahir,
      noHP,
    });
  
    const createdCustomer = await customer.save();
  
    res.status(201).json(createdCustomer);
  } catch (error) {
    res.status(500).json({ err })
  }
});

//@desc Get all customer
//@route GET /api/customers
router.get('/customers', async (req, res) => {
  const customers = await Customer.find({});

  if(customers) {
    res.json(customers)
  } else {
    res.status(404).json({
      message: 'Data tidak ditemukan'
    })
  }
});

  //@desc Get a customer
  //@route GET /api/customers/:id
  router.get('/customers/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);

    if(customer) {
      res.json(customer)
    } else {
      res.status(404).json({
        message: 'Data tidak ditemukan'
      })
    }
  });

//@desc Update a customer
//@route PUT /api/customers/:id
router.put('/customers/:id', async (req, res) => {
  const {
    noKTP,
    namaLengkap,
    alamat,
    tempatLahir,
    tanggalLahir,
    noHP
  } = req.body;

  const customer = await Customer.findById(req.params.id);

  if (customer) {
    customer.noKTP = noKTP;
    customer.namaLengkap = namaLengkap;
    customer.alamat = alamat;
    customer.tempatLahir = tempatLahir;
    customer.tanggalLahir = tanggalLahir;
    customer.noHP = noHP

    const updateCustomer = await customer.save();
    res.json(updateCustomer)
  } else {
    res.status(404).json({
      message: 'Data tidak ditemukan'
    })
  }
});

//@desc Delete a customer
//@route DELETE /api/customers/:id
router.delete('/customers/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if(customer) {
    await customer.remove();
    res.json({
      message: 'Data berhasil dihapus'
    })
  } else {
    res.status(404).json({
      message: 'Data tidak ditemukan'
    })
  }
});

module.exports = router;
