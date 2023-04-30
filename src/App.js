import { useState, createContext, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import SankeySlider from "./SankeySlider";
import LoadSankeyData from "./LoadSankeyData";
//import FetchSankeyData from "./FetchSankeyData";
import CallSankey from "./CallSankey";

export const dataContext = createContext();


export default function App() {


  const [completeData, loadData] = useState([]);

  const [filteredData, filterData] = useState([]);

  const [minMax,setMinMax] = useState([])

  const [value1, setValue1] = useState([]);

  LoadSankeyData(loadData,filterData,setMinMax,setValue1);

  useEffect(() => {
    filterData(
      completeData.filter((d) => d.value >= value1[0] && d.value <= value1[1])
    );
  }, [value1,completeData]);

  return (
    <dataContext.Provider value = {filteredData}>
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mb: 5, mt:4 }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12}>
            <SankeySlider value = {value1} setValue = {setValue1} min = {minMax[0]} max = {minMax[1]}/>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid item xs={12}>
          {filteredData.length > 0 && <CallSankey />}
        </Grid>
      </Box>
    </Container>
    </dataContext.Provider>
  );
}
