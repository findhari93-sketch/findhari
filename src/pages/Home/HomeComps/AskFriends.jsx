import { Box, Divider, Typography } from "@mui/material";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";

const AskFriends = () => {
  return (
    <section id="testimonials">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Ask My
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
                color: "#fff",
              }}
            >
              - Colleagues
            </Typography>
          </Box>
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              mb: { xs: 2, md: 3 },
            }}
          />
        </Box>
      </Box>
      <TestimonialCarousel />
    </section>
  );
};

export default AskFriends;
