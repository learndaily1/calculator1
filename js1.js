var seven = document
  .querySelector(".seven")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 7;
  });
var seven = document
  .querySelector(".eight")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 8;
  });
var seven = document
  .querySelector(".nine")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 9;
  });
var seven = document
  .querySelector(".four")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 4;
  });
var seven = document
  .querySelector(".five")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 5;
  });
var seven = document
  .querySelector(".six")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 6;
  });
var seven = document
  .querySelector(".one")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 1;
  });
  var seven = document
      .querySelector(".zero")
      .addEventListener("click", function () {
      document.querySelector(".input").value += 0;
      });
var seven = document
  .querySelector(".two")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 2;
  });
var seven = document
  .querySelector(".three")
  .addEventListener("click", function () {
    document.querySelector(".input").value += 3;
  });

var seven = document
  .querySelector(".equal")
  .addEventListener("click", function () {
    var x = document.querySelector(".input").value;
    document.querySelector(".input").value = eval(x);
  });
var seven = document
  .querySelector(".plus")
  .addEventListener("click", function () {
    document.querySelector(".input").value += "+";
  });
var seven = document
  .querySelector(".minus")
  .addEventListener("click", function () {
    document.querySelector(".input").value += "-";
  });

var seven = document
  .querySelector(".into")
  .addEventListener("click", function () {
    document.querySelector(".input").value += "*";
  });
var seven = document
  .querySelector(".divide")
  .addEventListener("click", function () {
    document.querySelector(".input").value += "/";
  });

var seven = document
  .querySelector(".clear")
  .addEventListener("click", function () {
    document.querySelector(".input").value = "";
  });

var seven = document
  .querySelector(".dot")
  .addEventListener("click", function () {
    document.querySelector(".input").value += ".";
  });
var seven = document
  .querySelector(".back")
  .addEventListener("click", function () {
    var back = document.querySelector(".input").value.length;
    var backB = document.querySelector(".input").value;
    if (back > 0) {
      var backA = backB.slice(0, back - 1);
      document.querySelector(".back");
      document.querySelector(".input").value = backA;
    } else {
      alert("please enter value");
    }
  });
var x = document.querySelector(".input").value;

function myFunction(event) {
  var y = event.which;


  if (y == 13) {
    var x = document.querySelector(".input").value;
    document.querySelector(".input").value = eval(x);
  }
  if (y == 47) {
    location.reload();
    a

  }
}

document.querySelector(".button").addEventListener("click", function () {
  location.reload();
});
