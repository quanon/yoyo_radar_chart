import React from 'react';
import PropTypes from 'prop-types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

const YoyoRadarChart = ({ labels, values }) => {
  const data = labels.map((label, i) => ({
    subject: label,
    fullMark: 5,
    A: values[i]
  }));

  const Tick = (props) => {
    const { x, y, payload, textAnchor, index } = props;

    return (
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize={12}
        fill="#808080"
        dx={index === 1 ? -40 : 0}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <ResponsiveContainer>
      <RadarChart
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={<Tick />} />
        <PolarRadiusAxis angle={18} domain={[0, 5]} tickCount={6} tick={{ fontSize: '0.6rem' }} />
        <Radar
          dataKey="A"
          stroke="#1976d2"
          fill="#1976d2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

YoyoRadarChart.propTypes = {
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired
};

export default YoyoRadarChart;
