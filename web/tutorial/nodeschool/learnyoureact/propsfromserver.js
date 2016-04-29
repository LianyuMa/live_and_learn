const express = require('express');
const app = express();

const data = [
  { title: 'Shopping', detail: process.argv[3] },
  { title: 'Hair cut', detail: process.argv[4] },
];

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views`);
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
  ignore: false,
});

app.use('/', (req, res) => res.render('index_propsfromserver', { data }));

app.listen(app.get('port'), () => {});
