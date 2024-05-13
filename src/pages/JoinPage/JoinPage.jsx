import { useState } from "react";
import CoderApplication from "../../components/CoderApplication/CoderApplication";
import "./JoinPage.css";
import { Box, Container, Paper, Button, Grid } from "@mui/material";
import Join from "../../images/join.jpg";
import Partner from "../../images/partner.png";
import Donate from "../../images/donate.jpeg";

export default function ApplyPage() {
  const [coder, setCoder] = useState(true);

  function handleSwitchChange() {
    setCoder(!coder);
  }

  return (
    <Container style={{ marginTop: "5rem" }}>
      <div
        style={{
          marginBottom: "2rem",
          border: "3px solid rgba(210, 210, 210, 0.25",
        }}
      >
        <Box>
          <Paper style={{ padding: "5rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={Join} alt="..." style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ textAlign: "justify", padding: "1.5rem" }}>
                  We are currently recruiting talented individuals (both paid &
                  volunteer) to help with all aspects of our organization. From
                  software engineers to innovative marketers, of all levels, are
                  welcome to apply. Web It Forward welcomes anyone who wants to
                  be apart of an organization that truly helps those in need.
                </p>
                <p style={{ textAlign: "justify", padding: "1.5rem" }}>
                  Weather you're a seasoned pro or learning a new trade, you can
                  grow your talents while helping others. Real world experience
                  coupled with real mentors to add to your resume.
                </p>
                <Button variant="outlined">Join</Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
      <div
        style={{
          marginBottom: "2rem",
          border: "3px solid rgba(210, 210, 210, 0.25",
        }}
      >
        <Box>
          <Paper style={{ padding: "5rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <h4>
                  Is your NPO looking to reach more of your target audience?
                </h4>
                <p style={{ textAlign: "justify" }}>
                  Let the amazing Web It Foward team bring your organization
                  into the fast-paced world of technlogy. Anything and
                  everything from web design, data analytics, marketing, and app
                  development to help your organization help others, more
                  efficiently.
                </p>
                <Button variant="outlined" style={{ marginTop: "2rem" }}>
                  Partner
                </Button>
              </Grid>
              <Grid item xs={4}>
                <img src={Partner} alt="..." style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
      <div
        style={{
          marginBlock: "2rem",
          border: "3px solid rgba(210, 210, 210, 0.25",
        }}
      >
        <Box>
          <Paper style={{ padding: "5rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={Donate} alt="..." style={{ width: "70%" }} />
              </Grid>
              <Grid item xs={8}>
                <h4>Web It Foward Survives By Donations</h4>
                <p style={{ textAlign: "justify" }}>
                  To bolster the creation and release of enterprise software
                  products in collaboration with Government and nonprofit
                  partners, we're streamlining our infrastructure and
                  procedures. This empowers Web It Forward to deliver top-tier
                  training to our members and produce valuable, scalable, and
                  impactful products for the community.
                </p>
                <Button variant="outlined" style={{ marginTop: "2rem" }}>
                  Donate
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </Container>
  );
}
