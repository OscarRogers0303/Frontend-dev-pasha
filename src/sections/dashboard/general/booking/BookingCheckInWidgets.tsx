// hooks
import { ApexOptions } from "apexcharts";

// @mui
import { Card, CardProps, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import { Chart, useChart } from "@components";
import { useResponsive } from "@hooks";
// utils
import { fNumber } from "@utils";

// ----------------------------------------------------------------------

const CHART_SIZE = { width: 106, height: 106 };

interface Props extends CardProps {
  chart: {
    colors?: string[];
    series: Array<{
      label: string;
      percent: number;
      total: number;
    }>;
    options?: ApexOptions;
  };
}

export default function BookingCheckInWidgets({
  chart,
  ...other
}: Props): React.ReactElement | null {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "sm");

  const { colors, series, options } = chart;

  const chartOptionsCheckIn = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: -9,
        bottom: -9,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "64%" },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize as string,
          },
        },
      },
    },
    ...options,
  });

  const chartOptionsCheckOut = {
    ...chartOptionsCheckIn,
    colors,
  };

  return (
    <Card {...other}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        divider={
          <Divider
            orientation={isDesktop ? "vertical" : "horizontal"}
            flexItem
            sx={{ borderStyle: "dashed" }}
          />
        }
      >
        {series.map((item, index) => (
          <Stack
            key={item.label}
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={3}
            sx={{ width: 1, py: 5 }}
          >
            <Chart
              type="radialBar"
              series={[item.percent]}
              options={index === 1 ? chartOptionsCheckOut : chartOptionsCheckIn}
              {...CHART_SIZE}
            />

            <div>
              <Typography variant="h4" sx={{ mb: 0.5 }}>
                {fNumber(item.total)}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {item.label}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}