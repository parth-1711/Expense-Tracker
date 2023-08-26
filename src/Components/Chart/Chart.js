import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues=props.dataPoints.map(datapoint=>{return datapoint.value});
  
  const totalMaximum= Math.max(...dataPointValues)
  // console.log(totalMaximum);
  return <div className='chart'>
    {props.dataPoints.map((datapoint) => {
    return (
      <ChartBar
        
        value={datapoint.value}
        maxValue={totalMaximum}
        key={datapoint.label}
        label={datapoint.label}
      />
    );
  })}
  </div> 
};

export default Chart;
