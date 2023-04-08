const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");
let navDisplay = false;

navButton?.addEventListener("click", () => {
    navDisplay = !navDisplay;
    if (nav != null) {
        if (navDisplay) {
            nav.style.height = "0";
        } else {
            nav.style.height = "200px";
        }
    }
});
