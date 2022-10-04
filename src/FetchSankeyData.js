import { useEffect, useState } from 'react';

export default function FetchSankeyData(load,filterData) {

  const setInit = load;
  const setSankeyData = filterData;

    useEffect(() => {
      fetch('http://localhost:3001/api/links/getAll')
      .then(response => response.json())
      .then(response => {
        setSankeyData(response);
        setInit(response)
        })
    },[])
}