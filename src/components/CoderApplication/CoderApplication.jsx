import { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
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
      <Container>
        <Box>
          <fieldset>
            <form onSubmit={handleSave}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    variant="outlined"
                    label="First Name"
                    style={{ margin: "1rem", width: "50%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    style={{ margin: "1rem", width: "50%" }}
                  />
                </div>
              </div>
              <div sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  variant="outlined"
                  label="Email Address"
                  type="email"
                  sx={{ margin: "1rem", width: "50%" }}
                />
                <TextField
                  variant="outlined"
                  label="Phone Number"
                  type="text"
                  sx={{ margin: "1rem", width: "50%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <TextField
                    variant="outlined"
                    label="GitHub"
                    style={{ margin: "1rem", width: "50%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="LinkedIn"
                    style={{ margin: "1rem", width: "50%" }}
                  />
                </div>
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
              <div className="backend-container">
                <div className="backend-item">
                  <label>Django</label>
                  <input type="checkbox" />
                </div>
                <div className="backend-item">
                  <label>Express</label>
                  <input type="checkbox" />
                </div>
                <div className="backend-item">
                  <label>Flask</label>
                  <input type="checkbox" />
                </div>
                <div className="backend-item">
                  <label>Laravel</label>
                  <input type="checkbox" />
                </div>
                <div className="backend-item">
                  <label>Other</label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="databases-container">
                <div className="databases-item">
                  <label>MongoDB</label>
                  <input type="checkbox" />
                </div>
                <div className="databases-item">
                  <label>MySQL</label>
                  <input type="checkbox" />
                </div>
                <div className="databases-item">
                  <label>Other</label>
                  <input type="checkbox" />
                </div>
                <div className="databases-item">
                  <label>PostgreSQL</label>
                  <input type="checkbox" />
                </div>
                <div className="databases-item">
                  <label>SQLite</label>
                  <input type="checkbox" />
                </div>
              </div>
              <Button>Apply</Button>
            </form>
          </fieldset>
        </Box>
      </Container>
    </>
  );
}
