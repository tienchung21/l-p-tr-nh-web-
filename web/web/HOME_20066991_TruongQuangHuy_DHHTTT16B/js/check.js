$(document).ready(function(){


    //Họ tên không được bỏ trống, họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa. 
    function check_hoTen(){

    }

    //Số điện thoại không rỗng, nhập theo định dạng sau: XXX-YYYYYY, trong đó X, Y là các ký tự số.
    function check_sdt(){
        var kt = /^\+?([0-9]{4})\)?[-.]?([0-9]{6})$/;
        if($("#txtSDT").val() == "")
    }
    //Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18
    function check_date(){
        var date = $("txt")
    }


})