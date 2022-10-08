/*const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click',()=>{

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light');
        body.classList.remove('dark');
        btnToggle.removeAttribute("src");
        btnToggle.setAttribute("src","./media/image/noir.png");
    }else if(body.classList.contains('light')){

        body.classList.add('dark');
        body.classList.remove('light');
        btnToggle.removeAttribute("src");
        btnToggle.setAttribute("src","./media/image/blanc.png");

    }
})*/
const btnToggle = document.querySelector('.btn-toggle');
var body = document.getElementsByTagName('body')[0];
var dark_theme_class = 'dark';
var theme = getCookie('theme');



body.classList.add(theme);
btnToggle.removeAttribute("src");
btnToggle.setAttribute("src","./media/image/"+(theme == "dark" ? "noir": "blanc")+".png");

document.addEventListener('DOMContentLoaded', function () {


    $('.btn-toggle').on('click', function () {

        if (body.classList.contains(dark_theme_class)) {
            body.classList.remove('dark');
            body.classList.add('light');
            
            btnToggle.removeAttribute("src");
            btnToggle.setAttribute("src","./media/image/blanc.png");
            setCookie('theme', 'light','Lax');

        }
        else {

            body.classList.add('dark');
            body.classList.remove('light');
            btnToggle.removeAttribute("src");
            btnToggle.setAttribute("src","./media/image/noir.png");
            setCookie('theme', 'dark','Lax');
        }

    });

});

// enregistrement du theme dans le cookie

function setCookie(name, value,SameSite) {

    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    //console.log(expires)
    document.cookie = name + "=" + value + ";" +"SameSite="+SameSite+";"+ expires + ";path=/";
    //console.log(document.cookie)

}




// methode de recuperation du theme dans le cookie

function getCookie(cname) {

    var theme = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {

        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(theme) == 0) {
            return c.substring(theme.length, c.length);
        }
    }
    return "";
}

