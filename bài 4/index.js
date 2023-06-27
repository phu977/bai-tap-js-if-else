function xacdinhtamgiac() {
    var canhthu1 = document.getElementById("canh-thu-nhat").value*1;
    var canhthu2 = document.getElementById("canh-thu-hai").value*1;
    var canhthu3 = document.getElementById("canh-thu-ba").value*1;
    if(canhthu1 == canhthu2 == canhthu3){
        var tamgiac = "tam giác đều";
    }else if(canhthu1 == canhthu2 ||canhthu2 == canhthu3 || canhthu1 == canhthu3 ){
        var tamgiac ="tam giác cân";
    }else if(canhthu1 * canhthu1 + canhthu2 * canhthu2 == canhthu3 * canhthu3 ||canhthu2 * canhthu2 + canhthu3 * canhthu3 == canhthu1 * canhthu1 || canhthu1 * canhthu1 + canhthu3 * canhthu3 == canhthu2 * canhthu2){
        var tamgiac = "tam giác vuông";
    }else{
        var tamgiac = "tam giac thường";
    }
    document.getElementById("result").innerHTML = `<p>${tamgiac}</p>`;
}