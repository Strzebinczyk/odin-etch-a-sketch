
btn.addEventListener("click", function () {
  let dimension = parseInt(prompt("Please enter a number between 1 and 100"));
  if(dimension < 1) {
    alert("Number too small, will use 1")
    dimension = 1;
  } else if (dimension > 100) {
    alert("Number too big, will use 100")
    dimension = 100;
  } else if (isNaN(dimension)) {
    alert("Not a number, will use 16")
    dimension = 16;
  }
  gridSetup(dimension);
});

function gridSetup(dim) {
  grid.replaceChildren();
  for (let i = 0; i < dim; i++) {
    let row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < dim; j++){
      let div = document.createElement("div");
      div.classList.toggle("cell");
      row.appendChild(div);
    }
    let grid = document.querySelector("#grid");
    grid.appendChild(row);
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
}