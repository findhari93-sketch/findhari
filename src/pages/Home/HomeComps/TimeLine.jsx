import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import EmploymentTimeline from "./EmploymentTimeline/EmpTimeline";

const TimeLine = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(-45deg, #fff3ef, #ffecf3, #effbff, #f0fffb)",
        backgroundSize: "400% 1000%",
        animation: "gradient 7s ease infinite",
        position: "relative",
        bottom: "-30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              textTransform: "uppercase",
              letterSpacing: { xs: "4px", md: "6px" },
              fontSize: { xs: "24px", md: "28px" },
              fontWeight: 500,
              color: "#333",
            }}
          >
            LifeTime
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              textTransform: "uppercase",
              letterSpacing: { xs: "4px", md: "6px" },
              fontSize: { xs: "24px", md: "28px" },
              fontWeight: 500,
              color: "#333",
            }}
          >
            - Line
          </Typography>
          <Divider
            sx={{
              borderColor: "rgba(0,0,0,0.1)",
              mt: 1.5,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ pb: { xs: 6, md: 8 } }}>
        <EmploymentTimeline />
      </Box>
      {/* <Box sx={{ paddingBottom: "12rem" }}>
        <EmploymentCard
          title="UX Designer"
          subtitle="Swat Systems"
          date="2023-06-15"
          imageUrl="https://source.unsplash.com/random/800x400?workplace"
          description="At Swat Systems, I worked on creating intuitive design systems and improved the user onboarding experience by 45% through user-centered design approaches and accessibility improvements."
        />
      </Box> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 180"
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,144C672,128,768,64,864,58.7C960,53,1056,107,1152,122.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default TimeLine;
