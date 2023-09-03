let cls = ["blue", "red", "yellow", "green", "purple"];

let getRandom = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
};
// let r = arr[Math.floor(Math.random*(arr.length-1))]
let reset = document.getElementById("reset");
let add = document.getElementById("add");
let added = document.getElementById("added");
let todo = document.getElementById("todo");
let n = 1,
  remain,
  b1,
  b2;
reset.addEventListener("keyup", (e) => {
  if (e.key) {
    todo.value = "";
  }
});
reset.addEventListener("click", (e) => {
  todo.value = "";
});
add.addEventListener("click", (e) => {
  if (todo.value != "") {
    let a = document.createElement("input");
    let b = document.createElement("button");
    let c = document.createElement("button");
    added.appendChild(a);
    b1 = added.appendChild(b).innerHTML = "Edit";
    b2 = added.appendChild(c).innerHTML = "Delete";
    
    a.classList.add("p");
    a.classList.add(cls[getRandom(0, cls.length - 1)]);
    b.classList.add("Done");
    c.classList.add("Delete");
    a.type ="text"
    // p.value = todo.value
    a.value = todo.value
    a.setAttribute("readonly","readonly")
    
    do {
      remain = localStorage.setItem(`task ${n}`, todo.value);
      n++;
      break;
    } while ((n = 0));
    b.addEventListener("click",()=>{
        a.removeAttribute("readonly")
        // added.appendChild(b).innerHTML  = "Save"
    })
    c.addEventListener("click",()=>{
        added.removeChild(a)
        added.removeChild(b)
        added.removeChild(c)
        localStorage.clear()
    })
  } 
  else {
    alert("Enter your Task");
  }

});


