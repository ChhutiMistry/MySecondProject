const validateinfofirstname = () => {
    let infofirstname = document.getElementById('infofirstname').value;
    let infodonefirstname = document.getElementById('infodonefirstname');
    let infoblankfirstname = document.getElementById('infoblankfirstname');

    if(infofirstname.trim().length == 0){
        infodonefirstname.classList.remove('has-success')
        infoblankfirstname.innerHTML = "(PLEASE FILL IN)"
        infoblankfirstname.style.color = "#a94442"
        infoblankfirstname.style.margin = "12%"
        infodonefirstname.classList.add('has-error')
    }else{
        infoblankfirstname.innerHTML = ""
        infodonefirstname.classList.remove('has-error')
        infodonefirstname.classList.add('has-success')
    }
}

const validateinfolastname = () => {
    let infolastname = document.getElementById('infolastname').value;
    let infodonelastname = document.getElementById('infodonelastname');
    let infoblanklastname = document.getElementById('infoblanklastname');

    if(infolastname.trim().length == 0){
        infodonelastname.classList.remove('has-success')
        infoblanklastname.innerHTML = "(PLEASE FILL IN)"
        infoblanklastname.style.color = "#a94442"
        infoblanklastname.style.margin = "12%"
        infodonelastname.classList.add('has-error')
    }else{
        infoblanklastname.innerHTML = ""
        infodonelastname.classList.remove('has-error')
        infodonelastname.classList.add('has-success')
    }
}

const validateinfoemail = () => {
    let infoemail = document.getElementById('infoemail').value;
    let infodoneemail = document.getElementById('infodoneemail');
    let infoblankemail = document.getElementById('infoblankemail');

    if(infoemail.trim().length == 0){
        infodoneemail.classList.remove('has-success')
        infoblankemail.innerHTML = "(PLEASE FILL IN)"
        infoblankemail.style.color = "#a94442"
        infoblankemail.style.margin = "8%"
        infodoneemail.classList.add('has-error')
    }else{
        infoblankemail.innerHTML = ""
        infodoneemail.classList.remove('has-error')
        infodoneemail.classList.add('has-success')
    }
}

const validateinfonumber = () => {
    let infonumber = document.getElementById('infonumber').value;
    let infodonenumber = document.getElementById('infodonenumber');
    let infoblanknumber = document.getElementById('infoblanknumber');

    if(infonumber.trim().length == 0){
        infodonenumber.classList.remove('has-success')
        infoblanknumber.innerHTML = "(PLEASE FILL IN)"
        infoblanknumber.style.color = "#a94442"
        infoblanknumber.style.margin = "6%"
        infodonenumber.classList.add('has-error')
    }else{
        infoblanknumber.innerHTML = ""
        infodonenumber.classList.remove('has-error')
        infodonenumber.classList.add('has-success')
    }
}

const validateinfodate = () => {
    let infodate = document.getElementById('infodate').value;
    let infodonedate = document.getElementById('infodonedate');
    let infoblankdate = document.getElementById('infoblankdate');

    if(infodate.trim().length == 0){
        infoblankdate.innerHTML = ""
        infodonedate.classList.add('has-success')
    }else{
        infoblankdate.innerHTML = ""
        infodonedate.classList.add('has-success')
    }
}

const validateinfomessage = () => {
    let infomessage = document.getElementById('infomessage').value;
    let infodonemessage = document.getElementById('infodonemessage');
    let infoblankmessage = document.getElementById('infoblankmessage');

    if(infomessage.trim().length == 0){
        infoblankmessage.innerHTML = ""
        infodonemessage.classList.add('has-success')
    }else{
        infoblankmessage.innerHTML = ""
        infodonemessage.classList.add('has-success')
    }
}