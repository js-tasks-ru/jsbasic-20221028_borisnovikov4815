// Last
// function toggleText() {
//   document.addEventListener('click', function(event){
//     let btn = event.target.className;
//     if (!btn) return;
//     let elem = document.getElementById("text");
//     elem.hidden = !elem.hidden;
//   });
// }

// New
function toggleText() {
  let toggleButton = document.querySelector('.toggle-text-button');
  let textElement = document.getElementById('text');

  toggleButton.addEventListener('click', () => {
    let isTextElementHidden = textElement.hidden;
    textElement.hidden = !isTextElementHidden;
  });
}