function toggleText() {
  document.addEventListener('click', function(event){
    let btn = event.target.className;
    if (!btn) return;
    let elem = document.getElementById("text");
    elem.hidden = !elem.hidden;
  });
}