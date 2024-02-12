
import React from 'react'
import { Bar,  Line, Pie , Doughnut , PolarArea , Radar , Scatter , Bubble  } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,      // ✅ X-axis ke liye
  LinearScale,        // ✅ Y-axis ke liye
  PointElement,       // ✅ Points ke liye (ye missing tha!)
  LineElement,        // ✅ Line ke liye
  Title,
  Tooltip,
  Filler
} from 'chart.js';
export default function LineChart(props) {
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
     const options = {
    responsive: true,
 
    scales:{
        x:{
            grid:{
                display: false,
            }
        },
        y:{
            // display: false,
            grid:{
                display: false,
            }
        }
    }
   
  };
    const getLast7Days = () => {
  const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }  
    return days;
}
const data = {
    labels: getLast7Days(),
    datasets: [
        {
            label: 'Orders',
            data: props.data,
            fill: true,
            borderColor: 'rgba(254, 154, 0, 1)',
            backgroundColor: 'rgba(254, 154, 0, 0.2)',
            tension: 0.1
        }
    ]
}
  return (
   <Line data={data} options={options} />
  )
}
