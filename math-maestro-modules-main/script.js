document.addEventListener("DOMContentLoaded", () => {
  // --- STATE MANAGEMENT ---
  let currentView = "grades";
  let selectedGrade = null;
  let selectedSubject = null;

  // --- DOM REFERENCES ---
  const appContainer = document.getElementById("app-container");

  // The `academicCurriculum` variable is available globally from data.js

  // --- NAVIGATION HANDLERS ---
  const navigateTo = (view, gradeId, subjectId) => {
    currentView = view;
    if (gradeId) {
      selectedGrade = academicCurriculum.find((g) => g.id === gradeId);
    }
    if (subjectId) {
      selectedSubject = selectedGrade.subjects.find((s) => s.id === subjectId);
    }

    // Reset state when navigating up the hierarchy
    if (view === "grades") {
      selectedGrade = null;
      selectedSubject = null;
    } else if (view === "subjects") {
      selectedSubject = null;
    }

    render();
  };

  // --- RENDER HELPERS ---
  const createHeader = (title, subtitle, backView) => {
    const header = document.createElement("div");
    header.className = "header";

    const backButton = document.createElement("button");
    backButton.className = "back-button";
    const backText = backView === "grades" ? "Grados" : "Materias";
    backButton.innerHTML = `<i class="fas fa-arrow-left"></i> Volver a ${backText}`;
    backButton.addEventListener("click", () =>
      navigateTo(backView, selectedGrade?.id)
    );

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "title-wrapper";
    titleWrapper.innerHTML = `
            <h1>${title}</h1>
            <p class="subtitle">${subtitle}</p>
        `;

    header.appendChild(backButton);
    header.appendChild(titleWrapper);
    return header;
  };

  const createCard = (title, description, icon, onClick, gradeClass = "") => {
    const card = document.createElement("div");
    card.className = `card ${gradeClass}`;
    card.innerHTML = `
            <div class="card-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
        `;
    card.addEventListener("click", onClick);
    return card;
  };

  // --- VIEW RENDERERS ---
  const renderGrades = () => {
    appContainer.innerHTML = `
            <div class="hero">
                <h1><i class="fas fa-graduation-cap"></i>NABORI Corp  Portal Académico</h1>
                <p>Tu centro de recursos de aprendizaje, desde 7mo hasta 12mo grado.</p>
            </div>
            <h2>Selecciona tu Grado Escolar</h2>
        `;
    const grid = document.createElement("div");
    grid.className = "grid";
    academicCurriculum.forEach((grade) => {
      const card = createCard(
        grade.displayName,
        grade.description,
        grade.icon,
        () => navigateTo("subjects", grade.id),
        `grade-${grade.id}`
      );
      grid.appendChild(card);
    });
    appContainer.appendChild(grid);
  };

  const renderSubjects = () => {
    const header = createHeader(
      `<i class="fas fa-${selectedGrade.icon}"></i> ${selectedGrade.displayName}`,
      "Selecciona una materia",
      "grades"
    );
    const grid = document.createElement("div");
    grid.className = "grid";
    selectedGrade.subjects.forEach((subject) => {
      const card = createCard(
        subject.name,
        subject.description,
        subject.icon,
        () => navigateTo("subject-detail", selectedGrade.id, subject.id)
      );
      grid.appendChild(card);
    });
    appContainer.appendChild(header);
    appContainer.appendChild(grid);
  };

  const renderSubjectDetail = () => {
    const header = createHeader(
      `<i class="fas fa-${selectedSubject.icon}"></i> ${selectedSubject.name}`,
      selectedGrade.displayName,
      "subjects"
    );
    const detailContainer = document.createElement("div");
    detailContainer.className = "module-detail";

    detailContainer.innerHTML = `
            <p>${selectedSubject.description}</p>
            <div class="action-buttons">
                <div class="action-button study" onclick="window.location.href='${selectedSubject.studyUrl}'">
                    <i class="fas fa-book-open"></i>
                    <h4>Estudiar Temas</h4>
                    <span>Revisa el material de estudio</span>
                </div>
                <div class="action-button" onclick="window.location.href='${selectedSubject.exerciseUrl}'">
                    <i class="fas fa-pen-to-square"></i>
                    <h4>Ejercicios de Práctica</h4>
                    <span>Pon a prueba tus conocimientos</span>
                </div>
                <div class="action-button exam" onclick="window.location.href='${selectedSubject.examUrl}'">
                    <i class="fas fa-file-alt"></i>
                    <h4>Exámenes de Práctica</h4>
                    <span>Evalúa tu aprendizaje</span>
                </div>
            </div>
        `;
    appContainer.appendChild(header);
    appContainer.appendChild(detailContainer);
  };

  // --- MAIN RENDERER ---
  const render = () => {
    appContainer.innerHTML = ""; // Clear the container
    switch (currentView) {
      case "grades":
        renderGrades();
        break;
      case "subjects":
        renderSubjects();
        break;
      case "subject-detail":
        renderSubjectDetail();
        break;
      default:
        renderGrades();
    }
  };

  // --- INITIALIZATION ---
  render();
});
