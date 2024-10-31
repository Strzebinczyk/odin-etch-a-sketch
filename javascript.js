for (let i = 0; i < 16; i++) {
  let container = document.createElement("div");
  for (let j = 0; j < 16; j++){
    let div = document.createElement("div");
    div.classList += "cell";
    container.appendChild(div);
  }
  let grid = document.querySelector("#grid");
  grid.appendChild(container);
}