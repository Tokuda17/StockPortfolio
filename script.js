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

//Function that handles form submission
document
  .getElementById("stockForm")
  .addEventListener("submit", function (event) {
    //get value of the stock symbol and price of each share
    const stockSymbol = document.getElementById("stockSymbol").value;
    const numberOfShares = document.getElementById("numberOfShares").value;

    //add stock to the array
    stocks.push({ symbol: stockSymbol, shares: numberOfShares });

    //saves stocks to session storage
    saveStocks();
    //Updates the display list
    displayStocks();
  });

displayStocks();
