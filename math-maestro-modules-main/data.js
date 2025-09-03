/**
 * Portal Académico - Data File
 *
 * This file programmatically generates the curriculum data for all grades and subjects.
 * It uses a template-based approach to ensure uniformity and automatically
 * generates predictable URLs for content files.
 *
 * To add your content, create HTML files that match the generated URLs.
 * For example, for the practice exercises in Spanish for 7th Grade,
 * the file should be named: 'g7-espanol-ejercicios.html'
 */

// --- TEMPLATES ---

// Define the subjects that will be available for every grade.
const subjectTemplate = [
  {
    id: "espanol",
    name: "Español",
    description: "Comprensión lectora, gramática y literatura.",
    icon: "book",
  },
  {
    id: "ingles",
    name: "Inglés",
    description: "Vocabulario, gramática y habilidades de conversación.",
    icon: "language",
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    description: "Álgebra, geometría, y resolución de problemas.",
    icon: "calculator",
  },
  {
    id: "historia",
    name: "Historia",
    description: "Eventos mundiales, civilizaciones y figuras históricas.",
    icon: "landmark",
  },
  {
    id: "ciencia",
    name: "Ciencia",
    description: "Biología, química, física y el método científico.",
    icon: "flask",
  },
  {
    id: "Inteligencia Artificial",
    name: "Inteligencia Artificial",
    description: "Prompts,herramientas,aplicaciones y ética de la IA.",
    icon: "robot",
  },
];

// --- DATA GENERATION ---

/**
 * Generates the full curriculum for all grades based on the templates.
 * @returns {Array} The complete academicCurriculum array.
 */
const generateCurriculum = () => {
  const grades = [
    {
      id: 7,
      name: "7mo",
      displayName: "Séptimo Grado",
      description: "Fundamentos académicos.",
      icon: "star",
    },
    {
      id: 8,
      name: "8vo",
      displayName: "Octavo Grado",
      description: "Conocimientos intermedios.",
      icon: "rocket",
    },
    {
      id: 9,
      name: "9no",
      displayName: "Noveno Grado",
      description: "Educación media.",
      icon: "graduation-cap",
    },
    {
      id: 10,
      name: "10mo",
      displayName: "Décimo Grado",
      description: "Educación media superior.",
      icon: "medal",
    },
    {
      id: 11,
      name: "11mo",
      displayName: "Undécimo Grado",
      description: "Preparación pre-universitaria.",
      icon: "lightbulb",
    },
    {
      id: 12,
      name: "12mo",
      displayName: "Duodécimo Grado",
      description: "Estudios avanzados.",
      icon: "crown",
    },
  ];

  return grades.map((grade) => {
    // For each grade, create a deep copy of the subject templates
    const subjectsForGrade = JSON.parse(JSON.stringify(subjectTemplate));

    subjectsForGrade.forEach((subject) => {
      // Create a unique ID for the subject based on the grade
      subject.id = `g${grade.id}-${subject.id}`; // e.g., g7-espanol

      // Generate URLs that point to the generic pages and include the
      // module identifier as a query parameter so the existing
      // `estudiar.html`, `ejercicios.html` and `examen.html` pages can be used.
      // Example: ejercicios.html?module=g7-matematicas
      const encodedId = encodeURIComponent(subject.id);
      subject.exerciseUrl = `ejercicios.html?module=${encodedId}`;
      subject.studyUrl = `estudiar.html?module=${encodedId}`;
      subject.examUrl = `examen.html?module=${encodedId}`;
    });

    return {
      id: `grade-${grade.id}`,
      name: grade.name,
      displayName: grade.displayName,
      description: grade.description,
      icon: grade.icon,
      subjects: subjectsForGrade,
    };
  });
};

// Generate and expose the final curriculum data
const academicCurriculum = generateCurriculum();
