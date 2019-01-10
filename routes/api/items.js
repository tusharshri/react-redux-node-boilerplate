var express = require('express');
var router = express.Router();
const Item = require('../../models/Item');

/* GET users listing. */
router.get('/', function(req, res) {
  Item.find({})
    .sort({date: -1})
    .then(items => res.json(items))
});

router.post('/', function(req, res){
  const newItem = new Item({
    id: req.body.id,
    title: req.body.title
  });
  newItem.save()
    .then(item => res.json(item))
    .catch(err=>res.status(422).json({success: false, message: err.message}));
});

router.post('/:id', function(req, res){
  Item.findById(req.params.id)
    .then(
      item=>{
        item.title = req.body.title;
        console.log(req.body);
        console.log(item);
        item.save()
          .then(item=>res.json(item))
          .catch(err=>res.status(422).json({success: false, message: err.message}))
      }
    )
    .catch(err=>res.status(404).json({success: false, message: "No Item found"}))
});

router.delete('/:id', function(req, res){
  Item.findById(req.params.id)
    .then(
      item=>item.remove()
        .then(()=>res.json({success: true}))
        .catch(err=>res.status(400).json({success: false, message: err.message}))
    )
    .catch(err=>res.status(404).json({success: false, message: "Not found"}))
});
module.exports = router;