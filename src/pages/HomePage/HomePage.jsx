import { Box, Button, Card, CardContent, Container } from "@mui/material";
import MeetingImg from "../../images/meeting1.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <Container maxWidth="sm" className="homepage-container">
      <Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={MeetingImg}
          alt="..."
          style={{
            display: "block",
            height: "10%",
            width: "100vw",
          }}
        />
        <div className="homepage-text-overlay">
          <h1>Empowering Nonprofits - Amplifiying Impact</h1>
        </div>
        <div className="homepage-button-overlay">
          <Button component="button" variant="contained">
            Join
          </Button>
        </div>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "30rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2></h2>
        <Card sx={{ width: "50vw" }}>
          <CardContent>
            <p style={{ textAlign: "justify", padding: "2rem" }}>
              Our mission is to provide expert web design and app development
              services to nonprofit organizations and community groups, enabling
              them to enhance their online presence, streamline operations, and
              maximize their social impact. Through collaborative partnerships
              and tailored solutions, we strive to empower these organizations
              to better serve their communities, foster meaningful connections,
              and drive positive change in the world."
            </p>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
