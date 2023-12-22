// next
import NextLink from "next/link";
import { forwardRef } from "react";

// @mui
import { Box, BoxProps, Link } from "@mui/material";

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

// eslint-disable-next-line react/display-name
export const LogoSmall = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 196,
          height: 32,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
        {...other}
      >
        <svg
          width="45"
          height="32"
          viewBox="0 0 45 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.864 30.6477L44.3427 29.3962L22.2542 2.13178C21.7719 1.5365 21.1797 1.04414 20.5112 0.682807C19.8428 0.321471 19.1112 0.0982444 18.3584 0.0258652C17.6055 -0.0465139 16.8461 0.0333741 16.1234 0.260971C15.4008 0.488568 14.7291 0.859408 14.1467 1.35233L12.668 2.6038L34.7565 29.8682C35.2388 30.4635 35.831 30.9559 36.4995 31.3172C37.1679 31.6785 37.8995 31.9018 38.6523 31.9741C39.4052 32.0465 40.1646 31.9666 40.8872 31.739C41.6099 31.5114 42.2816 31.1406 42.864 30.6477Z"
            fill="#EA3569"
          />
          <path
            d="M1.47869 30.6477L0 29.3962L22.0885 2.13178C22.5708 1.5365 23.1631 1.04414 23.8315 0.682807C24.4999 0.321471 25.2315 0.0982444 25.9843 0.0258652C26.7372 -0.0465139 27.4966 0.0333741 28.2193 0.260971C28.9419 0.488568 29.6136 0.859408 30.196 1.35233L31.6747 2.6038L9.58622 29.8682C9.10395 30.4635 8.51168 30.9559 7.84324 31.3172C7.17479 31.6785 6.44325 31.9018 5.6904 31.9741C4.93755 32.0465 4.17812 31.9666 3.45547 31.739C2.73282 31.5114 2.06111 31.1406 1.47869 30.6477Z"
            fill="#02D3D7"
          />
          <path
            d="M22.2368 25.5605L26.5508 31.1359C26.8368 31.5055 27.2716 31.721 27.7315 31.721H29.2912C30.5529 31.721 31.2565 30.2254 30.4719 29.2113L23.4175 20.0944C22.8139 19.3143 21.6597 19.3142 21.0561 20.0944L14.0017 29.2113C13.2171 30.2254 13.9207 31.721 15.1824 31.721H16.7421C17.2021 31.721 17.6368 31.5055 17.9228 31.1359L22.2368 25.5605Z"
            fill="#FBDD3F"
          />
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={NextLink} href="/" sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);
