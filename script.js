const container = document.querySelector(".container");

const splitLeft = document.querySelector(".left");

const splitRight = document.querySelector(".right");

splitLeft.addEventListener("mouseenter", leftHover);

splitRight.addEventListener("mouseenter", rightHover);

function leftHover() {
    container.classList.add("hover-left");
    splitLeft.addEventListener("mouseleave", removeLeftHover);
}

function removeLeftHover() {
    container.classList.remove("hover-left");
}

function rightHover() {
    container.classList.add("hover-right");
    splitRight.addEventListener("mouseleave", removeRightHover);
}

function removeRightHover() {
    container.classList.remove("hover-right");
}