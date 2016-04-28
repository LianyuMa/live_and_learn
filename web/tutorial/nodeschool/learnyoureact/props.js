const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views`);
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
  ignore: false,
});

app.use('/', (req, res) => {
  res.render('index_props', '');
});

app.listen(app.get('port'), () => {});
