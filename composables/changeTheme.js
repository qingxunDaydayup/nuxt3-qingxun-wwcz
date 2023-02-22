// 需要配合css
// assets/css/theme/theme.css
let root = document.querySelector(":root");
let themeArr = ["dark", "light"];
let themeIndex = 0; 
export default () => {
    root.setAttribute("theme", themeArr[themeIndex++]);
    if(themeIndex >= themeArr.length) {
        themeIndex = 0;
    }
}