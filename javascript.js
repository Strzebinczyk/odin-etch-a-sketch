//Set up a grid
for (let i = 0; i < 16; i++) {
  let container = document.createElement("div");
  for (let j = 0; j < 16; j++){
    let div = document.createElement("div");
    div.classList.toggle("cell");
    container.appendChild(div);
  }
  let grid = document.querySelector("#grid");
  grid.appendChild(container);
}

function darken(element) {
  console.log(element.target);
}

gridCells = document.querySelectorAll(".cell")
gridCells.forEach((cell) => {
  cell.addEventListener("mouseover", function (e) {
    if(!(e.target.classList.contains("dark"))) {
      e.target.classList.toggle("dark");
      e.target.style.opacity = 0.1;
    } else {
      opacity = parseFloat(e.target.style.opacity) + 0.1;
      e.target.style.opacity =  opacity;
    }
  });
});
