var express = require('express');
var router = express.Router();

router.get('/', async(req, res)=> {
  const toyGallerys = await ToyGalleryModel.find({})
  res.render('', {toyGallerys: toyGallerys});
});

router.get('/delete/:id', async(req,res)=>{
  await ToyGalleryModel.findByIdAndDelete(req.params.id);
  res.redirect('/about')
})

router.get('/add', (req, res)=>{
  res.render('add');
})

router.post('/add', async( req, res)=>{
  var toy = req.body;
  await ToyGalleryModel.create(toy);
  res.redirect('/about');
})

router.get('/edit/:id', async (req, res) => {
  var toy = await ToyGalleryModel.findById(req.params.id);
  res.render('Toy.edit', { toy : toy});
})

router.post('/edit/:id', async (req, res) => {
  await ToyGalleryModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/about');
})
module.exports = router;
