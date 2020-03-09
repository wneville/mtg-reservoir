const express = require('express');
const controller = require('../controllers/printings');

const router = express.Router();


router.get('/', async (req, res) => {
  const printings = await controller.getAll();
  res.status(200).json(printings);
});

// router.get('/:id', async (req, res) => {
//   const printing = await Printing.findById(req.params.id);
//   res.status(200).json(printing);
// });

// router.post('/', async (req, res) => {
//   const printing = await new Printing({ ...req.body }).save();
//   res.status(201).location(printing.id).json(printing);
// });

module.exports = router;