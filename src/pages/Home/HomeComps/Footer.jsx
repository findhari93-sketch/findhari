import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  WhatsApp,
  GitHub,
} from "@mui/icons-material";

import lucaStand from "../../../assets/images/original-3.webp";

const brandColors = {
  Facebook: "#1877F2",
  LinkedIn: "#0A66C2",
  Instagram: "#E1306C",
  YouTube: "#FF0000",
  WhatsApp: "#25D366",
  GitHub: "#333",
};

const getBrandColor = (icon) => {
  if (icon.type === Facebook) return brandColors.Facebook;
  if (icon.type === LinkedIn) return brandColors.LinkedIn;
  if (icon.type === Instagram) return brandColors.Instagram;
  if (icon.type === YouTube) return brandColors.YouTube;
  if (icon.type === WhatsApp) return brandColors.WhatsApp;
  if (icon.type === GitHub) return brandColors.GitHub;
  return "#fff";
};

const socials = [
  { icon: <Facebook />, link: "https://www.facebook.com/harrybabu93" },
  { icon: <LinkedIn />, link: "https://www.linkedin.com/in/findhari/" },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/stay__foolish___/",
  },
  {
    icon: <YouTube />,
    link: "https://www.youtube.com/c/Neram/videos",
  },
  {
    icon: <WhatsApp />,
    link: "https://api.whatsapp.com/send?phone=918807437399&text=Hi! Hari, I saw your porfolio and would like to talk to you regarding that.",
  },
  { icon: <GitHub />, link: "https://github.com/harrybabu93" },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#fff",
        pt: 8,
        bottom: "-30px",
      }}
    >
      {/* Social Icons */}
      <Grid
        container
        justifyContent="center"
        sx={{ zIndex: 0, position: "relative", top: "13px" }}
      >
        {/* Left group */}
        <Grid item sx={{ display: "flex", gap: 2, paddingRight: "7rem" }}>
          {socials.slice(0, 3).map((social, index) => {
            const color = getBrandColor(social.icon);
            return (
              <MuiLink
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  display: "inline-block",
                }}
              >
                <Box
                  sx={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    color: color,
                    "&:hover": {
                      transform: "translateY(-20px) scale(1.2)",
                      textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                      boxShadow: `0 0 12px ${color}`,
                      animation: "shine 1.5s infinite alternate",
                      borderRadius: "5px",
                    },
                    "@keyframes shine": {
                      from: {
                        textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                      },
                      to: {
                        textShadow: `0 0 20px ${color}, 0 0 30px ${color}`,
                      },
                    },
                  }}
                >
                  {React.cloneElement(social.icon, { fontSize: "large" })}
                </Box>
              </MuiLink>
            );
          })}
        </Grid>

        {/* Right group */}
        <Grid item sx={{ display: "flex", gap: 2, paddingLeft: "7rem" }}>
          {socials.slice(3).map((social, index) => {
            const color = getBrandColor(social.icon);
            return (
              <MuiLink
                key={index + 3}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  display: "inline-block",
                }}
              >
                <Box
                  sx={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    color: color,
                    "&:hover": {
                      transform: "translateY(-20px) scale(1.2)",
                      textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                      boxShadow: `0 0 12px ${color}`,
                      animation: "shine 1.5s infinite alternate",
                      borderRadius: "5px",
                    },
                    "@keyframes shine": {
                      from: {
                        textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                      },
                      to: {
                        textShadow: `0 0 20px ${color}, 0 0 30px ${color}`,
                      },
                    },
                  }}
                >
                  {React.cloneElement(social.icon, { fontSize: "large" })}
                </Box>
              </MuiLink>
            );
          })}
        </Grid>
      </Grid>

      {/* Center Image */}
      <Box
        component="img"
        src={lucaStand}
        alt="Luca"
        sx={{
          width: "165px",
          position: "absolute",
          top: "-159px",
          left: "49%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          background:
            "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 1000%",
          animation: "gradient 7s ease infinite",
          color: "white",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Description */}
        <Box sx={{ textAlign: "center", pt: 4, px: 2 }}>
          <Typography
            variant="sectionContent"
            sx={{
              fontStyle: "italic",
              width: "39rem",
              mx: "auto",
              display: "block",
            }}
          >
            Dynamic and creative Designer with over 5 years of experience in
            Architectural design | Web UI Design | Content Creation for personal
            and private companies. Eager to work for a company where I can learn
            and be productive. For job offers Email:{" "}
            <MuiLink href="mailto:findhari93@gmail.com" color="inherit">
              findhari93@gmail.com
            </MuiLink>
          </Typography>

          <Typography variant="h4" sx={{ mt: 3, fontWeight: "bold" }}>
            #OpenToWork
          </Typography>
        </Box>

        {/* Bottom section */}
        <Box sx={{ mt: 2, pb: 3, textAlign: "center" }}>
          <Divider sx={{ bgcolor: "white", my: 2 }} />
          <Grid
            container
            justifyContent="space-between"
            sx={{ px: { xs: 2, md: 10 }, fontSize: 14 }}
          >
            <Grid item>Architect & Designer</Grid>
            <Grid item>© 2021 Haribabu. All rights reserved.</Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
