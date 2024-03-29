import { useRef, useEffect, useContext } from "react";

import SankeyFun from "./SankeyFun";

import { dataContext } from "./App";


function CallSankey() {

  const data = useContext(dataContext);

  var svgRef = useRef(null);

  useEffect(() => {
    SankeyFun(
      { links: data, svgRef },
      {
        nodeGroup: d => d.id.split(/\W/)[0], // take first word for color
        height: 1000,
        width: 2000
      }
    );
  }, [data]);

  return (
    <div className="sankey-chart">
      <svg ref={svgRef} />
    </div>
  );
}

export default CallSankey;
