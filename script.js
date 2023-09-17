let dispMsg = document.getElementById('disp_ele');
let lastCount = document.getElementById('saved_data');
let count = 0;

function increament() {
  count = count + 1;
  dispMsg.textContent = count;
}
function decreament() {
   count -= 1;
  dispMsg.textContent = count
}
function save() {
  let saveData = count + "-" ;
  lastCount.textContent += saveData; 
  count = 0;
  dispMsg.innerText = 0; 
}

