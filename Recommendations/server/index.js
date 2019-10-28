const express = require('express');
const path = require('path')
const controller = require('../database/dbMethods.js');

const app = express()
const port = 9004

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/listing/*', express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.get("/allHomes", (req,res) => {
  console.log('getting get req inside server function');   //get by specific id
  controller.getAllFromHomes((err,dbObj)=> {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('SENT All')
      res.status(200).send(dbObj);
    }
  })
}) 



// app.get("/currListing", (req,res) => {
//   controller.getCurrListing((err,dbObj)=> {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       console.log('SENT current listing')
//       res.status(200).send(dbObj);
//     }
//   })
// })

