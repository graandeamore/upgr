//Collapse//
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      setTimeout(function () {
        document.getElementById("collapsible").style.borderRadius = "50px";
      }, 195);
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById("collapsible").style.borderRadius =
        "50px 50px 0px 0px";
    }
  });
}


function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

//Collapse End//

//Validate//
var form = document.querySelector(".form");
var validateBtn = form.querySelector(".validateBtn");
var from = form.querySelector(".from");
var password = form.querySelector(".password");
var passwordConfirmation = form.querySelector(".passwordConfirmation");
var where = form.querySelector(".where");
var message = form.querySelector(".message");
var fields = form.querySelectorAll(".field");

var generateError = function () {
  var error = document.createElement("div");
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
      generateError();
     
      form[i].parentElement.style.borderColor = "red";
    } else {
      form[i].parentElement.style.borderColor = "green";
    }
  }
};

// var checkPasswordMatch = function () {
//   if (password.value !== passwordConfirmation.value) {
//     console.log('not equals')
//     var error = generateError('Password doesnt match')
//     password.parentElement.insertBefore(error, password)
//   }
// }

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  removeValidation();
  checkFieldsPresence();
   getNull();
  createArray();
 
  // checkPasswordMatch()
});

//Validate End//

function getNull() {

  var arr = [].flatMap.call(document.querySelectorAll(".form__option"),
    function (block) {
      return [].flatMap.call(block.querySelectorAll(".field"), function (inp) {
        return inp.value;
      });
    }
  );
  if (arr[3] == 0 && arr[4] == 0 && arr[5] == 0) {
  var elems = document.getElementsByClassName("form__option2");
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderColor = 'transparent ';
  }
}
if (arr[6] == 0 && arr[7] == 0 && arr[8] == 0) {
  var elems = document.getElementsByClassName("form__option3");
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderColor = 'transparent ';
  }
}

}




//Create Array
function createArray() {
  var arr = [].flatMap.call(document.querySelectorAll(".form__option"),
    function (block) {
      return [].flatMap.call(block.querySelectorAll(".field"), function (inp) {
        return inp.value;
      });
    }
  );
  console.log(arr);
      //first additional inputs
  if (arr[0] != 0 && arr[1] != 0 && arr[2] != 0) {
    var elems = document.getElementsByClassName("form__option2");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.display = "block";
     
      var bodydoc = document.getElementById("banner1");
      bodydoc.style.minHeight = "850px";
      
    }
  
    } else {
    var elems = document.getElementsByClassName("content");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.maxHeight = "100%";
    
    }
  }
  if (arr[0] != 0 && arr[1] != 0 && arr[2] != 0 ) {
    var elems = document.getElementsByClassName("form__option2");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.display = "block";
 
      var bodydoc = document.getElementById("banner1");
      bodydoc.style.minHeight = "850px";
      
    }
    var elems = document.getElementsByClassName("content");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.maxHeight = "100%";
    
    }
  }

  if (arr[3] != 0 && arr[4] != 0 && arr[5] != 0) {
    var elems = document.getElementsByClassName("form__option3");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.display = "block";

      var bodydoc = document.getElementById("banner1");
      bodydoc.style.minHeight = "900px";
    }
    var elems = document.getElementsByClassName("content");
    for (var i = 0; i < elems.length; i++) {
      elems[i].style.maxHeight = "100%";
    }
  }

 

function checkAvailability(had, val) {
  return had.some(function(arrVal) {
    return val === arrVal;
  });
}
//If all inputs filled close the collapsible
if (checkAvailability(arr, '') != 1) {
  for (var i = 0; i < elems.length; i++) {
  eventFire(document.getElementById('collapsible'), 'click');
  setTimeout(function () {
    var bodydoc = document.getElementById("banner1");
      bodydoc.style.minHeight = "800px";;
  }, 195);

  // .................................function............function...function.........function..................function..................function......function....








  }
}

}







//Create ArrayEnd

//input masks//
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('input').focus();
})

document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
 
//end input masks



//switcher//



document.querySelectorAll('.input-receiver')
const toAlphabetMap = (from, to) => from.split('').reduce((acc, ch, i) =>
  ({ ...acc, [ch]: to.charAt(i) }), {});

const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~&";
const ru = "йцукенгшщзхъфывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё?";
const alphabet = toAlphabetMap(en, ru);

const toRussianStr = str => str.replace(/\S/g, match => alphabet[match] || match);

const handleInput = input => {
  console.log(input);
  input.value = toRussianStr(input.value)
};

//switcher End//
