function chaohoi() {
    var thongTin = document.getElementById("thanh-vien").value;
    switch(thongTin){
        case "bố":
            var chaohoi = "chào bố";
            break;
        case "Bố":
            var chaohoi = "chào bố";
            break;
        case "cha":
            var chaohoi = "chào bố";
            break;
        case "Cha":
            var chaohoi = "chào bố";
            break;
        case "mẹ":
            var chaohoi = "chào mẹ";
            break;
        case "Mẹ":
            var chaohoi = "chào mẹ";
            break;
        case "Má":
            var chaohoi = "chào mẹ";
            break;
        case "má":
            var chaohoi = "chào mẹ";
            break;
        case "anh trai":
            var chaohoi = "chào anh trai";
            break;
        case "em gái":
            var chaohoi = "chào em gái";
            break;
        default:
            chaohoi =" vui lòng nhập vai trò của thành viên gia đình";
    }
    document.getElementById("result").innerHTML = `<p>${chaohoi}</p>`;
}