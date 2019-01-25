const express = require('express');
const chalk = require('chalk');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(`./../frontend/`));
app.listen(3002);

console.log(chalk.yellow(`Access Styleguide:`), chalk.blue(`http://localhost:3002`));