import { useEffect, useState } from 'react';

export default function FetchSankeyData(load,filterData,minMax,initSlider) {

  const setInit = load;
  const setSankeyData = filterData;
  const setMinMax = minMax;
  const setMinMax2 = initSlider;

    useEffect(() => {
      fetch('http://localhost:3001/api/links/getAll')
      .then(response => response.json())
      .then(response => {
        setSankeyData(response);
        setInit(response);
        setMinMax([Math.min(...response.map(o=>o.value)),Math.max(...response.map(o=>o.value))])
        setMinMax2([Math.min(...response.map(o=>o.value)),Math.max(...response.map(o=>o.value))])
        })
    },[])
}