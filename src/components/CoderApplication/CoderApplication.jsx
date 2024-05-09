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
      JS: false,
      Python: false,
      Java: false,
      Go: false,
      Ruby: false,
      Swift: false,
      Rust: false,
      Kotlin: false,
      C: false,
      Other: false,
    },
    backend: {
      Django: false,
      Express: false,
      Flask: false,
      Laravel: false,
      Other: false,
    },
    databases: {
      MySQL: false,
      PostgreSQL: false,
      SQLite: false,
      MongoDB: false,
      Other: false,
    },
    spokenLanguages: {
      English: false,
      Spanish: false,
      Russian: false,
      Mandarin: false,
      Cantonese: false,
      Vietnamese: false,
      Portugese: false,
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
          <div>
            <div>
              <label>C (All)</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Go</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Java</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Javascript</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Kotlin</label>
              <input type="checkbox" />
            </div>
            <div>
              <label></label>
              <input type="checkbox" />
            </div>
            <div>
              <label></label>
              <input type="checkbox" />
            </div>
            <div>
              <label></label>
              <input type="checkbox" />
            </div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
}
