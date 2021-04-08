var en ="qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~&";
var ru ="йцукенгшщзхъфывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё?";
var alphabet = {};

for (var i = 0; i < en.length; i++) {
  alphabet[en[i]] = ru[i];
}

// console.log(JSON.stringify(alphabet));

var InputReciever = document.getElementById("InputReciever");
InputReciever.addEventListener("input", function () {
    InputReciever.innerHTML = toRussianStr(this.value);
});

function toRussianStr(str) {
  return str.replace(/\S/g, function (match) {
    return alphabet[match] || match;
  });
}
