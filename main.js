const toggler = document.querySelector(".toggler");
const basicPrice = document.getElementById("basic-price-annual");
const proPrice = document.getElementById("pro-price-annual");
const masterPrice = document.getElementById("master-price-annual")

toggler.addEventListener("change", () => {
    if(toggler.checked){
        basicPrice.innerHTML = "$19.99";
        proPrice.innerHTML = "$24.99";
        masterPrice.innerHTML = "$39.99";
    } else {
        basicPrice.innerHTML = "$199.99"
        proPrice.innerHTML = "$249.99";
        masterPrice.innerHTML = "$399.99";
    }
})