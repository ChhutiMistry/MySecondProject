function changemode(){
    var mybody = document.body;
    var mycouponbutton = document.getElementById("closecou");
    var myservice = document.getElementById("myservice");
    var myservicee = document.getElementById("myservicee1");
    var mmyservice = document.getElementById("mmyservice2");
    var myyservice = document.getElementById("myyservice3");
    var mysservice = document.getElementById("mysservice4");
    var myseervice = document.getElementById("myseervice5");
    var myserrvice = document.getElementById("myserrvice6");
    var mybio = document.getElementById("mybio");
    var myreview = document.getElementById("myreview");
    mybody.classList.toggle(`mydark`);
    mycouponbutton.classList.toggle(`mycouponbut`);
    myservice.classList.toggle(`myservic`);
    myservicee.classList.toggle(`myservice1`);
    mmyservice.classList.toggle(`myservice1`);
    myyservice.classList.toggle(`myservice1`);
    mysservice.classList.toggle(`myservice1`);
    myseervice.classList.toggle(`myservice1`);
    myserrvice.classList.toggle(`myservice1`);
    mybio.classList.toggle(`myservic`);
    myreview.classList.toggle(`myservic`);
}

function loadcoupon(){
    document.getElementById('coupon').style.display = 'block';
}

function closecoupon(){
    document.getElementById('coupon').style.display = 'none';
}