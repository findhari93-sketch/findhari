import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Link,
  Tooltip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
    title: "Co-Founder & CEO at Librari",
    image: Rengaraj,
    linkedin: "https://www.linkedin.com/in/rengarajanm/",
    quote: `My son Vaishnav R. is a student of Neram Classes. He feels it a really enjoyable course, which truly succeeds in introducing him to the world of architecture. I would recommend this course to anyone who wants to pursue architecture and wants to have a little peek behind the curtains. The course is very detailed and introduces my son to all essential concepts of architecture starting from having the right mindset to creating actual site models.`,
  },
  {
    name: "Fahim Jalal",
    title: "Project Professional at PTW",
    image: Fahim,
    linkedin: "https://www.linkedin.com/in/fahim-jalal-b1420474/",
    quote: `Incredibly driven. That's the first thing one would notice after a quick conversation with Hari. Having worked with him on multiple projects over the years, I'd definitely say that his work ethic, apart from being professionally amazing, has also been quite motivating to witness at a personal level. His scheduling and prioritisation skills have certainly helped our project teams through difficult deadlines on multiple occasions. All this combined with the amazing eye that Hari has for quality and his signature aesthetic language will, I'm sure, make him an amazing addition to any team.`,
  },
  {
    name: "Rehan Ahmed",
    title: "Studio Director @ Abacus Design Studio",
    image: Rehan,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `For the past years, I have closely worked with Haribabu. He has outstanding expertise with regards to computer design softwares and other important areas such as Architectural design and UI/UX design. This is paired with his effortless Sketching and designing skills. Additionally, he is a highly efficient business manager & Teacher, pulling off complex events with ease. Lastly, Hari has a very pleasant personality, it is a pleasure working with him. I can highly recommend Hari for your projects`,
  },
  {
    name: "Rehan Ahmed",
    title: "Managing Director at Abacus Design Studio",
    image: terila,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `For the past years, I have closely worked with Haribabu...I can highly recommend Hari for your projects`,
  },
  {
    name: "Adarsh Simon",
    title: "Design Engineer @ Robotics Technologist",
    image: adharsh,
    linkedin: "https://www.linkedin.com/in/adarsh-simon/",
    quote: `Talented artist with a keen eye for design, self motivated and highly ambitious. He is also brilliant at identifying design impact on user response and thinking out of the box to solve problems in a creative way. His art skills also help him convey his ideas clearly to a diverse group of audiences .I wish him the best for his future endeavors and look forward to see more of his work.`,
  },
  {
    name: "Rehan Ahmed",
    title: "Managing Director at Abacus Design Studio",
    image: ragun,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `For the past years, I have closely worked with Haribabu...I can highly recommend Hari for your projects`,
  },
  {
    name: "Rehan Ahmed",
    title: "Managing Director at Abacus Design Studio",
    image: push,
    linkedin: "https://www.linkedin.com/in/rehan-ahmed-b5723223/",
    quote: `For the past years, I have closely worked with Haribabu...I can highly recommend Hari for your projects`,
  },
];

// Utility to generate random float animations
const getRandomAnimation = (i) => {
  const duration = 6 + (i % 5);
  const delay = (i % 5) * 0.7;
  return {
    animation: `float${i % 5} ${duration}s ease-in-out ${delay}s infinite`,
  };
};

const bubblePositions = [
  // Rengaraj
  { top: "20%", left: "5%", size: 80 },
  // Fahim
  { bottom: "20%", right: "10%", size: 90 },
  // Rehan
  { top: "60%", left: "10%", size: 100 },
  { top: "35%", right: "20%", size: 50 },

  { top: "70%", left: "40%", size: 65 },
  // Ragun
  { top: "15%", right: "35%", size: 45 },
  // unknown
  { top: "10%", left: "30%", size: 55 },
  // push
  { bottom: "15%", right: "15%", size: 50 },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Bubbles */}
      {testimonials.map((person, i) => {
        const position = bubblePositions[i % bubblePositions.length];
        return (
          <Tooltip title={person.name} arrow key={i}>
            <Avatar
              alt={person.name}
              src={person.image}
              onClick={() => setActiveIndex(i)}
              sx={{
                position: "absolute",
                ...position,
                width: position.size,
                height: position.size,
                border: i === activeIndex ? "2px solid white" : "",
                cursor: "pointer",
                ...getRandomAnimation(i),
                zIndex: 1,
              }}
            />
          </Tooltip>
        );
      })}

      {/* Center Person */}
      <Box sx={{ mt: 6, position: "relative", zIndex: 0 }}>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Avatar
            src={active.image}
            alt={active.name}
            sx={{ width: 120, height: 120, mx: "auto" }}
          />
          <IconButton
            component={Link}
            href={active.linkedin}
            target="_blank"
            rel="noopener"
            sx={{
              position: "absolute",
              bottom: 0,
              right: -10,
              bgcolor: "#0077b5",
              color: "#fff",
              width: 32,
              height: 32,
              "&:hover": { bgcolor: "#005582" },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography variant="h6" mt={2}>
          {active.name}
        </Typography>
        <Typography variant="body2" fontStyle="italic" mb={2}>
          {active.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 600, mx: "auto", px: 2, mt: 1 }}
        >
          “{active.quote}”
        </Typography>
      </Box>

      {/* Floating Keyframes */}
      <style>{`
        @keyframes float0 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float3 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float4 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
};

export default TestimonialCarousel;
