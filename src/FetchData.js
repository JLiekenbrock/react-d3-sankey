import { useEffect, useState } from 'react';

export default function FetchSankeyData() {

    const [sankeyData, setSankeyData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/api/links/getAll')
      .then(response => response.json())
      .then(response => setSankeyData(response))
    },[])

    return sankeyData;
}