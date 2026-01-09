import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Featured projects data
const featuredProjects = [
  {
    id: "applied-materials",
    title: "Applied Materials MCM 3.0",
    description:
      "Led UX engineering for enterprise semiconductor platform. Architected 50+ component design system with Storybook.",
    tags: ["Enterprise UX", "Design Systems", "React"],
    highlight: "Team of the Quarter",
    color: "#23a6d5", // blue
  },
  {
    id: "neram-classes",
    title: "Neram Classes",
    description:
      "Founded EdTech platform serving 1000+ students annually. Built cross-functional team and full product.",
    tags: ["Founder", "Full Stack", "EdTech"],
    highlight: "AIR-1 Achievement",
    color: "#23d5ab", // mint
  },
  {
    id: "neom-the-line",
    title: "NEOM - The Line",
    description:
      "Contributed to smart city digital experience for Saudi Arabia's futuristic urban development project.",
    tags: ["Smart City", "UX Engineering", "Scale"],
    highlight: "Global Impact",
    color: "#e73c7e", // pink
  },
];

const FeaturedWork = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 3 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Typography
            variant="sectionTitle"
            component="h2"
            sx={{
              color: "#fff",
              mb: 1,
              fontSize: { xs: "24px", md: "28px" },
              letterSpacing: { xs: "4px", md: "6px" },
            }}
          >
            Featured Work
          </Typography>
          <Typography
            sx={{
              fontFamily: "Kalam, cursive",
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.7,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Selected projects showcasing design systems, product engineering,
            and team leadership
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 2.5 },
            mb: { xs: 3, md: 4 },
          }}
        >
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              component={Link}
              to={`/work/${project.id}`}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 24px rgba(0, 0, 0, 0.25)`,
                  border: `1px solid rgba(255, 255, 255, 0.25)`,
                  "& .project-arrow": {
                    transform: "translateX(3px)",
                    opacity: 1,
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: project.color,
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
                {/* Highlight Badge - White text on colored bg for contrast */}
                <Chip
                  label={project.highlight}
                  size="small"
                  sx={{
                    backgroundColor: project.color,
                    color: "#fff",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    height: "22px",
                    mb: 1.5,
                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />

                {/* Title */}
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "16px", md: "17px" },
                    color: "#fff",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                  <ArrowForwardIcon
                    className="project-arrow"
                    sx={{
                      fontSize: "16px",
                      opacity: 0.4,
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                      ml: 1,
                    }}
                  />
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "12px", md: "13px" },
                    color: "rgba(255, 255, 255, 0.75)",
                    mb: 1.5,
                    lineHeight: 1.5,
                    minHeight: { xs: "auto", md: "54px" },
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tags */}
                <Stack
                  direction="row"
                  spacing={0.75}
                  flexWrap="wrap"
                  useFlexGap
                >
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                        color: "rgba(255, 255, 255, 0.9)",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "10px",
                        height: "20px",
                        "& .MuiChip-label": {
                          px: 1,
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* View All CTA */}
        <Box sx={{ textAlign: "center" }}>
          <Link to="/work" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "16px" }} />}
              sx={{
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.3)",
                fontWeight: 500,
                fontSize: "13px",
                px: 3,
                py: 1,
                borderRadius: "6px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              View All Projects
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedWork;
