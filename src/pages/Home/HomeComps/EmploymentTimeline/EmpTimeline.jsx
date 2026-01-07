import React, { useState, useRef } from "react";
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
  CreditCard,
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
      "As my parents expected day by day i improved my academic performance and excelled with a score of 98% in final board exams. I had...",
    image: "https://placehold.co/100",
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
    image: "https://placehold.co/100",
    icon: LocationOn,
    iconColor: "#29b6f6",
    moreDescription:
      "I got a seat in NIT trichy by securing a top score in the national level entrance exam conducted by the Government of India. Here things were completely different, I started living on my own in a hostel away from home.Had friends from different cultural and linguistic backgrounds. This place taught me life, friendship, failures etc apart from design and technology.",
  },

  {
    year: 2012,
    title: "iDesign",
    description:
      "I participated as an individual for a national level product design competition named iDesign. With the basic design...",
    image: "https://placehold.co/100",
    icon: LocationOn,
    iconColor: "#29b6f6",
    moreDescription:
      "I participated as an individual for a national level product design competition named iDesign. With the basic design knowledge I had at that point of time I tried to implement my idea for a sanitary fixture design for an urban city small house. This boosted my confidence and motivated me to participate in many design competitions.",
  },
  {
    year: 2013,
    title: "Graphic designer",
    description:
      "During school days I used to work with photoshop and illustrator, with that experience i tried...",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "During school days I used to work with photoshop and illustrator, with that experience i tried for a part-time graphic designer job in the companies near my university. I got an opportunity to work for a photoStudio as a photo post production and graphic designer. This also enhanced my skills and helped me to manage my tuition expenses.",
  },
  {
    year: 2014,
    title: "Akriti",
    description:
      "Akriti is a national level design competition organised by NIT Trichy. The project brief is to design a temporary...",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "Akriti is a national level design competition organised by NIT Trichy. The project brief is to design a temporary structure using locally available material for the cultural fest named Festember which happens every year. My friend and I participated in this competition.",
  },
  {
    year: 2014,
    title: "Hudco - NASA",
    description:
      "2014 56th Annual NASA Convention (Contextual of Time, Space and People) was conducted by the Vaishnavi School of...",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "2014 56th Annual NASA Convention (Contextual of Time, Space and People) was conducted by the Vaishnavi School of Architecture & Planning at Hitex, Hyderabad. In this we as a team won the HUDCO Trophy for designing shelters for urban poor fishing communities.",
  },
  {
    year: 2014,
    title: "LLArchitects",
    description:
      "As a part of the course curriculum I did a six month internship with LLA Architects in Kuala Lumpur, Malaysia..",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "As a part of the course curriculum I did a six month internship with LLA Architects in Kuala Lumpur, Malaysia. I had international experience here and got to work with highly talented professionals from all around the world. Even though I am a trainee architect I have freedom to explore my ideas in real projects. My role is to deal with the clients and do presentation drawings.",
  },
  {
    year: 2015,
    title: "ToughTimes",
    description:
      "My father passed away. I had a placement offer to work with an interior design company in Bangalore but...",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "My father passed away. I had a placement offer to work with an interior design company in Bangalore but I wasn't able to take that offer since I needed to take care of my mom who was in service as a village health nurse. So I started to plan my career around my hometown.",
  },
  {
    year: 2016,
    title: "Volunteering Teaching",
    description:
      "I always had a love for teaching during my college days. I had an opportunity to teach software and visual arts as a guest lecturer...",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription:
      "I always had a love for teaching during my college days. I had an opportunity to teach software and visual arts as a guest lecturer in CARE school of architecture for two days a week. I also started neramClasses.com by using skype for Classroom to connect remote village students with world class teachers across the globe. Since at that time it was difficult to find good teachers in small villages.",
  },
  {
    year: 2016,
    title: "UI/UX Designer",
    description: "I worked as Designer",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription: "I worked as Designer.",
  },
  {
    year: 2022,
    title: "UI/UX Designer",
    description: "I worked as Designer",
    image: "https://placehold.co/100",
    icon: CreditCard,
    iconColor: "#ab47bc",
    moreDescription: "I worked as Designer.",
  },
];

const TimelineItem = ({ item, index, onClick }) => {
  const isTop = index % 2 === 0;
  const IconComp = item.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Box
      sx={{
        position: "relative",
        width: 260,
        flexShrink: 0,
        mx: 3,
        textAlign: "center",
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
          p: 1,
          borderRadius: "50%",
          boxShadow: 3,
          zIndex: 2,
        }}
      >
        <IconComp sx={{ color: item.iconColor, fontSize: 32 }} />
      </Box>

      {/* Horizontal main line already behind container */}

      {/* Connector to image or text */}
      {/* Vertical from icon */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 2,
          height: isTop ? "152px" : "62px",
          bgcolor: "grey.400",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
      {/* Horizontal to image/text */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% - 60px)" : "calc(50% + 60px)",
          left: "50%",
          width: "40px",
          height: 2,
          bgcolor: "grey.400",
          transform: "translateX(-50%) translateX(20px)",
          zIndex: 1,
        }}
      />
      {/* End dot */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% - 63px)" : "calc(50% + 57px)",
          left: "calc(50% + 38px)",
          width: 8,
          height: 8,
          bgcolor: "grey.700",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      {/* Line */}
      <Box
        sx={{
          position: "absolute",
          top: IconComp ? (isTop ? "33.35%" : "7.35%") : undefined,
          left: "50%",
          width: 2,
          height: IconComp ? (isTop ? "62px" : "152px") : undefined,
          bgcolor: "grey.400",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />

      {/* Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        onClick={() => onClick(item)}
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% - 60px - 40px)" : "calc(50% + 60px + -40px)",
          left: "calc(50% + 40px)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />

      {/* DOT */}

      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% - -152px)" : "calc(50% + -155px)",
          left: "calc(50% + -4.25px)",
          width: 8,
          height: 8,
          bgcolor: "grey.700",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      {/* Number */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% + 125px)" : "calc(50% - 60px - 50px - 60px)",
          left: "calc(50% + -50px)",
          width: 160,
          textAlign: "left",
        }}
      >
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", fontSize: "2rem" }}
        >
          {number}
        </Typography>
      </Box>

      {/* Content box (description, number, year, title) */}
      <Box
        sx={{
          position: "absolute",
          top: isTop ? "calc(50% + 30px)" : "calc(50% - 60px - 50px - 54px)",
          left: "calc(50% + 20px)",
          width: 160,
          textAlign: "left",
        }}
      >
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, fontSize: "12px" }}>
          {item.description}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 0.5, fontStyle: "italic" }}>
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
  const isTouch = useMediaQuery("(pointer: coarse)");

  const handleNext = () =>
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  const handlePrev = () =>
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const handleClick = (item) => (setCurrent(item), setOpen(true));

  return (
    <Box sx={{ position: "relative", py: 8 }}>
      {/* Main horizontal line */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 4,
          bgcolor: "black",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      />

      {/* Timeline items scroll */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: isTouch ? "auto" : "hidden",
          "&::-webkit-scrollbar": { display: "none" },
          px: 6,
          minHeight: 360,
        }}
      >
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} onClick={handleClick} />
        ))}
      </Box>

      {/* Nav buttons */}
      {!isTouch && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 30,
              zIndex: 2,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              p: 2,
              bgcolor: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
              boxShadow: "0 4px 12px rgba(0, 13, 255, 0.4)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "@keyframes pulse": {
                "0%": { boxShadow: "0 0 0 0 rgba(0, 13, 255, 0.4)" },
                "70%": { boxShadow: "0 0 0 10px rgba(0, 13, 255, 0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(0, 13, 255, 0)" },
              },
              animation: "pulse 2s infinite ease-out",
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.1)",
                boxShadow: "0 6px 16px rgba(0, 13, 255, 0.6)",
              },
              "& .MuiSvgIcon-root": {
                color: "rgba(0, 13, 255, 0.6)",
                fontSize: 32,
              },
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 40,
              zIndex: 2,
              transform: "translate(50%, -50%)",
              borderRadius: "50%",
              p: 2,
              bgcolor: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
              boxShadow: "0 4px 12px rgba(0, 13, 255, 0.4)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "@keyframes pulse": {
                "0%": { boxShadow: "0 0 0 0 rgba(0, 13, 255, 0.4)" },
                "70%": { boxShadow: "0 0 0 10px rgba(0, 13, 255, 0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(0, 13, 255, 0)" },
              },
              animation: "pulse 2s infinite ease-out",
              "&:hover": {
                transform: "translate(50%, -50%) scale(1.1)",
                boxShadow: "0 6px 16px rgba(0, 13, 255, 0.6)",
              },
              "& .MuiSvgIcon-root": {
                color: "rgba(0, 13, 255, 0.6)",
                fontSize: 32,
              },
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        </>
      )}

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 300, sm: 500 },
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box
              component="img"
              src={current.image}
              alt={current.title}
              sx={{ width: "100%", borderRadius: 2, mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              {current.title} ({current.year})
            </Typography>
            <Typography variant="body1">{current.moreDescription}</Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default EmploymentTimeline;
