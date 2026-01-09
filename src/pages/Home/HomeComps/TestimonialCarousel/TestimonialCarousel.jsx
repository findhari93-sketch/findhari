import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Images
import Rengaraj from "../../../../assets/images/recommendatiion/vai-dad.png";
import Fahim from "../../../../assets/images/recommendatiion/fahim.png";
import Rehan from "../../../../assets/images/recommendatiion/rehan.png";
import terila from "../../../../assets/images/recommendatiion/terila.png";
import adharsh from "../../../../assets/images/recommendatiion/adharsh.png";
import ragun from "../../../../assets/images/recommendatiion/ragun.png";
import push from "../../../../assets/images/recommendatiion/push.png";

// Testimonial data
const testimonials = [
  {
    name: "Rengarajan",
    title: "Co-Founder & CEO, Librari",
    image: Rengaraj,
    linkedin: "https://www.linkedin.com/in/rengarajanm/",
    quote: `My son Vaishnav R. is a student of Neram Classes. He feels it a really enjoyable course, which truly succeeds in introducing him to the world of architecture. I would recommend this course to anyone who wants to pursue architecture.`,
  },
  {
    name: "Fahim Jalal",
    title: "Project Professional, PTW",
    image: Fahim,
    linkedin: "https://www.linkedin.com/in/fahim-jalal-b1420474/",
    quote: `Incredibly driven. That's the first thing one would notice after a quick conversation with Hari. His work ethic has been quite motivating. His scheduling and prioritisation skills have helped our project teams through difficult deadlines.`,
  },
  {
    name: "Rehan Ahmed",
    title: "Studio Director, Abacus Design",
    image: Rehan,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `Haribabu has outstanding expertise with computer design softwares and areas such as Architectural design and UI/UX design. He is a highly efficient business manager & Teacher. I can highly recommend Hari for your projects.`,
  },
  {
    name: "Terila",
    title: "Design Consultant",
    image: terila,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `Working with Hari has been an absolute pleasure. His attention to detail and creative problem-solving abilities make him stand out. He brings fresh perspectives to every project and his dedication to quality is unmatched.`,
  },
  {
    name: "Adarsh Simon",
    title: "Design Engineer, Robotics",
    image: adharsh,
    linkedin: "https://www.linkedin.com/in/adarsh-simon/",
    quote: `Talented artist with a keen eye for design, self motivated and highly ambitious. He is brilliant at identifying design impact on user response and thinking out of the box to solve problems in a creative way.`,
  },
  {
    name: "Ragun",
    title: "Senior Architect",
    image: ragun,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `Hari's architectural understanding combined with his technical skills creates a unique blend that's rare to find. His ability to translate complex ideas into visual narratives is exceptional. A true professional.`,
  },
  {
    name: "Push",
    title: "Creative Director",
    image: push,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `I've had the pleasure of collaborating with Hari on several creative projects. His innovative approach and technical expertise make him an invaluable team member. He consistently delivers high-quality work.`,
  },
];

const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 250);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 250);
  }, [isAnimating]);

  const handleDotClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    setDirection(index > activeIndex ? "next" : "prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 250);
  };

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isAnimating, handleNext]);

  const active = testimonials[activeIndex];

  // Get visible thumbnails
  const getVisibleThumbnails = () => {
    const count = isMobile ? 3 : 7;
    const half = Math.floor(count / 2);
    const thumbnails = [];

    for (let i = -half; i <= half; i++) {
      let index = activeIndex + i;
      if (index < 0) index = testimonials.length + index;
      if (index >= testimonials.length) index = index - testimonials.length;
      thumbnails.push({
        ...testimonials[index],
        originalIndex: index,
        position: i,
      });
    }
    return thumbnails;
  };

  const thumbnails = getVisibleThumbnails();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 4 },
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: { xs: "10px", md: "11px" },
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          mb: 0.5,
        }}
      >
        Testimonials
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: { xs: "22px", md: "28px" },
          fontWeight: 600,
          mb: { xs: 3, md: 4 },
          letterSpacing: "-0.3px",
        }}
      >
        What People Say
      </Typography>

      {/* Thumbnail Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1.5, md: 2.5 },
          mb: { xs: 3, md: 4 },
          position: "relative",
        }}
      >
        {thumbnails.map((person) => {
          const isActive = person.position === 0;
          const distance = Math.abs(person.position);

          return (
            <Box
              key={person.originalIndex}
              onClick={() => handleDotClick(person.originalIndex)}
              sx={{
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isActive
                  ? "scale(1) translateY(-4px)"
                  : `scale(${1 - distance * 0.08})`,
                opacity: isActive ? 1 : Math.max(0.35, 0.75 - distance * 0.12),
                zIndex: isActive ? 10 : 5 - distance,
              }}
            >
              <Avatar
                src={person.image}
                alt={person.name}
                sx={{
                  width: isActive
                    ? { xs: 64, md: 80 }
                    : { xs: 44, md: 56 },
                  height: isActive
                    ? { xs: 64, md: 80 }
                    : { xs: 44, md: 56 },
                  border: isActive
                    ? "3px solid white"
                    : "2px solid rgba(255,255,255,0.2)",
                  boxShadow: isActive
                    ? "0 8px 28px rgba(0,0,0,0.3)"
                    : "0 3px 12px rgba(0,0,0,0.15)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    border: isActive
                      ? "3px solid white"
                      : "2px solid rgba(255,255,255,0.5)",
                    transform: "translateY(-3px)",
                  },
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: "100%", sm: "580px", md: "900px", lg: "1000px" },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navigation Arrow - Left */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: { xs: "absolute", md: "relative" },
            left: { xs: 0, md: "auto" },
            mr: { xs: 0, md: 2 },
            color: "white",
            bgcolor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            zIndex: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.12)",
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: 22, md: 26 } }} />
        </IconButton>

        {/* Testimonial Card */}
        <Box
          sx={{
            flex: 1,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(16px)",
            borderRadius: { xs: "16px", md: "20px" },
            padding: { xs: "24px 20px", md: "32px 48px" },
            border: "1px solid rgba(255,255,255,0.12)",
            position: "relative",
            overflow: "hidden",
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? direction === "next"
                ? "translateX(30px)"
                : "translateX(-30px)"
              : "translateX(0)",
            transition: "all 0.25s ease-out",
          }}
        >
          {/* Decorative Quote Icon */}
          <FormatQuoteIcon
            sx={{
              position: "absolute",
              top: { xs: 12, md: 20 },
              left: { xs: 12, md: 28 },
              fontSize: { xs: 28, md: 40 },
              color: "rgba(255,255,255,0.06)",
              transform: "rotate(180deg)",
            }}
          />

          {/* Quote Text */}
          <Typography
            sx={{
              fontFamily: "Kalam, cursive",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              mb: { xs: 2.5, md: 3 },
              position: "relative",
              zIndex: 1,
              px: { xs: 1, md: 3 },
            }}
          >
            "{active.quote}"
          </Typography>

          {/* Author Info - Compact Horizontal Layout */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1.5, md: 2 },
              pt: { xs: 2, md: 2.5 },
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Avatar
              src={active.image}
              alt={active.name}
              sx={{
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "14px", md: "15px" },
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {active.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: { xs: "11px", md: "12px" },
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.3,
                }}
              >
                {active.title}
              </Typography>
            </Box>
            <IconButton
              component={Link}
              href={active.linkedin}
              target="_blank"
              rel="noopener"
              sx={{
                bgcolor: "#0077b5",
                color: "#fff",
                width: { xs: 28, md: 32 },
                height: { xs: 28, md: 32 },
                ml: 0.5,
                "&:hover": {
                  bgcolor: "#005582",
                },
                transition: "all 0.2s ease",
              }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: 14, md: 16 } }} />
            </IconButton>
          </Box>
        </Box>

        {/* Navigation Arrow - Right */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: { xs: "absolute", md: "relative" },
            right: { xs: 0, md: "auto" },
            ml: { xs: 0, md: 2 },
            color: "white",
            bgcolor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            zIndex: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.12)",
            },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: 22, md: 26 } }} />
        </IconButton>
      </Box>

      {/* Dot Indicators */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: { xs: 3, md: 4 },
        }}
      >
        {testimonials.map((_, i) => (
          <Box
            key={i}
            onClick={() => handleDotClick(i)}
            sx={{
              width: i === activeIndex ? 24 : 8,
              height: 8,
              borderRadius: "4px",
              bgcolor:
                i === activeIndex
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor:
                  i === activeIndex
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.4)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
