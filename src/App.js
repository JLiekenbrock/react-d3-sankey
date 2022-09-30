import './App.css';
import { useState } from 'react';

import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LoadSankeyData from './LoadSankeyData';
import CallSankey from './CallSankey';

export default function App() {

  var data = LoadSankeyData()
  console.log(data)

  const [data1, setData1] = useState([]);

  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 1;

  const [value1, setValue1] = useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    setData1(data.filter((d) => d.value >= newValue[0] && d.value <= newValue[1]))
    console.log(data1)
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, height: '100%' }}>
        <Grid item xs={12}>
          {data1.length > 0 && <CallSankey data={data1} />}
        </Grid>
      </Box>
    </Container>

  );
}
