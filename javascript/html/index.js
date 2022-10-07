let boton = document.querySelector("button")

boton.addEventListener("click", () => alert("click btn"))

$("button").click(function() {
    console.log("Hi, soy jQuery")
})