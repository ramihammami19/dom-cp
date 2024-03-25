
// main program







function Cart() {
  // function that will increment the quantity of a specefic item in the ityems array
  function inc(id) {
    this.items[id]["quantity"]++;
  }

  // function that will decrement the quantity of a specefic item in the ityems array

  function dec(id) {
    this.items[id]["quantity"]--;
  }

  // function that calculate the total price considiring the quanting
  function total_price() {
    var result = 0;
    for (var i = 0; i < this.items.length; i++) {
      result += this.items[i]["price"] * this.items[i]["quantity"];
    }
    return result;
  }
  function init() {}

  /// defining the data model
  var Data = {
    // items data
    items: [
      {
        id: 1,
        name: "Nike 2019",
        price: 259,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        name: "Adidas 2019",
        price: 359,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      },
    ],
    // assign functions definitions   to the data model
    total_price: total_price,
    inc: inc,
    dec: dec,
  };

  // load data to the  dom

  // load products images
  document.getElementById("nike-img").src = Data["items"][0]["image"];
  document.getElementById("adidas-img").src = Data["items"][1]["image"];

  // load products names
  document.getElementById("nike-name").innerHTML = Data["items"][0]["name"];
  document.getElementById("adidas-name").innerHTML = Data["items"][1]["name"];

  // load products quantity

  document.getElementById("nike-quantity").value = Data["items"][0]["quantity"];
  document.getElementById("adidas-quantity").value =
    Data["items"][1]["quantity"];

  //load  products prices
  document.getElementById("nike-price").innerHTML = Data["items"][0]["price"];
  document.getElementById("adidas-price").innerHTML = Data["items"][1]["price"];

  // assign event to the first product plus button
  var nikeQuantityPlus = document.getElementById("nike-plus");
  nikeQuantityPlus.addEventListener("click", function () {
    // increment quantity for the specfic product
    Data.inc(0);
    // update quantity ui

    document.getElementById("nike-quantity").value =
      Data["items"][0]["quantity"];
    // update total price ui
    document.getElementById("nike-total-price").innerHTML =
      Data["items"][0]["price"] * Data["items"][0]["quantity"];
  });
  // assign event to the first product minus button

  var nikeQuantityMinus = document.getElementById("nike-minus");
  nikeQuantityMinus.addEventListener("click", function () {
    // decrement quantity for the specfic product
    // products cannot have quatity less than one
    if (Data.items[0]["quantity"] == 1) {
      alert("quantity can only take postif value");
      return;
    }
    // decrementing first producat quantity only if greater than 1
    Data.dec(0);
    // update quantity ui

    document.getElementById("nike-quantity").value =
      Data["items"][0]["quantity"];
    // update total price  ui

    document.getElementById("nike-total-price").innerHTML =
      Data["items"][0]["price"] * Data["items"][0]["quantity"];
  });

  // assign event to the second product plus button
  var adidasQuantityPlus = document.getElementById("adidas-plus");
  adidasQuantityPlus.addEventListener("click", function () {
    // increment quantity for the specfic product
    Data.inc(1);
    // update quantity ui
    document.getElementById("adidas-quantity").value =
      Data["items"][1]["quantity"];
    // update total price  ui

    document.getElementById("adidas-total-price").innerHTML =
      Data["items"][1]["price"] * Data["items"][1]["quantity"];
  });
  // assign event to the second product minus button

  var adidasQuantityMinus = document.getElementById("adidas-minus");
  adidasQuantityMinus.addEventListener("click", function () {
    // decrement quantity for the specfic product
    // products cannot have quatity less than one
    if (Data.items[1]["quantity"] == 1) {
      alert("quantity can only take postif value");
      return;
    }
    // decrementing first producat quantity only if greater than 1

    Data.dec(1);
    // update quantity ui

    document.getElementById("adidas-quantity").value =
      Data["items"][1]["quantity"];
    // update total price  ui

    document.getElementById("adidas-total-price").innerHTML =
      Data["items"][1]["price"] * Data["items"][1]["quantity"];
  });

  // assing event the like button click for  the first product
  document.getElementById("like-1").addEventListener("click", function () {
    // change the color of the like button one user click like
    document.getElementById("like-1").style.color = "red";
  });
  // assing event the like button click for  the second product

  document.getElementById("like-2").addEventListener("click", function () {
    // change the color of the like button one user click like

    document.getElementById("like-2").style.color = "red";
  });

  // load specefic product total price
  // first
  document.getElementById("nike-total-price").innerHTML =
    Data["items"][0]["price"] * Data["items"][0]["quantity"];
  //second
  document.getElementById("adidas-total-price").innerHTML =
    Data["items"][1]["price"] * Data["items"][1]["quantity"];

  // create the click event that will handle the all products total price calculation and update the ui
  document.getElementById("total-price").addEventListener("click", function () {
    document.getElementById("total-value").innerHTML = Data.total_price();
  });

  document.getElementById("delete-nike").addEventListener("click", function () {
    document.getElementById("nike").remove();
    document.getElementById("nike-total").remove();
    Data.items.splice(0, 1);
    console.log(Data);
  });

  document
    .getElementById("delete-adidas")
    .addEventListener("click", function () {
      document.getElementById("adidas").remove();
      document.getElementById("adidas-total").remove();
      const l = Data.items.length;
      switch (l) {
        case 1:
          Data.items.splice(0, 1);

          break;
        case 2:
          Data.items.splice(1, 1);

          break;

        default:
          break;
      }
      console.log(Data);
    });

  return Data;
}

document.addEventListener("DOMContentLoaded", Cart);
