import { Box, Divider, Typography } from "@mui/material";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";

const AskFriends = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 5rem",
        }}
      >
        <Typography variant="sectionTitle">Ask My</Typography>
        <Typography variant="sectionTitle">- colleagues</Typography>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            mt: 1,
          }}
        />
      </Box>
      <TestimonialCarousel />
    </div>
  );
};

export default AskFriends;
