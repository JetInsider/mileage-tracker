localStorage.setItem('lightmode', null)

let lightmode = localStorage.getItem('lightmode');
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', changeTheme);

function changeTheme(){
    lightmode = localStorage.getItem('lightmode');
    lightmode == 'active' ? enableDarkMode() : enableLightMode();
}

function enableDarkMode(){
    localStorage.setItem('lightmode', null)
    document.body.classList.remove('light-mode');
}

function enableLightMode(){
    localStorage.setItem('lightmode', 'active')
    document.body.classList.add('light-mode');
}