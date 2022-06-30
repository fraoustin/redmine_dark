function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieName() {
    return encodeURI(document.getElementsByTagName("title")[0].textContent.split('-').pop().trim()) + "_DarkTheme";
}

function clickdarkmode() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.getElementsByTagName("html")[0].classList.remove('dark');
        setCookie(getCookieName(), "off", 30);
        console.log("dark mode off");
    } else {
        document.body.classList.add('dark');
        document.getElementsByTagName("html")[0].classList.add('dark');
        setCookie(getCookieName(), "on", 30);
        console.log("dark mode on");
    }
    return false;
}

$(document).ready(function() {
    console.log("dark.js");
    var topmenu = document.getElementById("top-menu");
    var divdark = document.createElement("div");
    divdark.id = "dark";
    var adivdark = document.createElement("a");
    adivdark.innerText = "dark mode";
    adivdark.href = "";
    divdark.appendChild(adivdark);
    topmenu.insertBefore(divdark, topmenu.firstChild)
    adivdark.onclick = clickdarkmode;
    try {
        var ulmobil = document.querySelectorAll('#wrapper .js-profile-menu ul')[0];
        var lidark = document.createElement("li");
        var alidark = document.createElement("a");
        alidark.innerText = "dark mode";
        alidark.href = "";
        lidark.appendChild(alidark);
        ulmobil.appendChild(lidark);
        alidark.onclick = clickdarkmode;
    } catch (e) {}
    let initdark = getCookie(getCookieName());
    if (initdark == "on") {
        clickdarkmode();
    }
});
 

