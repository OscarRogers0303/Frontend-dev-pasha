import { memo, type FC } from "react";

// @mui
import { Box, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

const GreenIcon: FC<BoxProps> = ({ ...other }) => {
  return (
    <Box {...other}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15.000000pt" height="15.000000pt" viewBox="0 0 15.000000 15.000000"  preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,15.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none"></g>
      </svg>
    </Box>
  );
}

export default memo(GreenIcon);