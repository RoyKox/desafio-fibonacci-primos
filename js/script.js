/**
 * Procesa la serie de Fibonacci y valida los números primos integrados en tiempo real.
 * Utiliza de forma obligatoria e inequívoca document.getElementById().
 */
function calcularSecuenciaHibrida() {

    // 1. Obtención obligatoria de los elementos del DOM
    const elementoInput = document.getElementById("cantidadTerminos");
    const elementoContenedor = document.getElementById("resultado");
    const elementoContadorHTML = document.getElementById("contadorPrimos");
    
    const cantidad = parseInt(elementoInput.value);
    
    // Reseteo preventivo del contenedor visual
    elementoContenedor.innerHTML = "";
    
    let stringHTMLBuffer = "";
    let acumuladorPrimos = 0;
    
    // 2. Algoritmo de la Serie de Fibonacci usando variables simples (Sin vectores/arrays)
    let a = 0;
    let b = 1;
    let c;

    for (let i = 1; i <= cantidad; i++) {

        let valorTerminoActual;

        if (i === 1) {
            valorTerminoActual = a;
        } else if (i === 2) {
            valorTerminoActual = b;
        } else {
            c = a + b;
            a = b;
            b = c;
            valorTerminoActual = c;
        }

        // 3. Algoritmo de Verificación de Número Primo por elemento
        let contadorDivisores = 0;
        
        // Bucle iterativo de comprobación de divisores exactos
        for (let divisor = 1; divisor <= valorTerminoActual; divisor++) {

            if (valorTerminoActual % divisor === 0) {
                contadorDivisores++;
            }
        }

        // Un número es primo si posee exactamente 2 divisores (la unidad y sí mismo)
        const esPrimo = (contadorDivisores === 2);
        
        if (esPrimo) {
            acumuladorPrimos++;
        }

        // Composición estructural del nodo visual de la solución
        stringHTMLBuffer += `
            <div class="item-secuencia" style="animation-delay: ${i * 0.02}s">
                <div>
                    <span class="term-number">Término ${i}:</span>
                    <span class="term-value">${valorTerminoActual}</span>
                </div>

                <div>
                    ${esPrimo 
                        ? '<span class="badge-status is-crypto-prime">🛡️ Código Primo</span>' 
                        : '<span class="badge-status is-regular">Normal</span>'
                    }
                </div>
            </div>
        `;
    }

    // 4. Mostrar de forma obligatoria los resultados en pantalla
    elementoContenedor.innerHTML = stringHTMLBuffer;
    
    // Actualizar dinámicamente la insignia informativa superior
    elementoContadorHTML.innerText = `${acumuladorPrimos} ${acumuladorPrimos === 1 ? 'Primo' : 'Primos'}`;
}