const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3010;

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  if (isNaN(boughtAt) || isNaN(marketPrice) || isNaN(quantity)) {
    return res.status(400).send('Invalid query parameters');
  }

  let returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  if ([stock1, stock2, stock3, stock4].some(isNaN)) {
    return res.status(400).send('Invalid query parameters');
  }

  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  if (isNaN(boughtAt) || isNaN(returns)) {
    return res.status(400).send('Invalid query parameters');
  }

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  if ([stock1, stock2, stock3, stock4].some(isNaN)) {
    return res.status(400).send('Invalid query parameters');
  }

  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  if (isNaN(returnPercentage)) {
    return res.status(400).send('Invalid query parameter');
  }

  let status = returnPercentage > 0 ? 'Profit' : 'Loss';
  res.send(status);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
