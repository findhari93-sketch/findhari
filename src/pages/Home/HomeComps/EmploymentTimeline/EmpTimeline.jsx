import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  useMediaQuery,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Chat,
  MonetizationOn,
  LocationOn,
  EmojiEvents,
  Work,
  School,
  Favorite,
  VolunteerActivism,
  DesignServices,
} from "@mui/icons-material";
// Images
import BabyPic from "../../../../assets/images/experience/born-day.webp";
import JuniorSchool from "../../../../assets/images/experience/junior.webp";

const timelineData = [
  {
    year: 1993,
    title: "BornDay",
    description:
      "I was born & brought up in a small town named pudukkottai located in southern India. My father was a police officer...",
    image: BabyPic,
    icon: Search,
    iconColor: "#fbc02d",
    moreDescription:
      "I was born & brought up in a small town named pudukkottai located in southern India. My father was a police officer and mother worked as a Nurse, both of my parents worked for government of India. The named me Haribabu after a person they know, who was very good in academics and also Hari is a name of a Hindu God.",
  },
  {
    year: 1998,
    title: "Junior Schooling",
    description:
      "My parents expected me to be good in academics just like the person they named me after. But I cried not to...",
    image: JuniorSchool,
    icon: Chat,
    iconColor: "#ff7043",
    moreDescription:
      "My parents expected me to be good in academics just like the person they named me after. But I cried not to send me to school on the first day. But I enjoyed my schooling. My interest towards arts and design started from here since during school days I used to get prizes and rewards in Sketching and painting competitions.",
  },
  {
    year: 2008,
    title: "Senior Schooling",
    description:
      "As my parents expected day by day i improved my academic performance and excelled with a score of 98% in final board exams...",
    image: null,
    icon: MonetizationOn,
    iconColor: "#66bb6a",
    moreDescription:
      "As my parents expected day by day i improved my academic performance and excelled with a score of 98% in final board exams. I had a artist teacher here who inspired me to learn new techniques mediums in paintings. He encouraged me to participate many art contests.",
  },
  {
    year: 2011,
    title: "NIT Trichy",
    description:
      "I got a seat in NIT trichy by securing a top score in the national level entrance exam conducted by...",
    image: null,
    icon: School,
    iconColor: "#29b6f6",
    moreDescription:
      "I got a seat in NIT trichy by securing a top score in the national level entrance exam conducted by the Government of India. Here things were completely different, I started living on my own in a hostel away from home. Had friends from different cultural and linguistic backgrounds. This place taught me life, friendship, failures etc apart from design and technology.",
  },
  {
    year: 2012,
    title: "iDesign",
    description:
      "I participated as an individual for a national level product design competition named iDesign...",
    image: null,
    icon: EmojiEvents,
    iconColor: "#ffd54f",
    moreDescription:
      "I participated as an individual for a national level product design competition named iDesign. With the basic design knowledge I had at that point of time I tried to implement my idea for a sanitary fixture design for an urban city small house. This boosted my confidence and motivated me to participate in many design competitions.",
  },
  {
    year: 2013,
    title: "Graphic Designer",
    description:
      "During school days I used to work with photoshop and illustrator, with that experience i tried...",
    image: null,
    icon: DesignServices,
    iconColor: "#ab47bc",
    moreDescription:
      "During school days I used to work with photoshop and illustrator, with that experience i tried for a part-time graphic designer job in the companies near my university. I got an opportunity to work for a photoStudio as a photo post production and graphic designer. This also enhanced my skills and helped me to manage my tuition expenses.",
  },
  {
    year: 2014,
    title: "Akriti",
    description:
      "Akriti is a national level design competition organised by NIT Trichy. The project brief is to design a temporary...",
    image: null,
    icon: EmojiEvents,
    iconColor: "#ff8a65",
    moreDescription:
      "Akriti is a national level design competition organised by NIT Trichy. The project brief is to design a temporary structure using locally available material for the cultural fest named Festember which happens every year. My friend and I participated in this competition.",
  },
  {
    year: 2014,
    title: "Hudco - NASA",
    description:
      "2014 56th Annual NASA Convention was conducted by the Vaishnavi School of Architecture...",
    image: null,
    icon: EmojiEvents,
    iconColor: "#4dd0e1",
    moreDescription:
      "2014 56th Annual NASA Convention (Contextual of Time, Space and People) was conducted by the Vaishnavi School of Architecture & Planning at Hitex, Hyderabad. In this we as a team won the HUDCO Trophy for designing shelters for urban poor fishing communities.",
  },
  {
    year: 2014,
    title: "LLArchitects",
    description:
      "As a part of the course curriculum I did a six month internship with LLA Architects in Kuala Lumpur...",
    image: null,
    icon: Work,
    iconColor: "#7986cb",
    moreDescription:
      "As a part of the course curriculum I did a six month internship with LLA Architects in Kuala Lumpur, Malaysia. I had international experience here and got to work with highly talented professionals from all around the world. Even though I am a trainee architect I have freedom to explore my ideas in real projects. My role is to deal with the clients and do presentation drawings.",
  },
  {
    year: 2015,
    title: "Tough Times",
    description:
      "My father passed away. I had a placement offer to work with an interior design company in Bangalore but...",
    image: null,
    icon: Favorite,
    iconColor: "#ef5350",
    moreDescription:
      "My father passed away. I had a placement offer to work with an interior design company in Bangalore but I wasn't able to take that offer since I needed to take care of my mom who was in service as a village health nurse. So I started to plan my career around my hometown.",
  },
  {
    year: 2016,
    title: "Volunteering Teaching",
    description:
      "I always had a love for teaching during my college days. I had an opportunity to teach software...",
    image: null,
    icon: VolunteerActivism,
    iconColor: "#81c784",
    moreDescription:
      "I always had a love for teaching during my college days. I had an opportunity to teach software and visual arts as a guest lecturer in CARE school of architecture for two days a week. I also started neramClasses.com by using skype for Classroom to connect remote village students with world class teachers across the globe.",
  },
  {
    year: 2016,
    title: "UI/UX Designer",
    description:
      "Started my professional journey as a UI/UX Designer, combining my passion for design with technology...",
    image: null,
    icon: DesignServices,
    iconColor: "#64b5f6",
    moreDescription:
      "Started my professional journey as a UI/UX Designer, combining my passion for design with technology to create meaningful digital experiences.",
  },
  {
    year: 2022,
    title: "Senior Designer",
    description:
      "Grew into a senior role leading design initiatives and mentoring junior designers...",
    image: null,
    icon: LocationOn,
    iconColor: "#ba68c8",
    moreDescription:
      "Grew into a senior role leading design initiatives and mentoring junior designers. Focused on creating scalable design systems and improving user experiences across multiple products.",
  },
];

const TimelineItem = ({ item, index, onClick, isMobile }) => {
  const isTop = index % 2 === 0;
  const IconComp = item.icon;
  const number = String(index + 1).padStart(2, "0");
  const hasRealImage = item.image && !item.image.includes("placehold");

  // Mobile-specific measurements
  const itemWidth = isMobile ? 200 : 260;
  const iconSize = isMobile ? 28 : 36;
  const imageSize = isMobile ? 60 : 80;
  const connectorOffset = isMobile ? "50px" : "65px";

  return (
    <Box
      sx={{
        position: "relative",
        width: itemWidth,
        flexShrink: 0,
        mx: { xs: 1.5, md: 3 },
        textAlign: "center",
        height: isMobile ? 280 : 340,
      }}
    >
      {/* Icon node on main line */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: { xs: 0.75, md: 1 },
          borderRadius: "50%",
          boxShadow: `0 4px 20px ${item.iconColor}40`,
          border: `3px solid ${item.iconColor}`,
          zIndex: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translate(-50%, -50%) scale(1.1)",
            boxShadow: `0 6px 28px ${item.iconColor}60`,
          },
        }}
      >
        <IconComp sx={{ color: item.iconColor, fontSize: iconSize }} />
      </Box>

      {/* Vertical connector from icon - extends toward content (130px) */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% - 130px)" : "50%",
          left: "50%",
          width: 2,
          height: "130px",
          background: `linear-gradient(${isTop ? "to bottom" : "to top"}, ${item.iconColor}20, ${item.iconColor})`,
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />

      {/* Vertical connector - faded extension beyond icon */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "50%" : `calc(50% - ${connectorOffset})`,
          left: "50%",
          width: 2,
          height: connectorOffset,
          background: `linear-gradient(${isTop ? "to bottom" : "to top"}, ${item.iconColor}, ${item.iconColor}20)`,
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />

      {/* Horizontal connector to image */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? `calc(50% - ${connectorOffset})` : `calc(50% + ${connectorOffset})`,
          left: "50%",
          width: isMobile ? "35px" : "50px",
          height: 2,
          bgcolor: item.iconColor,
          transform: isTop ? "translateY(-1px)" : "translateY(-1px)",
          zIndex: 1,
        }}
      />

      {/* Image or Icon placeholder */}
      <Box
        onClick={() => onClick(item, index)}
        sx={{
          position: "absolute",
          top: isTop
            ? `calc(50% - ${connectorOffset} - ${imageSize / 2}px - ${isMobile ? "20px" : "30px"})`
            : `calc(50% + ${connectorOffset} - ${imageSize / 2}px + ${isMobile ? "20px" : "30px"})`,
          left: `calc(50% + ${isMobile ? "32px" : "45px"})`,
          width: imageSize,
          height: imageSize,
          borderRadius: "50%",
          cursor: "pointer",
          transition: "transform 0.3s, box-shadow 0.3s",
          overflow: "hidden",
          bgcolor: hasRealImage ? "transparent" : `${item.iconColor}15`,
          border: `3px solid ${item.iconColor}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "scale(1.15)",
            boxShadow: `0 8px 24px ${item.iconColor}40`,
          },
        }}
      >
        {hasRealImage ? (
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <IconComp
            sx={{
              fontSize: isMobile ? 28 : 36,
              color: item.iconColor,
              opacity: 0.6,
            }}
          />
        )}
      </Box>

      {/* Number with glow effect */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? `calc(50% + ${isMobile ? "60px" : "85px"})` : `calc(50% - ${isMobile ? "90px" : "125px"})`,
          left: `calc(50% - ${isMobile ? "40px" : "50px"})`,
          width: 140,
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontFamily: "Roboto, sans-serif",
            color: `${item.iconColor}25`,
            textShadow: `0 0 20px ${item.iconColor}15`,
          }}
        >
          {number}
        </Typography>
      </Box>

      {/* Content box */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? `calc(50% + ${isMobile ? "25px" : "35px"})` : `calc(50% - ${isMobile ? "80px" : "110px"})`,
          left: `calc(50% + ${isMobile ? "10px" : "20px"})`,
          width: isMobile ? 120 : 160,
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            color: "#1a1a1a",
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Kalam, cursive",
            fontSize: { xs: "0.7rem", md: "0.8rem" },
            color: "#666",
            mt: 0.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.4,
          }}
        >
          {item.description}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "0.75rem", md: "0.85rem" },
            color: item.iconColor,
            mt: 0.5,
          }}
        >
          {item.year}
        </Typography>
      </Box>
    </Box>
  );
};

const EmploymentTimeline = () => {
  const scrollRef = useRef();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTouch = useMediaQuery("(pointer: coarse)");

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      return () => el.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const handleNext = () =>
    scrollRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  const handlePrev = () =>
    scrollRef.current?.scrollBy({ left: -280, behavior: "smooth" });

  const handleClick = (item, index) => {
    setCurrent(item);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleModalPrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrent(timelineData[newIndex]);
    }
  };

  const handleModalNext = () => {
    if (currentIndex < timelineData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrent(timelineData[newIndex]);
    }
  };

  const hasRealImage = current.image && !current.image?.includes("placehold");
  const CurrentIcon = current.icon;

  return (
    <Box sx={{ position: "relative", py: { xs: 4, md: 8 } }}>
      {/* Scrollable container with line INSIDE */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          px: { xs: 4, md: 8 },
          height: { xs: 280, md: 340 },
          position: "relative",
          alignItems: "center",
        }}
      >
        {/* Main horizontal line - NOW INSIDE scroll container */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: `${timelineData.length * (isMobile ? 230 : 310)}px`,
            height: 4,
            background: "linear-gradient(90deg, #333 0%, #666 50%, #333 100%)",
            transform: "translateY(-50%)",
            zIndex: 1,
            borderRadius: 2,
          }}
        />

        {timelineData.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            index={i}
            onClick={handleClick}
            isMobile={isMobile}
          />
        ))}
      </Box>

      {/* Navigation buttons */}
      {!isTouch && (
        <>
          <IconButton
            onClick={handlePrev}
            disabled={!canScrollLeft}
            sx={{
              position: "absolute",
              top: "50%",
              left: { xs: 8, md: 24 },
              zIndex: 10,
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              width: { xs: 44, md: 52 },
              height: { xs: 44, md: 52 },
              opacity: canScrollLeft ? 1 : 0.3,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "white",
                transform: "translateY(-50%) scale(1.08)",
                boxShadow: "0 6px 28px rgba(0,0,0,0.2)",
              },
            }}
          >
            <ChevronLeft sx={{ fontSize: { xs: 28, md: 32 }, color: "#333" }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={!canScrollRight}
            sx={{
              position: "absolute",
              top: "50%",
              right: { xs: 8, md: 24 },
              zIndex: 10,
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              width: { xs: 44, md: 52 },
              height: { xs: 44, md: 52 },
              opacity: canScrollRight ? 1 : 0.3,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "white",
                transform: "translateY(-50%) scale(1.08)",
                boxShadow: "0 6px 28px rgba(0,0,0,0.2)",
              },
            }}
          >
            <ChevronRight sx={{ fontSize: { xs: 28, md: 32 }, color: "#333" }} />
          </IconButton>
        </>
      )}

      {/* Enhanced Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 400, sx: { bgcolor: "rgba(0,0,0,0.85)" } },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "92%", sm: 500, md: 580 },
              maxHeight: "90vh",
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
              overflow: "hidden",
              outline: "none",
            }}
          >
            {/* Image/Icon header */}
            <Box
              sx={{
                width: "100%",
                height: { xs: 160, md: 200 },
                bgcolor: hasRealImage ? "transparent" : `${current.iconColor}15`,
                backgroundImage: hasRealImage ? `url(${current.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {!hasRealImage && CurrentIcon && (
                <CurrentIcon
                  sx={{
                    fontSize: { xs: 64, md: 80 },
                    color: current.iconColor,
                    opacity: 0.5,
                  }}
                />
              )}

              {/* Close button */}
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  bgcolor: "rgba(255,255,255,0.9)",
                  "&:hover": { bgcolor: "white" },
                }}
              >
                <Box sx={{ fontSize: 20, color: "#333" }}>✕</Box>
              </IconButton>

              {/* Navigation in modal */}
              {currentIndex > 0 && (
                <IconButton
                  onClick={handleModalPrev}
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.9)",
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  <ChevronLeft sx={{ color: "#333" }} />
                </IconButton>
              )}

              {currentIndex < timelineData.length - 1 && (
                <IconButton
                  onClick={handleModalNext}
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.9)",
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  <ChevronRight sx={{ color: "#333" }} />
                </IconButton>
              )}
            </Box>

            {/* Content */}
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              {/* Year and progress */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: current.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 12px ${current.iconColor}50`,
                    }}
                  >
                    {CurrentIcon && <CurrentIcon sx={{ color: "#fff", fontSize: 22 }} />}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: current.iconColor,
                    }}
                  >
                    {current.year}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 14,
                    color: "#999",
                  }}
                >
                  {currentIndex + 1} / {timelineData.length}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: 22, md: 26 },
                  color: "#1a1a1a",
                  mb: 2,
                }}
              >
                {current.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontSize: { xs: 15, md: 17 },
                  color: "#444",
                  lineHeight: 1.8,
                }}
              >
                {current.moreDescription}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default EmploymentTimeline;
