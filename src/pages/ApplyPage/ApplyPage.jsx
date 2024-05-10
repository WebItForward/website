import { useState } from "react";
import CoderApplication from "../../components/CoderApplication/CoderApplication";
import "./ApplyPage.css";
import {
  Box,
  Container,
  Card,
  Paper,
  Typography,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Join from "../../images/join.jpg";
import Partner from "../../images/partner.png";
import Donate from "../../images/donate.jpeg";

export default function ApplyPage() {
  const [coder, setCoder] = useState(true);

  function handleSwitchChange() {
    setCoder(!coder);
  }

  return (
    <Container className="apply-container" style={{ marginTop: "5rem" }}>
      <Box>
        <Card>
          <Paper
            style={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Join the Team</Typography>
            <CardContent style={{ textAlign: "justify", padding: "5rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img src={Join} alt="..." style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={8}>
                  <p>
                    We are currently recruiting talented individuals to help
                    with all aspects of our technology organization. From
                    software engineers to innovative marketers, of all levels,
                    are welcome to apply. Web It Forward welcomes anyone who
                    wants to be apart of an organization that truly helps those
                    in need.
                  </p>
                  <p>
                    Weather you're a seasoned pro or learning a new trade, you
                    can grow your talents while helping others. Real world
                    experience coupled with real mentors to add to your resume.
                  </p>
                </Grid>
              </Grid>
              <Button>Join</Button>
            </CardContent>
          </Paper>
        </Card>
        <Card style={{ margin: "5rem" }}>
          <Paper
            style={{
              height: "40rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Become A Partner</Typography>
            <Grid container>
              <Grid item xs={4}>
                <img src={Partner} alt="..." style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={8} style={{ textAlign: "justify" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia praesentium quod, corporis harum inventore atque,
                  facilis voluptate, voluptatem iusto ad culpa nulla deleniti
                  assumenda ut! Sequi culpa dolor sint modi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  vitae quibusdam tempora, voluptates et ipsam quod labore ad
                  veniam nobis aperiam consequatur. Cum delectus sequi maxime
                  reprehenderit mollitia nobis error.
                </p>
              </Grid>
            </Grid>
            <Button>Partner</Button>
          </Paper>
        </Card>
        <Card style={{ margin: "5rem" }}>
          <Paper>
            <Typography variant="h4">Donate</Typography>
            <Grid container style={{ display: "flex", flexDirection: "row" }}>
              <Grid item xs={4}>
                <img src={Donate} alt="..." style={{ width: "100%" }} />
              </Grid>
              <Grid
                item
                xs={8}
                style={{
                  padding: "3rem",
                  textAlign: "justify",
                }}
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis sed molestias fuga delectus quibusdam a unde maiores
                  provident officiis fugiat commodi, odio nostrum error optio
                  magni accusamus dolore totam rem! Quisquam, a illo. Odit
                  laboriosam reprehenderit dicta eligendi, nihil exercitationem
                  mollitia et assumenda temporibus beatae consectetur culpa
                  incidunt reiciendis dolor ab? Dolores, optio ab odio deserunt
                  officia consequuntur voluptas tempora!
                </p>
              </Grid>
            </Grid>
            <Button>Donate</Button>
          </Paper>
        </Card>
      </Box>
    </Container>
  );
}
