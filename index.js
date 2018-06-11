const express = require('express')
const compression = require('compression')
// This require installing compression via npm - look in commit

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

// app.use(compression())
// Added compression with GZIP


app.listen(PORT, () => console.log(`Helo!! Port: ${PORT}`))