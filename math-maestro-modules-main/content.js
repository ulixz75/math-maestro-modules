const contentData = {
  "g7-matematicas": {
    title: "Matemáticas de 7mo Grado",
    units: [
      {
        title: "Unidad 1: Los Números Enteros",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
          {
            title: "1. Números Relativos",
            icon: "fas fa-arrows-alt-h",
            theory:
              "Los números relativos son aquellos que tienen un signo (+ o -) para indicar una dirección o una posición respecto a un punto de referencia (generalmente el cero). Son cruciales para describir situaciones de la vida real como temperaturas, deudas, altitudes y más.",
            examples: [
              {
                problem:
                  "Un termómetro marca 5 grados bajo cero. ¿Cómo se representa este valor como un número relativo?",
                solution: "-5°C",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "Identifica el punto de referencia. En temperaturas, el punto de referencia es 0 grados.",
                  },
                  {
                    step: 2,
                    explanation:
                      'La frase "bajo cero" indica una dirección negativa.',
                  },
                  {
                    step: 3,
                    explanation:
                      "Combina el signo (-) con el valor numérico (5) para obtener -5.",
                  },
                ],
              },
            ],
          },
          {
            title: "2. Valor Absoluto",
            icon: "fas fa-compress-arrows-alt",
            theory:
              "El valor absoluto de un número es su distancia al cero en la recta numérica. Siempre es un valor no negativo. Se denota con barras verticales: |x|.",
            examples: [
              {
                problem: "Calcula el valor absoluto de -9.",
                solution: "|-9| = 9",
                steps: [
                  { step: 1, explanation: "La distancia desde -9 hasta 0 es de 9 unidades." },
                  { step: 2, explanation: "El valor absoluto ignora el signo, por lo tanto es 9." },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Unidad 2: Operaciones con Números Enteros",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
          {
            title: "1. Adición y Sustracción",
            icon: "fas fa-plus-circle",
            theory: "Sumar y restar números enteros implica manejar sus signos. Las reglas son: <br><strong>Mismo Signo:</strong> Se suman los valores absolutos y se conserva el signo común. <br><strong>Diferente Signo:</strong> Se restan los valores absolutos (el mayor menos el menor) y se conserva el signo del número con mayor valor absoluto. <br><br><strong>Tip Clave:</strong> Restar un número es lo mismo que sumar su opuesto. Por ejemplo, <strong>a - b</strong> es igual a <strong>a + (-b)</strong>. Y <strong>a - (-b)</strong> es igual a <strong>a + b</strong>. <br><br><i>[Visual: Recta numérica mostrando el desplazamiento al sumar 5 + (-3) y al restar 2 - 4.]</i>",
            examples: [
              {
                problem: "Calcula (-12) + (-5).",
                solution: "-17",
                steps: [
                  { step: 1, explanation: "Los dos números tienen el mismo signo (negativo)." },
                  { step: 2, explanation: "Suma sus valores absolutos: 12 + 5 = 17." },
                  { step: 3, explanation: "Conserva el signo común. El resultado es -17." },
                ]
              },
            ]
          },
          {
            title: "2. Multiplicación y División",
            icon: "fas fa-times-circle",
            theory: "La <strong>ley de los signos</strong> es la regla fundamental para multiplicar y dividir enteros. Es muy sencilla: <br><ul><li>(+) × (+) = +</li><li>(-) × (-) = +</li><li>(+) × (-) = -</li><li>(-) × (+) = -</li></ul>En resumen, si los <strong>signos son iguales</strong>, el resultado es <strong>positivo</strong>. Si los <strong>signos son diferentes</strong>, el resultado es <strong>negativo</strong>. Esta regla se aplica tanto para la multiplicación como para la división exacta.",
            examples: [
              {
                problem: "Calcula (-9) × 8.",
                solution: "-72",
                steps: [
                  { step: 1, explanation: "Los signos son diferentes (negativo y positivo)." },
                  { step: 2, explanation: "Por la ley de los signos, el resultado será negativo." },
                  { step: 3, explanation: "Multiplica los valores absolutos: 9 × 8 = 72." },
                  { step: 4, explanation: "El resultado final es -72." },
                ]
              },
            ]
          },
          {
            title: "3. Potenciación y Radicación",
            icon: "fas fa-square-root-alt",
            theory: "La <strong>potenciación</strong> es una forma abreviada de escribir una multiplicación de factores iguales. Se compone de una <strong>base</strong> y un <strong>exponente</strong>. <br><i>[Visual: a^n = a × a × ... × a (n veces)]</i><br>Al trabajar con bases negativas, el signo del resultado depende del exponente:<ul><li>Si el exponente es <strong>par</strong>, el resultado es <strong>positivo</strong>. Ej: (-2)⁴ = 16.</li><li>Si el exponente es <strong>impar</strong>, el resultado es <strong>negativo</strong>. Ej: (-2)³ = -8.</li></ul>La <strong>radicación</strong> es la operación inversa a la potenciación. Consiste en encontrar la base conociendo el exponente (llamado índice) y la potencia (llamada radicando). <br><i>[Visual: Diagrama de las partes de una raíz: índice, radical, radicando.]</i><br><strong>Importante:</strong> No se puede calcular la raíz de índice par de un número negativo en el conjunto de los números enteros (ej. √-4 no es un entero).",
            examples: [
              {
                problem: "Calcula (-3)⁴.",
                solution: "81",
                steps: [
                  { step: 1, explanation: "La base es -3 y el exponente es 4 (par)." },
                  { step: 2, explanation: "El resultado, por tanto, será positivo." },
                  { step: 3, explanation: "Calcula la potencia: 3 × 3 × 3 × 3 = 81." },
                ]
              },
            ]
          },
        ],
      },
      {
        title: "Unidad 3: Números Racionales",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
            {
                title: "1. Fracciones y Decimales",
                icon: "fas fa-divide",
                theory: "Un <strong>número racional</strong> es cualquier número que puede expresarse como una fracción <strong>a/b</strong>, donde 'a' (numerador) y 'b' (denominador) son enteros, y 'b' no es cero. Esto incluye a los números enteros, las fracciones y los decimales (exactos y periódicos).<br><br><i>[Visual: Diagrama que muestra cómo los números naturales están dentro de los enteros, y los enteros dentro de los racionales.]</i>",
                examples: [
                    {
                        problem: "Convierte la fracción 3/4 a decimal.",
                        solution: "0.75",
                        steps: [
                            { step: 1, explanation: "Para convertir una fracción a decimal, se divide el numerador entre el denominador." },
                            { step: 2, explanation: "Realiza la división: 3 ÷ 4 = 0.75." },
                        ]
                    },
                    {
                        problem: "Convierte el decimal 0.8 a fracción.",
                        solution: "4/5",
                        steps: [
                            { step: 1, explanation: "Escribe el decimal como una fracción con denominador 1: 0.8 / 1." },
                            { step: 2, explanation: "Multiplica el numerador y el denominador por 10 para eliminar el decimal: (0.8 × 10) / (1 × 10) = 8/10." },
                            { step: 3, explanation: "Simplifica la fracción dividiendo ambos por su máximo común divisor (2): 8 ÷ 2 = 4 y 10 ÷ 2 = 5. La fracción es 4/5." },
                        ]
                    }
                ]
            },
            {
                title: "2. Operaciones con Racionales",
                icon: "fas fa-calculator",
                theory: "Las operaciones con fracciones requieren reglas específicas:<br><strong>Suma/Resta:</strong> Si tienen el mismo denominador, se suman/restan los numeradores. Si no, se busca un denominador común.<br><strong>Multiplicación:</strong> Se multiplican los numeradores entre sí y los denominadores entre sí (a/b × c/d = ac/bd).<br><strong>División:</strong> Se multiplica la primera fracción por el inverso de la segunda (a/b ÷ c/d = a/b × d/c).",
                examples: [
                    {
                        problem: "Calcula (1/2) + (3/4).",
                        solution: "5/4",
                        steps: [
                            { step: 1, explanation: "El mínimo común múltiplo de 2 y 4 es 4. Este será el denominador común." },
                            { step: 2, explanation: "Convierte 1/2 a una fracción con denominador 4: (1×2)/(2×2) = 2/4." },
                            { step: 3, explanation: "Suma las fracciones: (2/4) + (3/4) = 5/4." },
                        ]
                    }
                ]
            }
        ]
      },
      {
        title: "Unidad 4: Proporcionalidad",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
            {
                title: "1. Razón y Proporción",
                icon: "fas fa-balance-scale",
                theory: "Una <strong>razón</strong> es una comparación entre dos cantidades (ej. 2:3). Una <strong>proporción</strong> es una igualdad entre dos razones (ej. 2/3 = 4/6). En una proporción, el producto de los extremos es igual al producto de los medios (producto cruzado).",
                examples: [
                    {
                        problem: "En un salón de clases, la razón de chicos a chicas es de 3 a 4. Si hay 12 chicos, ¿cuántas chicas hay?",
                        solution: "16 chicas",
                        steps: [
                            { step: 1, explanation: "Establece la proporción: 3/4 = 12/x, donde x es el número de chicas." },
                            { step: 2, explanation: "Aplica el producto cruzado: 3 * x = 4 * 12." },
                            { step: 3, explanation: "Resuelve la ecuación: 3x = 48  => x = 48 / 3 => x = 16." },
                        ]
                    }
                ]
            },
            {
                title: "2. Regla de Tres",
                icon: "fas fa-exchange-alt",
                theory: "La <strong>regla de tres</strong> es un método para resolver problemas de proporcionalidad. Si la relación es <strong>directa</strong> (a más, más), se multiplica en cruz. Si es <strong>inversa</strong> (a más, menos), se multiplica en línea.",
                examples: [
                    {
                        problem: "Si 5 obreros construyen un muro en 10 días, ¿cuánto tardarán 2 obreros? (Proporcionalidad Inversa)",
                        solution: "25 días",
                        steps: [
                            { step: 1, explanation: "A menos obreros, más días se tardará. Es una relación inversa." },
                            { step: 2, explanation: "Plantea la relación: 5 obreros -> 10 días, 2 obreros -> x días." },
                            { step: 3, explanation: "Multiplica en línea: 2 * x = 5 * 10." },
                            { step: 4, explanation: "Resuelve: 2x = 50 => x = 25." },
                        ]
                    }
                ]
            }
        ]
      },
      {
        title: "Unidad 5: Geometría",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
            {
                title: "1. Área y Perímetro",
                icon: "fas fa-ruler-combined",
                theory: "El <strong>perímetro</strong> es la medida del contorno de una figura plana. Se calcula sumando las longitudes de todos sus lados. El <strong>área</strong> es la medida de la superficie que ocupa la figura. Cada figura tiene su propia fórmula para el área (ej. rectángulo: base × altura).<br><br><i>[Visual: Un rectángulo con sus lados etiquetados 'base' y 'altura', y el interior sombreado para representar el área.]</i>",
                examples: [
                    {
                        problem: "Calcula el área y el perímetro de un rectángulo con lados de 5 cm y 8 cm.",
                        solution: "Perímetro = 26 cm, Área = 40 cm²",
                        steps: [
                            { step: 1, explanation: "Perímetro: Suma de todos los lados: 5 + 8 + 5 + 8 = 26 cm." },
                            { step: 2, explanation: "Área: Multiplica la base por la altura: 5 cm × 8 cm = 40 cm²." },
                        ]
                    }
                ]
            },
            {
                title: "2. Teorema de Pitágoras",
                icon: "fas fa-square",
                theory: "En todo triángulo rectángulo, el cuadrado de la longitud de la <strong>hipotenusa</strong> (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de las longitudes de los <strong>catetos</strong> (los dos lados que forman el ángulo recto). La fórmula es: <strong>a² + b² = c²</strong>.",
                examples: [
                    {
                        problem: "Un triángulo rectángulo tiene catetos que miden 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?",
                        solution: "10 cm",
                        steps: [
                            { step: 1, explanation: "Usa la fórmula: a² + b² = c²." },
                            { step: 2, explanation: "Sustituye los valores: 6² + 8² = c²." },
                            { step: 3, explanation: "Calcula los cuadrados: 36 + 64 = c²." },
                            { step: 4, explanation: "Suma: 100 = c². Saca la raíz cuadrada: c = √100 = 10." },
                        ]
                    }
                ]
            }
        ]
      },
      {
        title: "Unidad 6: Estadística y Probabilidad",
        videoUrl: "https://www.youtube.com/embed/ik23zvWMFyU",
        lessons: [
            {
                title: "1. Medidas de Tendencia Central",
                icon: "fas fa-chart-bar",
                theory: "Son valores que resumen un conjunto de datos en un solo número. Las más comunes son:<br><strong>Media:</strong> El promedio de todos los datos (suma total / cantidad de datos).<br><strong>Mediana:</strong> El valor central cuando los datos están ordenados.<br><strong>Moda:</strong> El valor que aparece con más frecuencia.",
                examples: [
                    {
                        problem: "Encuentra la media, mediana y moda de los datos: 2, 5, 2, 8, 3.",
                        solution: "Media: 4, Mediana: 3, Moda: 2",
                        steps: [
                            { step: 1, explanation: "Media: (2+5+2+8+3) / 5 = 20 / 5 = 4." },
                            { step: 2, explanation: "Mediana: Ordena los datos (2, 2, 3, 5, 8). El valor central es 3." },
                            { step: 3, explanation: "Moda: El número que más se repite es 2." },
                        ]
                    }
                ]
            },
            {
                title: "2. Probabilidad Básica",
                icon: "fas fa-dice",
                theory: "La probabilidad mide la posibilidad de que ocurra un evento. Se calcula como: <strong>P(evento) = (Número de resultados favorables) / (Número total de resultados posibles)</strong>. El resultado siempre está entre 0 (imposible) y 1 (seguro).",
                examples: [
                    {
                        problem: "¿Cuál es la probabilidad de sacar un número mayor que 4 al lanzar un dado de 6 caras?",
                        solution: "1/3",
                        steps: [
                            { step: 1, explanation: "Resultados favorables (mayores que 4): 5, 6. (Total: 2)" },
                            { step: 2, explanation: "Resultados totales posibles: 1, 2, 3, 4, 5, 6. (Total: 6)" },
                            { step: 3, explanation: "Calcula la probabilidad: P = 2 / 6." },
                            { step: 4, explanation: "Simplifica la fracción: 1/3." },
                        ]
                    }
                ]
            }
        ]
      },
    ],
  },
};
