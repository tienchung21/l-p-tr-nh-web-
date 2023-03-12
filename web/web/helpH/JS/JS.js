
$(document).ready(function(){
    var i = 1;
    $("#btnModal").click(function(){
        $("#myModal").modal()
    })
    $("#myModal").modal("hide");
    $("#luu").click(function(){
        var ten = $("#txtTen").val();
        var dc = $("#txtDC").val();
        var ngay = $("#txtNgay").val();
        var gio = $("#txtTime").val();
        var email = $("#txtEmail").val();
        var dt = $("#txtdt").val();
        
        var them = "<tr><td>"+ (i++) + "</td><td>" + ten + "</td><td>" + dc + "</td><td>"
        + ngay + "</td><td>" + gio + "</td><td>" + email; + "</td><td>" + dt + "</td><>" 
         "</td></tr>";

        $("table tbody").append(them);
    })
    function kiemTraTen(){
        var kt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        ten = $("#txtTen").val();
        if( ten == "")
        {
            $("#loiTen").html("Bắt buộc nhập"); return false;
        }
        if(!kt.test(ten))
        {
            $("#loiTen").html(" *Chữ cái đầu của mỗi từ phải viết hoa !!"); return false;
        }
        $("#loiTen").html("*"); return true;
    }
    $("#txtTen").blur(kiemTraTen);
    function kiemTraDT(){
        var kt = /^[0-9]{4}\-[0-9]{3}\-[0-9]{3}$/;
        dt = $("#txtDT").val();
        if( dt == "" ){
            $("#loiDT").html("Bắc buộc nhập"); return false;
        }
        if(!kt.test(dt)){
            $("#loiDT").html("Nhập đúng mẫu: 0000-000-000"); return false;
        }
        $("#loiDT").html("*"); return true;
    }
    $("#txtDT").blur(kiemTraDT);
    function kiemTraDC(){
        var kt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        ten = $("#txtTen").val();
        if( ten == "")
        {
            $("#loiDC").html("Bắt buộc nhập"); return false;
        }
        if(!kt.test(ten))
        {
            $("#loiDC").html(" *Chữ cái đầu của mỗi từ phải viết hoa !!"); return false;
        }
        $("#loiDCx").html("*"); return true;
    }
    $("#txtDC").blur(kiemTraDC);
    function kiemTraNgay(){
        var ngay = $("#txtNgay").val();
        if( ngay == "" ){
            $("#loiNgay").html("Bắc buộc nhập"); return false;
        }
        day = new Date(ngay);
        today = new Date();
        if( day < today ){
            $("#loiNgay").html("Ngày phải sau ngày hiện tại"); return false;
        }
        $("#loiNgay").html("*"); return true;
    }
    $("#txtNgay").blur(kiemTraNgay);
    
})