function detectType() {
  //вывод индекса с дропдауна
  var Cargotype = document.getElementById("Cargotype");
  var typeIndex = Cargotype.selectedIndex;


  function showAdd() {
    //вывод доп.окна с условием индекса
    //переделать детект тайп на симпл открытие 
    document.getElementById("InputShipper").style.display = "none";
    document.getElementById("InputReciever").style.display = "none";
    document.getElementById("Cargotype").style.display = "none";
    document.getElementById("main__title").style.fontSize = "12px";
    document.getElementById("main__title").style.margin = "0px auto";
  
    if (typeIndex == 1) {
      addDocs();
    } else if (typeIndex == 2) {
      addContainer();
    } else if (typeIndex == 3) {
      addBox();
    } else if (typeIndex == 4) {
      addOther();
    }
  }
  showAdd();
}

function addContainer() {
  // var submit = document.getElementById("main__form-button-submit");
  var additionalContainer = document.getElementById("additionalContainer");
  additionalContainer.style.display = "flex";
  // submit.style.display = "none";
  // Cargotype.disabled =    true;           //Запрет выбора типа груза - блок дропдауна
  additionalDocs.style.display = "none"; //удаление остальных условных блоков
  additionalOther.style.display = "none";
  additionalBox.style.display = "none";
}
function addDocs() {
  // var submit = document.getElementById("main__form-button-submit");
  var additionalDocs = document.getElementById("additionalDocs");
  additionalDocs.style.display = "flex";
  // submit.style.display = "none";
  additionalContainer.style.display = "none";
  additionalOther.style.display = "none";
  additionalBox.style.display = "none";
}
function addOther() {
  // var submit = document.getElementById("main__form-button-submit");
  var additionalOther = document.getElementById("additionalOther");
  additionalOther.style.display = "flex";
  // submit.style.display = "none";
  additionalContainer.style.display = "none";
  additionalDocs.style.display = "none";
  additionalBox.style.display = "none";
}
function addBox() {
  // var submit = document.getElementById("main__form-button-submit");
  var additionalBox = document.getElementById("additionalBox");
  additionalBox.style.display = "flex";
  // submit.style.display = "none";
  additionalContainer.style.display = "none";
  additionalDocs.style.display = "none";
  additionalOther.style.display = "none";
  
}


// function CreateDocsTwo(){
//     if (docsValue == "Yes"){

//     }else {

//     }
//     function docsTwoYes(){
//         var docsValueYes = document.getElementById("DocsChooseYes").value;
//         console.log(docsValueYes);
//         var docsValue = docsValueYes;
//     }
//     function docsTwoNo(){
//         var docsValueNo = document.getElementById("DocsChooseNo").value;
//         console.log(docsValueNo)
//         var docsValue = docsValueNo;
//     }
// }
function docsTwoNo(){
    document.getElementById("Spisok").style.display = "block";
    document.getElementById("yourdocs").style.display = "none";
    document.getElementById("DocsChooseYes").style.display = "none";    
    document.getElementById("DocsChooseNo").style.display = "none";
    
}

function docsTwoYes(){
    document.getElementById("Spisok").style.display = "none";
    addBox();
    document.getElementById("docsYes-box").style.display = "block";
}

//----------- back button
// let GoBack = function (){
//     window.history.back();
// };


function OpenMain() {
    document.getElementById("InputShipper").style.display = "block";
    document.getElementById("InputReciever").style.display = "block";
    document.getElementById("Cargotype").style.display = "block";
    document.getElementById("main__title").style.margin = "40px auto";
    document.getElementById("main__title").style.fontSize = "32px";

}
function closeMain(){
    document.getElementById("InputShipper").style.display = "none";
    document.getElementById("InputReciever").style.display = "none";
    document.getElementById("Cargotype").style.display = "none";
    document.getElementById("main__title").style.margin = "0px auto";
    document.getElementById("main__title").style.fontSize = "12px";
}
