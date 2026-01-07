import { Box, Typography, Divider, keyframes } from "@mui/material";
import LucaEyeAnimation from "./LucaAnimation/LucaAnimasion";

// Define keyframes for animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const lightGreyText = { color: "rgb(153, 153, 153)" };

const TechSkills = () => {
  const gradientTextStyle = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${gradientAnimation} 7s ease infinite`,
  };
  return (
    <section id="Skills" style={{}}>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 5rem",
          }}
        >
          <Typography variant="sectionTitle" sx={gradientTextStyle}>
            Tech
          </Typography>
          <Typography variant="sectionTitle" sx={gradientTextStyle}>
            - Skills
          </Typography>
          <Divider
            sx={{
              width: "100%",
              borderColor: "white",
              mt: 1,
            }}
          />
        </Box>
        {/* Description */}
        <Box sx={{ padding: "0 5rem" }}>
          <Typography
            variant="sectionContent"
            sx={{ width: "15rem", textAlign: "right" }}
          >
            I’m a building architect turned Web design developer. I have an
            architecture major from NIT Trichy, one of the prestigious
            universities in India. SInce i also have interest in teaching I
            worked as a guest lecturer in CARE Design school as part-time &
            study-resource digital content creator for neramClasses.com
          </Typography>
        </Box>
        <br />
        <br />
        <Box className="container">
          <div className="row">
            {/* text content */}
            <Box className="col text-end">
              <Box className="d-flex flex-column gap-3">
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ paddingBottom: "1.5rem" }}
                >
                  Things <br />
                  <Box
                    component="span"
                    className="colour-text"
                    sx={gradientTextStyle}
                  >
                    iLearned
                  </Box>
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Development
                  </Box>
                  <br />
                  HTML, CSS (SASS), JavaScript/ES6
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Adobe
                  </Box>
                  <br />
                  XD, Photoshop, Illustrator, Indesign, Premier-pro, After
                  Effects
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Autodesk
                  </Box>
                  <br />
                  Sketchbook, AutoCAD, Revit Architecture
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Other
                  </Box>
                  <br />
                  Figma, Blender, Lumion, Vray, Rhino, SketchUP, WordPress
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Digital Marketing
                  </Box>
                  <br />
                  Content Creation, SEO & SEM, Google & Facebook ADS, Analytics,
                  Youtube, Instagram, Linkedin etc
                </Typography>

                <Typography variant="body1">
                  <Box component="span" sx={lightGreyText}>
                    Hobby
                  </Box>
                  <br />
                  FreeHand & Digital Artist, Photography, Chess
                </Typography>

                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ paddingTop: "2rem" }}
                >
                  Things I wish to learn
                  <br />
                  <Box
                    component="span"
                    className="colour-text"
                    sx={gradientTextStyle}
                  >
                    FullStack Development
                  </Box>
                </Typography>
              </Box>
            </Box>
            <div className="col">
              <LucaEyeAnimation />
            </div>
          </div>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,32L80,58.7C160,85,320,139,480,170.7C640,203,800,213,960,202.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default TechSkills;
