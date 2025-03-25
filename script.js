// Lista de frases motivadoras
const frases = [
    "Tu web debe trabajar mientras tú duermes.",
    "Convierte visitantes en clientes con estrategia.",
    "El marketing digital no es magia, es método.",
    "Lo simple también puede ser potente.",
    "La confianza se gana en cada clic.",
    "Sin acción, no hay conversión.",
    "Una buena idea mal contada es una oportunidad perdida.",
    "La claridad vence al ruido. Siempre.",
  ];
  
  // Elegir una frase aleatoria
  function mostrarFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    const frase = frases[indice];
    document.getElementById("frase-motivadora").textContent = frase;
  }
  
  // Ejecutar al cargar la página
  document.addEventListener("DOMContentLoaded", mostrarFraseAleatoria);
  