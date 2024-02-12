import React from 'react'
import { Bar,  Line, Pie , Doughnut , PolarArea , Radar , Scatter , Bubble  } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
 
  Tooltip,
  plugins,
  scales,
 
} from 'chart.js';
import { label } from 'motion/react-client';

export default function Chart( props) {
    ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  
  Tooltip,
 
);
      const options = {
    responsive: true,
 
    scales:{
        x:{
        ticks: {
            display: (props?.last60sec || props?.last60min) ? false : true,
         },
            grid:{
                display: false,
            }
        },
        y:{
            display: false,
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
const getlast60minutes = () => {
    const minutes = [];
    const now = new Date();
    for (let i = 59; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000);
        minutes.push(time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }
    return minutes;
}
const getlast60seconds = () => {
    const seconds = [];
    const now = new Date();
    for (let i = 59; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 1000);
        seconds.push(time.toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' }));
    }
    return seconds;
}
      const data = {
    labels: props?.last60sec ? getlast60seconds() : props?.last60min ? getlast60minutes() : getLast7Days(),
    datasets: [
      {
        label: 'Sales 2026',
        data: props?.data,
        backgroundColor: 'rgba(254, 154, 0, 1)',
       barThickness: props?.last60sec ? 4 : props?.last60min ? 4 : 50,
       
       barPercentage: 0.5,
      },
      
    ],
  };
  return (

        <Bar padding={0} options={options} data={data} />
     
  )
}
