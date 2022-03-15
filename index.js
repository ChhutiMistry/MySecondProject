function changemode(){
    var mybody = document.body;
    var mycouponbutton = document.getElementById("closecou");
    var myservice = document.getElementById("myservice");
    var myservicee = document.getElementById("myservicee");
    var mmyservice = document.getElementById("mmyservice");
    var myyservice = document.getElementById("myyservice");
    var mysservice = document.getElementById("mysservice");
    var myseervice = document.getElementById("myseervice");
    var myserrvice = document.getElementById("myserrvice");
    var mybio = document.getElementById("mybio");
    var myreview = document.getElementById("myreview");
    mybody.classList.toggle(`mydark`);
    mycouponbutton.classList.toggle(`mycouponbut`);
    myservice.classList.toggle(`myservic`);
    myservicee.classList.toggle(`myservic`);
    mmyservice.classList.toggle(`myservic`);
    myyservice.classList.toggle(`myservic`);
    mysservice.classList.toggle(`myservic`);
    myseervice.classList.toggle(`myservic`);
    myserrvice.classList.toggle(`myservic`);
    mybio.classList.toggle(`myservic`);
    myreview.classList.toggle(`myservic`);
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none';
}