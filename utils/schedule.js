export const ScheduledOptions = {
  chart: {
    type: "radialBar",
  },
  labels: ["Scheduled hour"],
  colors: ["#FF834D"],
  stroke: {
    lineCap: "round",
  },
  plotOptions: {
    radialBar: {
      startAngle: -95,
      endAngle: 95,
      offsetY: -30,
      offsetX: -15,
      track: {
        show: true,
        background: "#FF852D33",
        strokeWidth: "98%",
        margin: 6,
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: 0,
          fontSize: "12px",
          fontWeight: "500",
          color: "#8D91A5",
        },
        value: {
          offsetY: -35,
          fontSize: "20px",
          fontWeight: "600",
        },
      },
    },
  },
};

export const LoggedOptions = {
  chart: {
    type: "radialBar",
  },
  labels: ["Scheduled hour"],
  colors: ["#44A9F1"],
  stroke: {
    lineCap: "round",
  },
  plotOptions: {
    radialBar: {
      startAngle: -95,
      endAngle: 95,
      offsetY: -30,
      offsetX: 15,
      track: {
        show: true,
        background: "#44A9F133",
        strokeWidth: "98%",
        margin: 6,
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: 0,
          fontSize: "12px",
          fontWeight: "500",
          color: "#8D91A5",
        },
        value: {
          offsetY: -35,
          fontSize: "20px",
          fontWeight: "600",
        },
      },
    },
  },
};
