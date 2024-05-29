document.addEventListener("DOMContentLoaded", function () {
  //------------------------Navbar Transparent on scroll-------------
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("menudivid").style.backgroundColor =
        "rgba(0, 0, 0, 0.505)";
    } else {
      document.getElementById("menudivid").style.backgroundColor = "#C5C0EA";
    }
  }

  //--------------------------increase numbers using settimeout----------------------------

  var numbersVisible = false;
  {
    var interval1 = setInterval(function () {
      let num1 = document.getElementById("numbers1").textContent;
      document.getElementById("numbers1").innerHTML = parseInt(num1) + 1;
      if (num1 == 15) {
        clearInterval(interval1);
      }
    }, 100);

    var interval2 = setInterval(function () {
      let num2 = document.getElementById("numbers2").textContent;
      document.getElementById("numbers2").innerHTML = parseInt(num2) + 1;
      if (num2 == 215) {
        clearInterval(interval2);
      }
    }, 10);

    var interval3 = setInterval(function () {
      let num3 = document.getElementById("numbers3").textContent;
      document.getElementById("numbers3").innerHTML = parseInt(num3) + 1;
      if (num3 == 1015) {
        clearInterval(interval3);
      }
    }, 1);
    numbersVisible = true;
  }
});
