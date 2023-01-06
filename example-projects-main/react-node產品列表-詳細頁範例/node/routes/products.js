var express = require('express');
var router = express.Router();

//  demo data
const products = [
  {
    id: '1',
    picture: 'https://via.placeholder.com/32',
    stock: 5,
    name: 'iPhone 12 Pro',
    price: 25000,
    tags: '蘋果,大螢幕',
  },
  {
    id: '2',
    picture: 'https://via.placeholder.com/32',
    stock: 5,
    name: 'iPhone 12',
    price: 15000,
    tags: '蘋果,小螢幕',
  },
  {
    id: '3',
    picture: 'https://via.placeholder.com/32',
    stock: 10,
    name: 'iPhone SE',
    price: 12500,
    tags: '蘋果,小螢幕',
  },
  {
    id: '4',
    picture: 'https://via.placeholder.com/32',
    stock: 10,
    name: 'iPhone XS',
    price: 22000,
    tags: '蘋果,大螢幕',
  },
  {
    id: '5',
    picture: 'https://via.placeholder.com/32',
    stock: 6,
    name: 'Google Pixel 5',
    price: 17000,
    tags: '安卓,大螢幕',
  },
  {
    id: '6',
    picture: 'https://via.placeholder.com/32',
    stock: 6,
    name: 'Google Pixel 4',
    price: 15500,
    tags: '安卓,小螢幕',
  },
  {
    id: '7',
    picture: 'https://via.placeholder.com/32',
    stock: 1,
    name: '黃米',
    price: 8800,
    tags: '安卓,一般螢幕',
  },
]

/* GET products listing. */
router.get('/', function (req, res, next) {
  
  console.log(req.query)

  if(req.query.productId){
    const product = products.find((v) => String(v.id) === req.query.productId)

    if(product)
      res.json(product)
    else
      res.json({message:"no product"})
    
    return 
  }

  res.json(products);
});

/* GET product by id param. */
router.get('/:productId', function (req, res, next) {
  const product = products.find((v) => String(v.id) === req.params.productId)

  if(product)
    res.json(product)
  else
    res.json({message:"no product"})
})



module.exports = router;
