// 1) CLICK
document.getElementById("cardClick").addEventListener("click", () => {
  alert("✅ Evento CLICK: Hiciste click en la tarjeta.");
});

// 2) MOUSEOVER
const cardHover = document.getElementById("cardHover");
cardHover.addEventListener("mouseover", () => {
  cardHover.querySelector("p").textContent = "✅ Mouse detectado (mouseover)";
});
cardHover.addEventListener("mouseout", () => {
  cardHover.querySelector("p").textContent = "Hover over me! (mouseover event)";
});

// 3) DBLCLICK
document.getElementById("cardDblClick").addEventListener("dblclick", (e) => {
  e.currentTarget.querySelector("p").textContent = "✅ Doble click detectado (dblclick)";
});

// 4) KEYUP
const inputKeyup = document.getElementById("inputKeyup");
const keyupHint = document.getElementById("keyupHint");
inputKeyup.addEventListener("keyup", () => {
  keyupHint.textContent = inputKeyup.value
    ? `Escribiendo: "${inputKeyup.value}"`
    : "Esperando texto…";
});

// 5) FOCUS
const inputFocus = document.getElementById("inputFocus");
const focusHint = document.getElementById("focusHint");
inputFocus.addEventListener("focus", () => {
  focusHint.textContent = "✅ Enfocado (focus)";
});

// 6) BLUR
const inputBlur = document.getElementById("inputBlur");
const blurHint = document.getElementById("blurHint");
inputBlur.addEventListener("blur", () => {
  const edad = Number(inputBlur.value);
  if (!inputBlur.value) {
    blurHint.textContent = "⚠️ No ingresaste edad (blur)";
    return;
  }
  blurHint.textContent = edad < 18
    ? "⚠️ Eres menor de edad (blur)"
    : "✅ Mayor de edad (blur)";
});

// 7) SUBMIT
const formSubmit = document.getElementById("formSubmit");
const submitHint = document.getElementById("submitHint");
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submitHint.textContent = "✅ Formulario enviado (submit)";
});

// 8) CHANGE
const selectChange = document.getElementById("selectChange");
const changeHint = document.getElementById("changeHint");

selectChange.addEventListener("change", () => {
  if (!selectChange.value) {
    changeHint.textContent = "Sin selección";
    return;
  }
  document.body.style.backgroundColor = selectChange.value;
  changeHint.textContent = "✅ Valor cambiado (change)";
});
