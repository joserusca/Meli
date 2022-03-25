const express = require('express');
const fetch = require('node-fetch')
const app = express()

app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// respond with hello world when a GET request is made to the homepage
app.get('/', (req, res) => {
    var response = {query:"/api/items?q=:query",id:"/api/items/:id"};
    res.send(response);
  })

app.get('/api/items', (req, res) => {
  searchItems(req.query.q)
  .then( data => res.send(data))
  .catch( error => 
    res.send(error)
  ) 
})

app.get('/api/items/:id', (req, res) => {
    
    var item = {};
    
      getDescription(req.params.id)
      .then( desc => {        
        getItem(req.params.id)
        .then( data => {    
          if(data.hasOwnProperty('error'))
            item = data
          else {             
            item = {
            author: {
                name: "Jose",
                lastname: "Rusca"
            },
            item: {
            id: data.id,
            title: data.title,
            price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: 0,
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: desc.plain_text,
            }
           }
          }
          res.send(item);
        })
      });
} )


var server = app.listen(8081, function () {

    var port = server.address().port

    console.log("Example app listening at port ", port)

})

async function getItem(id) {
  
  var response = await fetch('https://api.mercadolibre.com/items/' + id)
  var item = await response.json();
  console.log("Requesting Product Id: " + id);
  return item;
}

async function getDescription(id) {
  
  var response = await fetch('https://api.mercadolibre.com/items/' + id + '/description')
  var item = await response.json();
  console.log("Requesting Product Descripton: " + id);
  return item;
}

async function searchItems(query) {
  var response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + query)  
  var data = await response.json();

  var result = {author: {
    name: 'Jose',
    lastname: 'Rusca'
    },
    categories: ['Cat1', 'Cat2', 'Cat3'],
  }
  data = data.results.slice(0,4);
  var items = data.map(dataitem => {
    return {
      id: dataitem.id,
      title: dataitem.title,
      price: {
      currency: dataitem.currency_id,
      amount: dataitem.price,
      decimals: 0
      },
      picture: dataitem.thumbnail,
      condition: dataitem.condition,
      free_shipping: dataitem.free_shipping
      }
  });
  result.items = items;

  console.log("Requesting Search: " + query);
  console.log("Total Results: = " + items.length);
  return result;  
}

  
