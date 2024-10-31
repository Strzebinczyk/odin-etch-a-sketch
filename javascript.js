//Set up a grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.classList.toggle("row");
  for (let j = 0; j < 16; j++){
    let div = document.createElement("div");
    div.classList.toggle("cell");
    row.appendChild(div);
  }
  let grid = document.querySelector("#grid");
  grid.appendChild(row);
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
