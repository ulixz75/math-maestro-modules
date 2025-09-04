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

    // Improved back button with clearer text
    const backButton = document.createElement("button");
    backButton.className = "back-button";
    let backText = "Grados"; // Default
    if (backView === "subjects") {
      backText = `Materias de ${selectedGrade.name}`;
    }
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

  const createCard = (title, description, icon, onClick) => {
    const card = document.createElement("div");
    card.className = "card";
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
        () => navigateTo("subjects", grade.id)
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

    // Programmatically create action buttons for better event handling
    const description = document.createElement("p");
    description.textContent = selectedSubject.description;
    detailContainer.appendChild(description);

    const actionsContainer = document.createElement("div");
    actionsContainer.className = "action-buttons";

    const actions = [
      {
        title: "Estudiar Temas",
        subtitle: "Revisa el material de estudio",
        icon: "book-open",
        url: selectedSubject.studyUrl,
        className: "study",
      },
      {
        title: "Ejercicios de Práctica",
        subtitle: "Pon a prueba tus conocimientos",
        icon: "pen-to-square",
        url: selectedSubject.exerciseUrl,
        className: "exercise",
      },
      {
        title: "Exámenes de Práctica",
        subtitle: "Evalúa tu aprendizaje",
        icon: "file-alt",
        url: selectedSubject.examUrl,
        className: "exam",
      },
    ];

    actions.forEach((action) => {
      const button = document.createElement("div");
      button.className = `action-button ${action.className}`;
      button.innerHTML = `
              <i class="fas fa-${action.icon}"></i>
              <h4>${action.title}</h4>
              <span>${action.subtitle}</span>
          `;
      button.addEventListener("click", () => {
        window.location.href = action.url;
      });
      actionsContainer.appendChild(button);
    });

    detailContainer.appendChild(actionsContainer);
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
