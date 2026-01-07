import { Box } from "@mui/material";

const WaveSVG = () => {
  return (
    <Box className="colourend-wave" sx={{ display: "flex" }}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1365 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i)">
          <path
            d="M216.827 0C123.997 -1.77099e-05 34.4724 30.3395 0 48.7421V189H1365L1364.91 118.871C1344.59 135.947 1256.69 165.126 1069.64 167.116C835.831 169.603 442.146 4.29859e-05 216.827 0Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_i"
            x="0"
            y="0"
            width="100%"
            height="193"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.40 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default WaveSVG;
