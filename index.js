const header = document.querySelector(".header");
const clearBtn = header.querySelector("button");

function clear() {
    localStorage.clear();
}

function init() {
    clearBtn.addEventListener("click", clear)
}

init();