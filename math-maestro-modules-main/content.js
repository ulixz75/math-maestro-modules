const contentData = {
  "g7-matematicas": {
    title: "Matemáticas de 7mo Grado",
    units: [
      {
        title: "Unidad 1: Los Números Enteros",
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
              {
                problem:
                  "Un buzo está a 20 metros de profundidad. Si el nivel del mar es 0, ¿cuál es su posición?",
                solution: "-20m",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "El nivel del mar es el punto de referencia (0).",
                  },
                  {
                    step: 2,
                    explanation:
                      "La profundidad está por debajo del punto de referencia, por lo que es negativa.",
                  },
                  {
                    step: 3,
                    explanation: "La posición se representa como -20 metros.",
                  },
                ],
              },
            ],
          },
          {
            title: "2. ¿Qué son los Números Enteros?",
            icon: "fas fa-infinity",
            theory:
              "El conjunto de los números enteros, representado por la letra Z, abarca todos los números naturales (enteros positivos), sus opuestos negativos y el cero. Este conjunto nos permite trabajar con cantidades exactas, sin decimales ni fracciones.",
            examples: [
              {
                problem:
                  "Clasifica los siguientes números: -10, 3.5, 7, 0, -1/2.",
                solution: "Enteros: -10, 7, 0. No enteros: 3.5, -1/2.",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "Revisa cada número. Los números enteros no pueden tener decimales ni ser fracciones.",
                  },
                  {
                    step: 2,
                    explanation:
                      "-10 es un entero negativo. 7 es un entero positivo. 0 es un entero.",
                  },
                  {
                    step: 3,
                    explanation:
                      "3.5 tiene una parte decimal, por lo que no es entero. -1/2 es una fracción, por lo que no es un entero.",
                  },
                ],
              },
            ],
          },
          {
            title: "3. Valor Absoluto",
            icon: "fas fa-compress-arrows-alt",
            theory:
              "El valor absoluto de un número es su distancia al cero en la recta numérica. Siempre es un valor no negativo. Se denota con barras verticales: |x|.",
            examples: [
              {
                problem: "Calcula el valor absoluto de -9.",
                solution: "|-9| = 9",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "Imagina la recta numérica. La distancia desde -9 hasta 0 es de 9 unidades.",
                  },
                  {
                    step: 2,
                    explanation:
                      "El valor absoluto ignora el signo. Por lo tanto, |-9| es simplemente 9.",
                  },
                ],
              },
              {
                problem: "Encuentra el valor de |15| + |-3|.",
                solution: "18",
                steps: [
                  {
                    step: 1,
                    explanation: "Calcula cada valor absoluto por separado.",
                  },
                  {
                    step: 2,
                    explanation: "|15| es 15. |-3| es 3.",
                  },
                  {
                    step: 3,
                    explanation: "Suma los resultados: 15 + 3 = 18.",
                  },
                ],
              },
            ],
          },
          {
            title: "4. Orden en los Números Enteros",
            icon: "fas fa-sort-numeric-up",
            theory:
              "Los números enteros se ordenan en la recta numérica. Un número a la derecha siempre es mayor que un número a su izquierda. Esto significa que cualquier número positivo es mayor que cualquier número negativo, y para los negativos, el que está más cerca del cero es el mayor (ej. -1 > -10).",
            examples: [
              {
                problem: "Ordena de menor a mayor: -8, 3, -1, 0, -12, 5.",
                solution: "-12, -8, -1, 0, 3, 5",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "Primero, identifica los números negativos: -8, -1, -12. El 'más negativo' (más a la izquierda en la recta) es el menor. Por lo tanto, -12 es el más pequeño, seguido de -8, y luego -1.",
                  },
                  {
                    step: 2,
                    explanation: "El siguiente número es el cero.",
                  },
                  {
                    step: 3,
                    explanation:
                      "Finalmente, ordena los números positivos: 3 y 5. El menor es 3, seguido de 5.",
                  },
                  {
                    step: 4,
                    explanation:
                      "Une las secuencias: -12, -8, -1, 0, 3, 5.",
                  },
                ],
              },
            ],
          },
          {
            title: "5. El Plano Cartesiano",
            icon: "fas fa-th",
            theory:
              "El plano cartesiano es un sistema de coordenadas bidimensional formado por dos rectas numéricas perpendiculares, el eje X (horizontal) y el eje Y (vertical), que se cruzan en el origen (0,0). Permite localizar puntos mediante pares ordenados (x, y).",
            examples: [
              {
                problem:
                  "Ubica el punto P(-3, 2) en el plano cartesiano.",
                solution:
                  "El punto P se encuentra 3 unidades a la izquierda del origen y 2 unidades hacia arriba.",
                steps: [
                  {
                    step: 1,
                    explanation:
                      "El primer número del par (-3) es la coordenada X. Al ser negativo, muévete 3 unidades a la izquierda desde el origen (0,0).",
                  },
                  {
                    step: 2,
                    explanation:
                      "El segundo número (2) es la coordenada Y. Al ser positivo, muévete 2 unidades hacia arriba desde tu posición en el eje X.",
                  },
                  {
                    step: 3,
                    explanation:
                      "El punto donde aterrizas es la ubicación de P(-3, 2).",
                  },
                ],
              },
            ],
          },
        ],
      },
      // Unidades 2-6 con contenido breve para mantener la estructura
      {
        title: "Unidad 2: Operaciones con Números Enteros",
        lessons: [
          { title: "1. Adición y Sustracción", content: "Contenido pendiente." },
          { title: "2. Multiplicación y División", content: "Contenido pendiente." },
          { title: "3. Potenciación y Radicación", content: "Contenido pendiente." },
        ],
      },
      {
        title: "Unidad 3: Números Racionales",
        lessons: [
          { title: "1. ¿Qué es un Número Racional?", content: "Contenido pendiente." },
          { title: "2. Operaciones con Racionales", content: "Contenido pendiente." },
        ],
      },
      {
        title: "Unidad 4: Proporcionalidad",
        lessons: [
          { title: "1. Razón y Proporción", content: "Contenido pendiente." },
          { title: "2. Regla de Tres", content: "Contenido pendiente." },
        ],
      },
      {
        title: "Unidad 5: Geometría",
        lessons: [
          { title: "1. Figuras Planas y Sólidos", content: "Contenido pendiente." },
          { title: "2. Perímetro, Área y Volumen", content: "Contenido pendiente." },
        ],
      },
      {
        title: "Unidad 6: Estadística y Probabilidad",
        lessons: [
          { title: "1. Recolección de Datos", content: "Contenido pendiente." },
          { title: "2. Medidas de Tendencia Central", content: "Contenido pendiente." },
        ],
      },
    ],
  },
};
