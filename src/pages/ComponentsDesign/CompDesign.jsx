import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import googleform from "./Images/googleform.png";
import neramForm from "./Images/neramForm.png";
import calcold from "./Images/calcold.jpg";
import neramcalc from "./Images/neramcalc.png";
import contactus from "./Images/contactus.jpg";
import studyapp from "./Images/studyapp.png";
import sapheader from "./Images/SAPheader.png";
import prm from "./Images/prmcomp.png";
import SAPcard from "./Images/SAPCard.png";
import SAPold from "./Images/SAPold.png";
import p3old from "./Images/P3old.png";
import p3comp from "./Images/p3comp.png";
import mcmcomp from "./Images/mcm.png";

const components = [
  {
    name: "Application Form for neramClasses.com",
    tags: ["WebApp", "Finance"],
    context:
      "Redesigned the student application form for NeramClasses.com to replace the overwhelming Google Form with a more streamlined, user-friendly experience. Simplified the layout using a multi-step format that made the process feel lighter without removing any essential fields. Integrated payment directly into the form, completing the enrollment flow resulting in a noticeable increase in student applications.",
    imageBefore: googleform,
    imageAfter: neramForm,
    styleBefore: { height: 280, objectFit: "contain" },
    styleAfter: { height: 280, objectFit: "cover" },
    liveLink: "https://neramclasses.com/NATA_Application_Form_2025",
  },
  {
    name: "Calculator Design",
    tags: ["Utility", "Mobile"],
    context:
      "Designed a NATA cut-off mark calculator for NeramClasses.com with a student-first approach, using a familiar calculator-style UI to ensure ease of use and relatability. The intuitive design resonated with students, leading to a surge in usage and making it the top-ranking NATA cut-off calculator on Google.",
    imageBefore: calcold,
    imageAfter: neramcalc,
    styleBefore: { height: 280, objectFit: "contain" },
    styleAfter: { height: 280, objectFit: "cover" },
    liveLink: "https://neramclasses.com/nata-cutoff-calculator",
  },
  {
    name: "Contact Us Card Design",
    tags: ["Dashboard", "Enterprise"],
    context:
      "Designed a contact card for NeramClasses.com that combines multiple features including location on map, live Google reviews, images of the coaching center, social media links, and quick access buttons for call and chat support. The design was created to be fully responsive, ensuring a smooth and consistent experience across both mobile and desktop devices.",
    imageBefore: "",
    imageAfter: contactus,
    liveLink: "https://neramclasses.com/NATA_Coaching_center_near_me_address",
  },

  {
    name: "Study APP UI Design",
    tags: ["Dashboard", "Enterprise"],
    context:
      "Designed a self-learning study app for NeramClasses.com with a focus on delivering a user friendly experience across both web and mobile. The app includes books, video lectures, mock tests, quizzes, and other essential study resources all in one place. Built to support independent learning, it became a widely used and loved platform among students, helping them stay on track even without live classes or teacher interaction.",
    imageBefore: "",
    imageAfter: studyapp,
    liveLink: "https://neramclasses.com/NATA_Free_Books",
  },
  {
    name: "MCM Design",
    tags: ["Enterprise UI", "Data"],
    context:
      "Redesigned key components of the MCM 3.0 interface, an internal application used at Applied Materials, to improve usability and visual clarity. The earlier version lacked user-friendly design, so I focused on enhancing core elements like search, filters, form fields, and tables. This showcase highlights each component individually, reflecting a cleaner, more efficient user experience tailored for daily internal use.",
    imageBefore: "",
    imageAfter: mcmcomp,
    liveLink:
      "https://www.figma.com/proto/BX3edDC6PouOCigbNdNyKG/AMAT-SCV?page-id=4472%3A26425&node-id=4976-11882&p=f&viewport=480%2C938%2C0.04&t=0QfvxQEn75HsRTxq-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=4976%3A11882&show-proto-sidebar=1",
  },
  {
    name: "SAP Header",
    tags: ["Enterprise UI", "Data"],
    context:
      "While working on the SAP application for Applied Materials, I redesigned the header to improve clarity, navigation, and overall usability. At the time of building this portfolio, the redesign is still in its early stages. Here, I’m sharing a before-and-after comparison of the header to highlight the design direction and enhancements made so far.",
    imageBefore: "",
    imageAfter: sapheader,
  },
  {
    name: "PRM Dashboard Widgets",
    tags: ["Enterprise UI", "Data"],
    context:
      "I have primarily focused on dashboard and data-driven UI designs across multiple projects. One key example is the PRM Dashboard for Applied Materials, where I designed the entire frontend interface. This included the main dashboard overview, widget components, sidebar, and several other essential elements. Below, I’ve shared a few key UI snapshots that reflect the core design of the application.",
    imageBefore: "",
    imageAfter: prm,
  },
  {
    name: "SAP Database Card Redesign",
    tags: ["Enterprise UI", "Data"],
    context:
      "Currently working on redesigning the SAP database interface for Applied Materials, which previously had a non user-friendly UI. As part of the ongoing revamp, I’ve redesigned the request creation component used by users to submit specific requests. This is one of many internal pages being improved to enhance usability and streamline workflows. Here, I’m sharing a brief glimpse of the updated UI design for this application.",
    imageBefore: SAPold,
    imageAfter: SAPcard,
  },
  {
    name: "P3 Component Design",
    tags: ["Enterprise UI", "Data"],
    context:
      "P-3 is one of the internal applications at Applied Materials where I was tasked with redesigning key components to improve usability and consistency. The existing UI for pages like Quota arrangement and P3 module was not user-friendly. To address this, I created a set of UI component building blocks tailored for the P-3 application. Here, I’m sharing screenshots showcasing the redesigned components and layout improvements.",
    imageBefore: p3old,
    imageAfter: p3comp,
    liveLink:
      "https://www.figma.com/proto/BX3edDC6PouOCigbNdNyKG/AMAT-SCV?page-id=2017%3A520&node-id=2017-84405&p=f&viewport=509%2C184%2C0.07&t=vmRwx3u8f8baOFD8-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2017%3A84405&show-proto-sidebar=1",
  },
];

const CompDesign = () => {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleOpen = (img) => {
    setModalImg(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg" style={{ padding: "4rem 1rem", color: "white" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Component Redesign Showcase
      </Typography>
      A curated showcase of UI components I've designed and redesigned from
      intuitive cards to functional widgets. Some demonstrate before & after
      Redesigns, while others are newly designed from scratch based on
      requirement and user experience. This is just a glimpse, I've crafted a
      much wider range of components during my 9 years experience as a UI/UX and
      ReactJS developer.
      <Typography></Typography>
      {components.map((comp, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
            borderRadius: 4,
            my: 6,
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              {comp.name}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
              {comp.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontWeight: 500,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </Box>

            <Typography variant="body1" sx={{ mb: 4 }}>
              {comp.context}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: comp.imageBefore ? "center" : "center",
                gap: 4,
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {comp.imageBefore && (
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 1, fontWeight: 500 }}
                  >
                    Before
                  </Typography>
                  <Box
                    onClick={() => handleOpen(comp.imageBefore)}
                    sx={{
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      overflow: "hidden",
                      display: "inline-block",
                      maxWidth: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src={comp.imageBefore}
                      alt={`${comp.name} before`}
                      sx={{
                        height: "auto",
                        maxHeight: 400,
                        width: "auto",
                        maxWidth: "100%",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                        ...(comp.styleBefore || {}),
                      }}
                    />
                  </Box>
                </Box>
              )}

              <Box
                sx={{
                  textAlign: "center",
                  flex: comp.imageBefore ? "unset" : "1 1 100%",
                }}
              >
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                  {comp.imageBefore ? "After" : "Component Design"}
                </Typography>
                <Box
                  onClick={() => handleOpen(comp.imageAfter)}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    overflow: "hidden",
                    display: "inline-block",
                    width: comp.imageBefore ? "auto" : "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={comp.imageAfter}
                    alt={`${comp.name} after`}
                    sx={{
                      height: "auto",
                      width: "100%",
                      maxWidth: "100%",
                      maxHeight: comp.imageBefore ? 400 : "unset",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      ...(comp.styleAfter || {}),
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {comp.liveLink && (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  href={comp.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "white",
                    },
                  }}
                >
                  View Live
                </Button>
              </Box>
            )}

            {index !== components.length - 1 && <Divider sx={{ mt: 4 }} />}
          </CardContent>
        </Card>
      ))}
      {/* Fullscreen Image Viewer */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogContent
          sx={{ position: "relative", padding: 0, backgroundColor: "black" }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={modalImg}
            alt="fullscreen preview"
            sx={{
              width: "100%",
              height: "100vh",
              objectFit: "contain",
              cursor: "zoom-in",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CompDesign;
