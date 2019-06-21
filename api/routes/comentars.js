const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'comments get route'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'comments post route'
  });
});

router.patch('/:comentId', (req, res, next) => {
  res.status(200).json({
    message: 'comments update route',
    comentId: req.params.comentId
  });
});

router.delete('/:comentId', (req, res, next) => {
  res.status(200).json({
    message: 'comments delete route',
    comentId: req.params.comentId
  });
});

module.exports = router;
