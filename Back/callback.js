// function testCallback(funcion, value) {
//     funcion();
//     testCallback2( () => { valor = valor + 10; } )
// }
// var valor = 5;
// console.log(testCallback( () => { valor = 20 }));

// console.log(valor);

// function testCallback2(funcion) {
//     funcion();
// }

const https = require('https')

const url = 'https://api.mercadolibre.com/items/MLA1121545487';
let item = "Nothing to show";

async function ()

https.get(url,  resp => {
  let data = '';
  resp.on('data', chunk => {
    data += chunk;
  });
  resp.on('end', () => {
    data = JSON.parse(data);

    //console.log(data);
    item = data;

    console.log(item);
  })
}).on('error', err => {
  console.log(err.message);
})

//console.log(item);




