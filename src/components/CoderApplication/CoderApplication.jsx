import { useState } from "react";
import "./CoderApplication.css";

export default function CoderApplication() {
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    githubUrl: "",
    linkedInUrl: "",
    programingLanguages: {
      C: false,
      Go: false,
      Java: false,
      JS: false,
      Kotlin: false,
      Other: false,
      Python: false,
      Ruby: false,
      Rust: false,
      Swift: false,
    },
    backend: {
      Django: false,
      Express: false,
      Flask: false,
      Laravel: false,
      Other: false,
    },
    databases: {
      MongoDB: false,
      MySQL: false,
      Other: false,
      PostgreSQL: false,
      SQLite: false,
    },
    spokenLanguages: {
      Cantonese: false,
      English: false,
      Mandarin: false,
      Portugese: false,
      Russian: false,
      Spanish: false,
      Vietnamese: false,
    },
  });

  function handleProgramingLanguageChange(evt) {
    const { name, checked } = evt.target;
    setApplicationData((prevState) => ({
      ...prevState,
      programingLanguages: {
        ...prevState.programingLanguages,
        [name]: checked,
      },
    }));
  }

  function handleBackendChange(evt) {
    const { name, checked } = evt.target;
    setApplicationData((prevState) => ({
      ...prevState,
      backend: {
        ...prevState.backend,
        [name]: checked,
      },
    }));
  }

  function handleDatabaseChnage(evt) {
    const { name, checked } = evt.target;
    setApplicationData((prevState) => ({
      ...prevState,
      databases: {
        ...prevState.databases,
        [name]: checked,
      },
    }));
  }

  function handleSpokenLangaugeChange(evt) {
    const { name, checked } = evt.target;
    setApplicationData((prevState) => ({
      ...prevState,
      spokenLanguages: {
        ...prevState.spokenLanguages,
        [name]: checked,
      },
    }));
  }

  function handleSave(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <h1>Coder Application</h1>
      <fieldset>
        <form onSubmit={handleSave}>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>GitHub</label>
            <input type="text" />
          </div>
          <div>
            <label>LinkedIn</label>
            <input type="text" />
          </div>
          <div className="programing-languages-container">
            <div className="programing-languages-container-item">
              <label>C (All)</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Go</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Java</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Javascript</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Kotlin</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Other</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Python</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Ruby</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Rust</label>
              <input type="checkbox" />
            </div>
            <div className="programing-languages-container-item">
              <label>Swift</label>
              <input type="checkbox" />
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
}
