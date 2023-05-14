// FETCH API

function updateDates() {
  fetch("http://157.230.24.126/coins/api/list_orders/")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      console.log(objectData[0].id);
      let tableData = "";
      objectData.map((values) => {
        tableData += `   <tr>
      <td>${values.id}</td>
      <td>${values.coin}</td>
      <td>${values.coin_name}</td>
      <td>${values.buy_order_id}</td>
      <td>${values.sell_order_id}</td>  
      <td>${values.stop_limit_order_id}</td>
      <td>${values.quantity}</td>
      <td>${values.sell_price}</td>
      <td>${values.stop_price}</td>
      <td>${values.sell_price_limit}
      <td>${values.is_order_filled}</td>
      <td>${values.created}</td>
      <td>${values.updated}</td>
      <td>${values.buy_order_date}</td>
      <td>${values.sell_order_date}</td>
     
    </tr>`;
      });

      document.getElementById("table_body").innerHTML = tableData;
    });
}

//JS CODE TIMING
setTimeout(function () {
  updateDates();
}, 1);
//API INTERVAL
setInterval(function () {
  updateDates();
}, 10000); // Örneğin, her 10 saniyede bir güncelleme yapmak için
