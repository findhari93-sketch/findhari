import React from "react";
import {
  Box,
  Typography,
  Link as MuiLink,
  Divider,
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
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#fff",
        pt: { xs: 6, md: 8 },
        bottom: "-30px",
      }}
    >
      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 2, md: 3 },
          position: "relative",
          top: "13px",
          zIndex: 0,
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Left group */}
        <Box sx={{ display: "flex", gap: { xs: 1.5, md: 2 }, pr: { xs: 3, md: 6 } }}>
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
        </Box>

        {/* Right group */}
        <Box sx={{ display: "flex", gap: { xs: 1.5, md: 2 }, pl: { xs: 3, md: 6 } }}>
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
        </Box>
      </Box>

      {/* Center Image */}
      <Box
        component="img"
        src={lucaStand}
        alt="Luca"
        sx={{
          width: { xs: "120px", md: "150px" },
          position: "absolute",
          top: { xs: "-120px", md: "-145px" },
          left: "50%",
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
        <Box sx={{ textAlign: "center", pt: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              fontFamily: "Kalam, cursive",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.7,
              fontStyle: "italic",
              maxWidth: { xs: "320px", md: "500px" },
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

          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 700,
              mt: { xs: 2, md: 3 },
            }}
          >
            #OpenToWork
          </Typography>
        </Box>

        {/* Bottom section */}
        <Box sx={{ mt: 2, pb: { xs: 2, md: 3 }, textAlign: "center" }}>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", my: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 1, sm: 0 },
              px: { xs: 2, md: 4 },
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: { xs: "12px", md: "13px" },
              }}
            >
              UX Engineer & Designer
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: { xs: "12px", md: "13px" },
              }}
            >
              © 2024 Haribabu. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
