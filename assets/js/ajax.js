/*document.querySelector('.form-container input[type="submit"]').addEventListener('click', () => {
  const input = document.querySelector('.form-container input[type="text"]');
  if(input.value !== ""){
    const value = input.value;
    input.value = "";
    //192.168.33.30
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log(this.state);
      if (this.readyState == 4){ //&& this.status == 200
          debugger;
      }
    };
  xhttp.open("GET", "http://192.168.33.30", true);
  xhttp.send('coucou');
  }
})*/
document.querySelector('.choice-container').addEventListener('click', (el) => {
  if(el.target.dataset.action !== undefined){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200){
        alert(this.responseText);
        // Afficher le résultat
        // debugger;
          //console.log(this.responseText);
      }
    };
    xhttp.open("GET", "http://192.168.33.30/move/" + el.target.dataset.action, true);
    xhttp.send();
  }
})
