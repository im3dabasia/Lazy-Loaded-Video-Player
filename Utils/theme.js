export const currentTheme = document.getElementsByClassName("website-theme")

let themeDark = false;
currentTheme.addEventListener('click',() =>{
    console.log(themeDark)
    themeDark = !themeDark
})