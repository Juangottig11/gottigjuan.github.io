    
    function escribirTexto(elemento, texto, indice) {
        // Si el índice es igual al tamaño del texto, eliminamos el texto y volvemos a iniciar la función
        if (indice === texto.length) {
          setTimeout(() => {
            elemento.textContent = '';
            indice = 0;
            escribirTexto(elemento, texto, indice);
          }, 4500);
          return;
        }
      
        // Agregamos el carácter actual al elemento de texto
        elemento.textContent += texto[indice];
      
        // Llamamos a la función de manera recurrente con un retraso de 50 milisegundos
        setTimeout(() => escribirTexto(elemento, texto, indice + 1), 220);
      }
      
      // Iniciamos el efecto de máquina de escribir al cargar la página
      window.addEventListener('load', () => {
        const elemento = document.getElementById('mi-elemento');
        const texto = 'Developer Full Stack Junior';
      
        escribirTexto(elemento, texto, 0);
      });
      window.addEventListener('load', () => {
        const elemento = document.getElementById('mi-titulo');
        const texto = 'Gottig Juan Jose';
      
        escribirTexto(elemento, texto, 0);
      });
      
      
      