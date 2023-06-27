function sapxep() {
    var number1 = document.getElementById("so-thu-nhat").value*1;
    var number2 = document.getElementById("so-thu-hai").value*1;
    var number3 = document.getElementById("so-thu-ba").value*1;
    var sort =[number1,number2,number3];
    if(number1 <= number2){
        if(number2 <= number3){
            sort=[number1,number2,number3];
        }else {
            if(number1 <= number3){
                sort=[number1,number3,number2];
            }else{
                sort=[number3,number1,number2];
            }
        }
    }else{
        if(number1 <= number3){
            sort=[number2,number1,number3];
        }else{
            if(number2 <= number3){
                sort=[number2,number3,number1];
            }else{
                sort=[number3,number2,number1];
            }
        }
    }
    document.getElementById("result").innerHTML=`<p>Gía trị sắp xếp: ${sort}</p>`;
}