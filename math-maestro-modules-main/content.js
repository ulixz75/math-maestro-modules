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
                problem: "Un termómetro marca 5 grados bajo cero. ¿Cómo se representa este valor como un número relativo?",
                solution: "-5°C",
                difficulty: "Fácil",
              },
              {
                problem: "Un buzo está a 20 metros bajo el nivel del mar. ¿Cuál es su posición relativa?",
                solution: "-20 m",
                difficulty: "Fácil",
              },
              {
                problem: "Juan tiene una deuda de $50. ¿Cómo se representa esta cantidad?",
                solution: "-$50",
                difficulty: "Fácil",
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
                solution: "9",
                difficulty: "Fácil",
              },
              {
                problem: "¿Cuál es el valor absoluto de |+15|?",
                solution: "15",
                difficulty: "Fácil",
              },
              {
                problem: "Encuentra el valor de |-100| + |20|.",
                solution: "120",
                difficulty: "Medio",
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
            theory: "Sumar y restar números enteros implica manejar sus signos. Las reglas son: <br><strong>Mismo Signo:</strong> Se suman los valores absolutos y se conserva el signo común. <br><strong>Diferente Signo:</strong> Se restan los valores absolutos (el mayor menos el menor) y se conserva el signo del número con mayor valor absoluto. <br><br><strong>Tip Clave:</strong> Restar un número es lo mismo que sumar su opuesto. Por ejemplo, <strong>a - b</strong> es igual a <strong>a + (-b)</strong>. Y <strong>a - (-b)</strong> es igual a <strong>a + b</strong>.",
            examples: [
              {
                problem: "Calcula (-12) + (-5).",
                solution: "-17",
                difficulty: "Fácil",
              },
              {
                problem: "Calcula 10 - 15.",
                solution: "-5",
                difficulty: "Fácil",
              },
              {
                problem: "Calcula (-8) - (-12).",
                solution: "4",
                difficulty: "Medio",
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
                difficulty: "Fácil",
              },
              {
                problem: "Calcula (-48) ÷ (-6).",
                solution: "8",
                difficulty: "Medio",
              },
              {
                problem: "Calcula (5) × (-3) × (-2).",
                solution: "30",
                difficulty: "Medio",
              },
            ]
          },
          {
            title: "3. Potenciación y Radicación",
            icon: "fas fa-square-root-alt",
            theory: "La <strong>potenciación</strong> es una forma abreviada de escribir una multiplicación de factores iguales. Se compone de una <strong>base</strong> y un <strong>exponente</strong>. <br><i>[Visual: a^n = a × a × ... × a (n veces)]</i><br>Al trabajar con bases negativas, el signo del resultado depende del exponente:<ul><li>Si el exponente es <strong>par</strong>, el resultado es <strong>positivo</strong>. Ej: (-2)⁴ = 16.</li><li>Si el exponente es <strong>impar</strong>, el resultado es <strong>negativo</strong>. Ej: (-2)³ = -8.</li></ul>La <strong>radicación</strong> es la operación inversa a la potenciación.",
            examples: [
              {
                problem: "Calcula (-3)⁴.",
                solution: "81",
                difficulty: "Medio",
              },
              {
                problem: "Calcula (-2)⁵.",
                solution: "-32",
                difficulty: "Medio",
              },
              {
                problem: "Encuentra la raíz cuadrada de 49.",
                solution: "7",
                difficulty: "Fácil",
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
                theory: "Un <strong>número racional</strong> es cualquier número que puede expresarse como una fracción <strong>a/b</strong>, donde 'a' (numerador) y 'b' (denominador) son enteros, y 'b' no es cero.",
                examples: [
                    {
                        problem: "Convierte la fracción 3/4 a decimal.",
                        solution: "0.75",
                        difficulty: "Fácil",
                    },
                    {
                        problem: "Convierte el decimal 0.8 a fracción.",
                        solution: "4/5",
                        difficulty: "Medio",
                    },
                ]
            },
            {
                title: "2. Operaciones con Racionales",
                icon: "fas fa-calculator",
                theory: "Las operaciones con fracciones requieren reglas específicas:<br><strong>Suma/Resta:</strong> Si tienen el mismo denominador, se suman/restan los numeradores. Si no, se busca un denominador común.<br><strong>Multiplicación:</strong> Se multiplican los numeradores entre sí y los denominadores entre sí.<br><strong>División:</strong> Se multiplica la primera fracción por el inverso de la segunda.",
                examples: [
                    {
                        problem: "Calcula (1/2) + (3/4).",
                        solution: "5/4",
                        difficulty: "Medio",
                    },
                    {
                        problem: "Calcula (2/3) × (5/7).",
                        solution: "10/21",
                        difficulty: "Medio",
                    },
                    {
                        problem: "Calcula (1/2) ÷ (1/4).",
                        solution: "2",
                        difficulty: "Difícil",
                    },
                ]
            }
        ]
      },
    ],
  },
};
