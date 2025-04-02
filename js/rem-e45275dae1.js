function setRem() {
    let e = document.documentElement.clientWidth / 750;
    1.4 < e && (e = 1.4), document.documentElement.style.fontSize = 75 * e + "px"
}
window.addEventListener("resize", setRem), setRem();