document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input-text");
  const encryptBtn = document.getElementById("encrypt-btn");
  const decryptBtn = document.getElementById("decrypt-btn");
  const outputDiv = document.getElementById("output-div");
  const botonesOup = document.getElementById("botonesOup");
  const copyBtn = document.getElementById("copy-btn");

  copyBtn.addEventListener("click", () => {
    const outputText = document.getElementById("output-text");
    outputText.select(); // Seleccionar el contenido del textarea de salida
    document.execCommand("copy"); // Copiar el texto seleccionado al portapapeles
  });

  function encrypt() {
    const input = inputText.value.toLowerCase();
    let output = "";

    if (input === "") {
      outputDiv.innerHTML =
        ' <img src="./img/Muñeco.png" id="munneco"/><h2 class="nada">Ningún mensaje fue encontrado...</h2><p>Ingresa el texto que desees encriptar o desencriptar.</p>';
      copyBtn.style.display = "none";
      return; // Salir de la función si no se ha ingresado ningún texto
    } else {
      outputDiv.innerHTML = '<textarea id="output-text" readonly ></textarea>';
      const outputText = document.getElementById("output-text");
      for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
          case "e":
            output += "enter";
            break;
          case "i":
            output += "imes";
            break;
          case "a":
            output += "ai";
            break;
          case "o":
            output += "ober";
            break;
          case "u":
            output += "ufat";
            break;
          default:
            output += input[i];
        }
      }

      copyBtn.style.display = "block";
      outputText.value = output;
    }
  }

  function decrypt() {
    const input = inputText.value.toLowerCase();
    let output = "";

    if (input === "") {
      outputDiv.innerHTML =
        ' <img src="./img/Muñeco.png" id="munneco"/><h2 class="nada">Ningún mensaje fue encontrado...</h2><p>Ingresa el texto que desees encriptar o desencriptar.</p>';
      copyBtn.style.display = "none";
      return; // Salir de la función si no se ha ingresado ningún texto
    } else {
      outputDiv.innerHTML = '<textarea id="output-text" readonly "></textarea>';
      const outputText = document.getElementById("output-text");
      for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
          case "e":
            if (input.substr(i, 5) === "enter") {
              output += "e";
              i += 4;
            } else {
              output += input[i];
            }
            break;
          case "i":
            if (input.substr(i, 4) === "imes") {
              output += "i";
              i += 3;
            } else {
              output += input[i];
            }
            break;
          case "a":
            if (input.substr(i, 2) === "ai") {
              output += "a";
              i += 1;
            } else {
              output += input[i];
            }
            break;
          case "o":
            if (input.substr(i, 4) === "ober") {
              output += "o";
              i += 3;
            } else {
              output += input[i];
            }
            break;
          case "u":
            if (input.substr(i, 4) === "ufat") {
              output += "u";
              i += 3;
            } else {
              output += input[i];
            }
            break;
          default:
            output += input[i];
        }
      }
      copyBtn.style.display = "block";
      outputText.value = output;
    }
  }

  encryptBtn.addEventListener("click", encrypt);
  decryptBtn.addEventListener("click", decrypt);
});
