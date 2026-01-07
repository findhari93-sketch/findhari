import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  useTheme,
} from "@mui/material";

const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear();

  return `${day}${suffix} • ${month} • ${year}`;
};

const EmploymentCard = ({
  title,
  subtitle,
  date,
  imageUrl,
  imageAlt,
  description,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 800,
        borderRadius: 4,
        boxShadow: 6,
        overflow: "hidden",
        mx: "auto",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              color="text.primary"
            >
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {subtitle}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.grey[600],
              fontWeight: 500,
              alignSelf: "flex-start",
              mt: { xs: 2, sm: 0 },
            }}
          >
            {formatDate(date)}
          </Typography>
        </Stack>

        <Box sx={{ mt: 3, borderRadius: 2, overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={imageAlt || "Employment photo"}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{ mt: 3, color: theme.palette.text.primary, lineHeight: 1.7 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmploymentCard;
