var form = document.querySelector(".form");
var validateBtn = form.querySelector(".validateBtn");
var InputShipper = form.querySelector(".InputShipper");
var InputReciever = form.querySelector(".InputReciever");
var where = form.querySelector(".Cargotype");
var fields = form.querySelectorAll(".field");

var generateError = function () {
  
  error.className = "error";
  error.style.color = "red";
  error.style.display = "inline";
  error.innerHTML = text;
  return error;
};

var removeValidation = function () {
  var errors = form.querySelectorAll(".error");
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
      var error = generateError("&#10059");
      form[i].parentElement.insertBefore(error, fields[i]);
    } 
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();

  removeValidation();

  checkFieldsPresence();
  succeed();

});
// var countErrors = form.querySelectorAll(".error");
// if (countErrors != 1){
//   console.log("field is blank", fields[i]);
// }


/* ФИКС не работает условие без условия в консоль выводит правильное количество ошибок */
function succeed (){
  var errors = form.querySelectorAll(".error").length; 
// if (errors < 0){
  console.log(errors);
//   detectType();
// }
}
