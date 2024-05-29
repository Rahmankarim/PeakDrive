//scripts of login page will go here

// $(document).ready(function () {
//   //sign up tab click event
//   $("#tabSignup").click(function () {
//     $("#").removeClass("notactive");
//     $("#").addClassClass("active");
//     $("#firstname").removeClass("d-none");
//     // $("#signdiv").addClass("d-none");
//   });
//   //signin tab click event
//   $("#tabSignin").click(function () {
//     $("#signupdiv").addClass("d-none");
//     $("#signdiv").removeClass("d-none");
//   });
// });

//Display signup input Fields
document.getElementById("tabSignup").addEventListener("click", displayFields);

function displayFields(event) {
  event.preventDefault();

  document.getElementById("tabSignup").style.backgroundColor = "#00b4d8";
  document.getElementById("tabSignin").style.backgroundColor =
    "rgba(0, 0, 0, 0.375)";

  document.getElementById("firstname").style.display = "block";
  document.getElementById("lastname").style.display = "block";
  document.getElementById("passwordField").style.display = "block";
  document.getElementById("signupBtn").style.display = "block";
  document.getElementById("signinBtn").style.display = "none";
}
