function changemode(){
    var mybody = document.body;
    var mycouponbutton = document.getElementById("closecou");
    mybody.classList.toggle(`mydark`);
    mycouponbutton.classList.toggle(`mycouponbut`);
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none';
}