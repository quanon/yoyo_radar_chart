import React from 'react';
import './App.css';
import YoyoName from './components/YoyoName';
import YoyoRadarChart from './components/YoyoRadarChart';
import SpecSlider from './components/SpecSlider';
import Footer from './components/Footer';
import { useQueryState } from './useQueryState';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const axises = [
  {
    label: '安定性',
    description: 'Stability',
    defaultValue: 3
  },
  {
    label: 'コントロール',
    description: 'Controll',
    defaultValue: 3
  },
  {
    label: '加速性',
    description: 'Acceralation',
    defaultValue: 3
  },
  {
    label: '最高速度',
    description: 'Max speed',
    defaultValue: 3
  },
  {
    label: '回転力',
    description: 'Rotation power',
    defaultValue: 3
  }
];

const App = () => {
  const [name, setName] = useQueryState('name');
  const [values, setValues] = useQueryState('values', axises.map((axis) => axis.defaultValue));
  const setValueAt = (index) => (value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <Box sx={{ px: 1.5 }}>
      <Grid container rowSpacing={0.5} columnSpacing={2}>
        <Grid size={2} />
        <Grid size={8}>
          <Box display="flex" alignItems="center" justifyContent="center" pt={1}>
            <Box width={200}>
              <YoyoName name={name} setName={setName} />
            </Box>
          </Box>
        </Grid>
        <Grid size={2} />
        <Grid size={12}>
          <YoyoRadarChart labels={axises.map((axis) => axis.label)} values={values} />
        </Grid>
        {axises.map((axis, i) => (
            <Grid size={6} key={`slider-wrapper-${i}`}>
              <SpecSlider
                index={i}
                label={axis.label}
                description={axis.description}
                value={values[i]}
                setValue={setValueAt(i)}
              />
            </Grid>
        ))}
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
