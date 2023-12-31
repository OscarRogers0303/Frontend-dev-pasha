// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import SplitPane from "react-split-pane";

import { Box, Container } from "@mui/material";

import ChallengeTask from "./challenge-task";
import CodeTab from "./code-tab";

export default function ChallnegesBody(): React.ReactElement {
  return (
    <>
      <style>
        {`
          .Resizer {
            background: #000;
            opacity: 0.2;
            z-index: 1;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -moz-background-clip: padding;
            -webkit-background-clip: padding;
            background-clip: padding-box;
          }
          
          .Resizer:hover {
            -webkit-transition: all 2s ease;
            transition: all 2s ease;
          }
          
          .Resizer.horizontal {
            height: 11px;
            margin: -5px 0;
            border-top: 5px solid rgba(255, 255, 255, 0);
            border-bottom: 5px solid rgba(255, 255, 255, 0);
            cursor: row-resize;
            width: 100%;
          }
          
          .Resizer.horizontal:hover {
            border-top: 5px solid rgba(0, 0, 0, 0.5);
            border-bottom: 5px solid rgba(0, 0, 0, 0.5);
          }
          
          .Resizer.vertical {
            width: 11px;
            margin: 0 -5px;
            border-left: 5px solid rgba(255, 255, 255, 0);
            border-right: 5px solid rgba(255, 255, 255, 0);
            cursor: col-resize;
            position: initial;
          }
          
          .Resizer.vertical:hover {
            border-left: 5px solid rgba(0, 0, 0, 0.5);
            border-right: 5px solid rgba(0, 0, 0, 0.5);
          }
          .Resizer.disabled {
            cursor: not-allowed;
          }
          .Resizer.disabled:hover {
            border-color: transparent;
          }
          .SplitPane{
            height: calc(100vh - 40px)!important;
          }
        `}
      </style>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          position: "relative",
        }}
      >
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={-100}
          defaultSize={"50%"}
        >
          <ChallengeTask />
          <Box sx={{ height: "100%" }}>
            <CodeTab />
          </Box>
        </SplitPane>
      </Container>
    </>
  );
}
