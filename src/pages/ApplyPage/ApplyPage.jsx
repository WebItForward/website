import { useState } from "react";
import CoderApplication from "../../components/CoderApplication/CoderApplication";
import "./ApplyPage.css";
import { Switch, FormControlLabel } from "@mui/material";

export default function ApplyPage() {
  const [coder, setCoder] = useState(true);

  function handleSwitchChange() {
    setCoder(!coder);
  }

  return (
    <div className="apply-container">
      <h1>Apply Page</h1>
      <FormControlLabel
        control={<Switch checked={coder} onChange={handleSwitchChange} />}
        label="Label"
        style={{ float: "right" }}
      />
      {coder ? (
        <CoderApplication />
      ) : (
        <>
          <h2>Organizations</h2>
        </>
      )}
    </div>
  );
}
