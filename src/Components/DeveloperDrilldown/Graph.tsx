import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";
import React from "react";
import { ApexOptions } from "apexcharts";

const ChartSparklineOptions: ApexOptions = {
  chart: {
    background: "transparent",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,

    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["red"],
  dataLabels: {
    enabled: false,
  },
  theme: {
    mode: "light",
  },
  fill: {
    opacity: 1,
    colors: ["#4cc9f0"],
    type: "solid",
  },
  grid: {
    padding: {
      top: 2,
    },
  },
  stroke: {
    show: true,
    colors: ["#4cc9f0"],
    width: 4,
  },
  legend: {
    show: false,
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

interface GraphProps {
  data: number[];
  chartName: string;
  subtitle:string;
}

const Graph: React.FC<GraphProps> = ({ data, chartName, subtitle }) => {
  return (
    <Grid
      xs={4}
      item
      sx={{
        position: "relative",
      }}
    >
      <Divider orientation="vertical" absolute/>

      <Box
        component="span"
        sx={{
          display: { xs: "none", sm: "inline-block" },
        }}
      >
      </Box>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            {chartName}
          </Typography>
          <Typography variant="h5" sx={{fontWeight: "700"}}>
            {subtitle}
          </Typography>
        </Box>

        <Chart
          options={ChartSparklineOptions}
          series={[
            {
              name: chartName,
              data,
            },
          ]}
          type="line"
          height={55}
        />
      </Box>
      <Divider />
    </Grid>
  );
};

export default Graph;
