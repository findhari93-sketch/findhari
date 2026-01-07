import React from "react";
import { Box, Typography } from "@mui/material";

const SectionTextContent = ({
  titleBefore,
  titleAfter,
  description,
  variant = "hero", // default
}) => {
  return (
    <Box>
      <Typography variant="sectionTitle" gutterBottom>
        <span style={{ paddingRight: "5rem" }}>{titleBefore}</span>
        <br />
        <span>- {titleAfter}</span>
      </Typography>

      <Box
        sx={{
          borderBottom: "1px solid #ffffff7a",
          mb: 2,
          width: "100%",
          marginBottom: "3rem",
        }}
      />

      <Typography variant="sectionContent">{description}</Typography>
    </Box>
  );
};

export default SectionTextContent;
