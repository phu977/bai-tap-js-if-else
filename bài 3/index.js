function sochanle() {
  var number1 = document.getElementById("so-thu-nhat").value * 1;
  var number2 = document.getElementById("so-thu-hai").value * 1;
  var number3 = document.getElementById("so-thu-ba").value * 1;
  var counteven = 0;
  var countodd = 0;
  if (number1 % 2 == 0) {
    counteven += 1;
  }else{
    countodd += 1;
  }
  if (number2 % 2 == 0) {
    counteven += 1;
  }else{
    countodd += 1;
  }
  if (number3 % 2 == 0) {
    counteven += 1;
  }else{
    countodd += 1;
  }
  document.getElementById("result").innerHTML= `<p class='py-4'>Tổng só chẵn: ${counteven}<br> Tổng số lẻ:${countodd}</p>`;
}
