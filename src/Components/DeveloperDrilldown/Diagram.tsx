import Chart from 'react-apexcharts';
import React from 'react'
import { ApexOptions } from 'apexcharts';

const chartOptions: ApexOptions = {
    stroke: {
      show: false
    },
    theme: {
      mode: 'light'
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
    },
    // markers: {
    //   hover: {
    //     sizeOffset: 2
    //   },
    //   shape: 'circle',
    //   size: 6,
    //   strokeWidth: 3,
    //   strokeOpacity: 1,
    //   strokeColors: theme.colors.alpha.white[100],
    //   colors: [theme.colors.error.main]
    // },
    colors: ["#ffb703"],
    fill: {
      opacity: 1
    },
    
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth:'25%',
      },
      
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: "#adb5bd"
        }
      }
    },
    yaxis: {
      show: false
    }
  };

interface DiagramProps{
    data: number[]
}

const Diagram :React.FC<DiagramProps> = ({data}) => {
    const chartData : ApexAxisChartSeries = [
        {
          name: 'Developer Drilldown',
          type: 'bar',
          data
        }
      ];

  return (
    <Chart
    options={chartOptions}
    series={chartData}
    type="bar"
    height={300}
    width={'100%'}
  />
  )
}

export default Diagram