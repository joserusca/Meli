const { Console } = require('console');
const express = require('express');
const https = require('https')
const app = express()

app.use(express.json());

// respond with hello world when a GET request is made to the homepage
app.get('/', (req, res) => {
    var response = {query:"/api/items?q=:query",id:"/api/items/:id"};

    res.send(response);
  })

app.get('/api/items/:id', (req, res) => {
    //Entry point used
    //https://api.mercadolibre.com/items/:id
    //https://api.mercadolibre.com/items/:id/description

    //Request parameters
    // id

    //Response format
    // {
    //     author”: {
    //     name”: String
    //     lastname”: String
    //     },
    //     item”: {
    //     id: String,
    //     title: String,
    //     price: {
    //     currency: String,
    //     amount: Number,
    //     decimals: Number,
    //     },
    //     picture”: String,
    //     condition: String,
    //     free_shipping: Boolean,
    //     sold_quantity, Number
    //     description: String
    //     }
    // }

    var item = "";
    getItem(req.params.id, (err, itemValue) => {
      if (err) return console.error(err);

      getDescription(req.params.id, function(err, descriptionValue) {
        if (err) return console.error(err);
        itemValue.description = descriptionValue;
        //res.send(itemValue);
        console.log("GetDescription.");
      })
      console.log("GetItem.");
      res.send(itemValue);
      //item = value;
    })

    getDescription(req.params.id, function(err, value) {
      if (err) return console.error(err);

      res.send(value);
      item = value;
    })
    //console.log(item);
    //res.send(item);

    // fetch('https://api.mercadolibre.com/items/' + req.params.id)
    // .then(response => response.json())
    // .then(data => console.log(data));
    //res.send(data);

} )


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

function getDescription(id, cb) {
  const url = 'https://api.mercadolibre.com/items/' + id + '/description';
  let item = "Nothing to show";


  https.get(url,  resp => {
    var data = '';
    resp.on('data', chunk => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      cb(null, data.plain_text);
    })
  }).on('error', err => {
    cb(err);
  })

}

function getItem(id, cb) {
  const url = 'https://api.mercadolibre.com/items/' + id;
  const description = "Without Description";

  https.get(url,  resp => {
    var data = '';
   
    resp.on('data', chunk => {
      data += chunk;
    });
    resp.on('end', () => {
      data = JSON.parse(data);
      //console.log(data);
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
          description: description,
          }
      }

      cb(null, item);
    })
  }).on('error', err => {
    cb(err);
  })
}
