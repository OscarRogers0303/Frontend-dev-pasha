import { memo, type FC } from "react";

// @mui
import { Box, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

const OpenCodeIcon: FC<BoxProps> = ({ ...other }) => {
  return (
    <Box {...other}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
        <path
          d="M8.00582 4.9473C6.18191 4.9473 4.70462 6.42458 4.70462 8.24849C4.70462 10.0724 6.18191 11.5497 8.00582 11.5497C9.82973 11.5497 11.307 10.0724 11.307 8.24849C11.307 6.42458 9.82973 4.9473 8.00582 4.9473ZM2.22872 10.7244H0.578125V14.0256C0.578125 14.9334 1.32089 15.6762 2.22872 15.6762H5.52992V14.0256H2.22872V10.7244ZM2.22872 2.4714H5.52992V0.820801H2.22872C1.32089 0.820801 0.578125 1.56357 0.578125 2.4714V5.7726H2.22872V2.4714ZM8.00582 7.67713L8.64079 9.10554V8.24849V7.67713C8.64079 6.7693 8.91365 7.67713 8.00582 7.67713ZM8.64079 7.67713H8.00582L8.64079 8.24849C9.54862 8.24849 8.64079 8.58496 8.64079 7.67713Z"
          fill="#EAEAEB"
        />
      </svg>
    </Box>
  );
}

export default memo(OpenCodeIcon);
