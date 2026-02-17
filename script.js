// 1 Click
document.getElementById("btnClick").addEventListener("click", function() {
    alert("Botón presionado");
});

// 2 Mouseover
document.getElementById("cajaHover").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// 3 Double Click
document.getElementById("dobleClick").addEventListener("dblclick", function() {
    this.style.color = "red";
});

// 4 Keyup
document.getElementById("inputTexto").addEventListener("keyup", function() {
    console.log("Texto escrito: " + this.value);
});

// 5 Change
document.getElementById("selector").addEventListener("change", function() {
    document.body.style.backgroundColor = this.value;
});

// 6 Focus
document.getElementById("correo").addEventListener("focus", function() {
    this.style.backgroundColor = "#d1f0ff";
});

// 7 Blur
document.getElementById("edad").addEventListener("blur", function() {
    if(this.value < 18){
        alert("Eres menor de edad");
    }
});

// 8 Submit
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
});
