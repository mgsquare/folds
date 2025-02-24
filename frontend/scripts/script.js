document.addEventListener("DOMContentLoaded", function () {
    let topHalf = document.getElementById("top-half");
    let isFolded = false;

    document.getElementById("paper").addEventListener("click", function () {
        console.log("Paper clicked!");

        if (isFolded) {
            topHalf.style.transform = "rotateX(0deg)";  // Unfold
        } else {
            topHalf.style.transform = "rotateX(180deg)";  // Fold downward
        }

        isFolded = !isFolded;  // Toggle fold state
    });
});
