const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

//express middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static folder

app.get('/about', (req, res) =>
  res.render('about', {
    title: 'Update',
    name: 'Alex',
  })
);
app.use(express.static(path.join(__dirname, 'public')));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
