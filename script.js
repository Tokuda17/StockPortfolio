let stocks = [{ symbol: "apple", shares: 10 }];

document
  .getElementById("stockForm")
  .addEventListener("submit", function (event) {
    console.log("Hello");
    const stockSymbol = document.getElementById("stockSymbol").value;
    const numberOfShares = document.getElementById("numberOfShares").value;
    stocks.push({ symbol: stockSymbol, shares: numberOfShares });
  });

function displayStocks() {
  const stockList = document.getElementById("stockList");
  stockList.innerHTML = "";

  stocks.forEach(function (stock) {
    let listItem = document.createElement("li");
    listItem.textContent = `${stock.symbol}: ${stock.shares} shares`;
    stockList.appendChild(listItem);
  });
}
