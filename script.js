let stocks = JSON.parse(sessionStorage.getItem("stocks")) || [];

//Function to display stocks on the HTML page
function displayStocks() {
  //retrieves element on the page
  const stockList = document.getElementById("stocklist");
  stockList.innerHTML = "";
  //creats a new list element to display the stock.
  stocks.forEach(function (stock) {
    let listItem = document.createElement("li");
    listItem.textContent = `${stock.symbol}: ${stock.shares} shares`;
    stockList.appendChild(listItem);
  });
}

function saveStocks() {
  sessionStorage.setItem("stocks", JSON.stringify(stocks));
}

//Checks to see if stock is already in list. If so updates shares. Else adds new stock.
function updateList(stockSymbol, numberOfShares) {
  for (let i = 0; i < stocks.length; i++) {
    console.log(stockSymbol);
    if (stocks[i].symbol == stockSymbol) {
      stocks[i].shares += numberOfShares;
      return;
    }
  }
  stocks.push({ symbol: stockSymbol, shares: numberOfShares });
}

//Function that handles form submission
document
  .getElementById("stockForm")
  .addEventListener("submit", function (event) {
    //get value of the stock symbol and price of each share
    const stockSymbol = document
      .getElementById("stockSymbol")
      .value.toUpperCase();
    const numberOfShares = parseInt(
      document.getElementById("numberOfShares").value
    );

    //add stock to the array
    updateList(stockSymbol, numberOfShares);
    //saves stocks to session storage
    saveStocks();
    //Updates the display list
    displayStocks();
  });

displayStocks();
