import { useEffect, useState } from 'react';
import Papa from "papaparse";
import energy from './energy.csv';

export default function LoadSankeyData() {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        Papa.parse(energy, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: data => {
                setRows(data.data);
            }
        });
    }, []);
    
    return rows;
}