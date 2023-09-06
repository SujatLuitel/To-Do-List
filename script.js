const input = document.getElementById("user-input");
const listContainer = document.querySelector(".tasks");
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
function addTask() {
  if (input.value === "") {
    alert("You must enter something");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    listItem.classList.add("slide-in-top");
    listContainer.appendChild(listItem);
    const cross = document.createElement("span");
    cross.innerText = "\u00d7";
    listItem.appendChild(cross);
  }
  input.value = "";
  saveData();
}
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
