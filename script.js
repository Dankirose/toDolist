// document.querySelector(".btn").addEventListener("click", function () {
//     let newItem = document.getElementById("newItem").value; //получить значение элемента с идентификатором "newItem" на странице, используя метод `document.getElementById("newItem")`, а затем сохранить это значение в переменную `newItem`.
//     let list = document.getElementById("list");

//     let li = document.createElement("li");
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     let deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "✖";
//     deleteButton.className = "delete-btn";

//     deleteButton.addEventListener("click", function () {
//       list.removeChild(li);
//     });

//     li.appendChild(checkbox);
//     li.appendChild(document.createTextNode(newItem));
//     li.appendChild(deleteButton);
//     list.appendChild(li);

//     // Показываем кнопки
//     document.querySelector(".delete__checkbox").style.display = "inline-block";
//     document.querySelector(".delete__all").style.display = "inline-block";
//   });

//   document
//     .querySelector(".delete__checkbox")
//     .addEventListener("click", function () {
//       let items = document.querySelectorAll(
//         "#list input[type='checkbox']:checked"
//       );
//       items.forEach((item) => {
//         item.parentElement.remove();
//       });
//     });

//   document.querySelector(".delete__all").addEventListener("click", function () {
//     document.getElementById("list").innerHTML = "";
//   });

const button = document.querySelector(".btn");
let input = document.querySelector(".find__new");
let arrLS = []
let list = document.querySelector("#list");
list.innerHTML = "";

button.addEventListener("click", function () {
  console.log(input.value);
  addTask(input.value);
  input.value = "";
});



function addTask(x) {
  let div = document.createElement("div");
  div.classList.add("li__content");
  div.innerHTML = `
    <input type="checkbox" name="checkbox" id="check">
    <li>${x}</li>
    <input class="remove__btn" type="button" value="❌">
  `;
  list.append(div);

  let obj = {
    text: x,
    isDone: false,
  };

  arrLS.push(obj);
  localStorage.setItem("toDo", JSON.stringify(arrLS));
}

console.log(localStorage.getItem('toDo'));
if (localStorage.getItem('toDo') != null) {
  arrLS = JSON.parse(localStorage.getItem('toDo'))
  for(let el of arrLS){
    let div = document.createElement("div");
    div.classList.add("li__content");
    div.innerHTML = `
    <input type="checkbox" name="checkbox" id="check">
    <li>${el.text}</li>
    <input class="remove__btn" type="button" value="❌">
  `;
    list.append(div);
  }
}
