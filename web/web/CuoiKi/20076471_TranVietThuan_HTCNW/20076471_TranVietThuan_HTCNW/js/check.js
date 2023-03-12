$(document).ready(function(){
    $('#btnModal').click(function(){
        $('#myModal').modal();
    });

    function check_hoten(){
        var kt=/^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if($("#txtTen").val() == ""){
        $("#tbTen").html("*Bắt buộc nhập !!");
        return false;
        }
        if(!kt.test($("#txTen").val())){
        $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa !!");
        return false;
        }
        $("#tbTen").html("*");
        return true;
        }
        $("#txtTen").blur(check_hoten);

    function check_SCMND(){
        var kt = /[0-9]{9}$/;
        if($("#txtCMND").val() == ""){
            $("#tbCMND").html("*Bắt buộc nhập !!");
            return false;
            }
            if(!kt.test($("#txtCMND").val())){
            $("#tbCMND").html("*SCMND phải có 9 kí tự là số");
            return false;
            }
            $("#tbCMND").html("*");
            return true;
            };
            $("#txtCMND").blur(check_SCMND);

    function check_QQ(){
        if($("#txtQQ").val() == ""){
        $("#tbQQ").html("* Bắt buộc nhập");
        return false;
        }
        $("#tbQQ").html("*");
        return true;
        }
        $("#txtQQ").blur(check_QQ); 
        
    
    function check_SDT() {
    var kt = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if($("#txtSDT").val() == ""){
        $("#tbSDT").html("*Bắt buộc nhập !!");
        return false;
        }
        if(!kt.test($("#txtSDT").val())){
        $("#tbSDT").html("Số điện thoại phải có 9 kí tự là số");
        return false;
        }
        $("#tbSDT").html("*");
        return true;
        };
        $("#txtSDT").blur(check_SDT);

    function check_email() { 
        var kt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if($("#txtEmail").val() == ""){
            $("#tbEmail").html("*Bắt buộc nhập !!");
            return false;
            }
            if(!kt.test($("#txtEmail").val())){
            $("#tbEmail").html("Email nhập theo mẫu xxxxxx@iuh.edu.vn");
            return false;
            }
            $("#tbEmail").html("*");
            return true;
            };
            $("#txtEmail").blur(check_email);
})
