var express = require('express');
const girltoyModel = require('../models/girlToyModel');
var router = express.Router();

router.get('/', async(req, res)=> {
  const girlToy = await girltoyModel.find({})
  res.render('girlToy', {girlToy: girlToy});
});

router.get('/delete/:id', async(req,res)=>{
  await girltoyModel.findByIdAndDelete(req.params.id);
  res.redirect('/girlToy')
})

router.get('/add', (req, res)=>{
  res.render('girlToy/add');
})

router.post('/add', async( req, res)=>{
  var toy = req.body;
  await girltoyModel.create(toy);
  res.redirect('/girlToy');
})  

router.get('/edit/:id', async (req, res) => {
  var toy = await girltoyModel.findById(req.params.id);
  res.render('girlToy/edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  await girltoyModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
})
module.exports = router;
