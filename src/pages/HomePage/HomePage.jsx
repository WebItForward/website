import { Box, Container } from "@mui/material";
import MeetingImg from "../../images/meeting1.jpg";

export default function HomePage() {
  return (
    <Container maxWidth="sm" className="homepage-container">
      <Box
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
            width: "100vw",
          }}
        />
      </Box>
    </Container>
  );
}
