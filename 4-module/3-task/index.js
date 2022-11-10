function highlight(table) {
  
  for (let elem of table.rows) {
    
    if (elem.cells[3].getAttribute("data-available") === "true"){
      elem.classList.add("available")
    };

    if (elem.cells[3].getAttribute("data-available") === "false"){
      elem.classList.add("unavailable")
    };

    if (elem.cells[3].hasAttribute("data-available") === false){
      elem.hidden = true
    };
   
    if (elem.cells[1].innerHTML < 18){
      elem.style="text-decoration: line-through"
    };

    if (elem.cells[2].innerHTML == "m"){
      elem.classList.add("male");

    };
    if (elem.cells[2].innerHTML == "f"){ 
      elem.classList.add("female");
    };
  };
};
