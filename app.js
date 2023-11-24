let inp = document.querySelector(".entered");
let Btn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

let list = [];

inp.addEventListener("keyup", () => {
  if (inp.value.trim() != 0) {
    Btn.classList.add("active");
  } else {
    Btn.classList.remove("active");
  }
});


Btn.addEventListener("click", () => {
  if (inp.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${inp.value}</p >
        <div class="item-btn">
            <i class="fa-solid fa-arrow-up"></i>
            <i class="fa-solid fa-arrow-down"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`;
    tasks.appendChild(newItem);
    inp.value = "";
    list.push(newItem);
    inp.value = "";
    let up = newItem.querySelector(".fa-arrow-up");
    up.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] == newItem && i != 0) {
          console.log("text");
          let temp = list[i - 1];
          list[i - 1] = list[i];
          list[i] = temp;
        }
      }
      Adding();
    });

    let godown = newItem.querySelector(".fa-arrow-down");
    godown.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] == newItem && i != list.length - 1) {
          let temp = list[i + 1];
          list[i + 1] = list[i];
          list[i] = temp;
          break;
        }
      }
      Adding();
    });

    let trash = newItem.querySelector(".fa-xmark");
    trash.addEventListener("click", (e) => {
      for (let i = 0; list.length > i; i++) {
        if (list[i] == newItem) {
          delete list[i];
        }
      }
      Adding();
    });
    Adding();
  }

});



function Adding() {
  let AllIn = tasks.querySelectorAll(".item");
  AllIn.forEach((element) => {
    element.remove();
  });
  list.forEach((element) => {
    tasks.appendChild(element);
  });
}
