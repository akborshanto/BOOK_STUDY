import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import UseDonation from '../../hook/UseDonation';

const colors = ['#0085F6', '#00C29C', '#FBB929', '#FBB929', '#FBB929', '#00C29C'];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  const {data:datas}=UseDonation()
const [read,setRead]=useState([])

  //console.log(read)
  useEffect(() => {
    const getDefaultData = JSON.parse(localStorage.getItem("read")) || [];
    setRead(getDefaultData);

  }, []);


  const reads=read.map((book)=> book.totalPage)
  const readsBook=read.map((book)=> book.bookName.slice(0,5))
//console.log(reads)


  const data = [
    {
      name: readsBook[0],
      uv:reads[0],
      pv: reads.length,
      amt: reads,
    },
    
    {
      name: readsBook[1],
      uv:reads[1],
      pv:43 ,
      amt: reads,
    },
    {
      name: readsBook[2],
      uv:reads[2],
      pv: reads,
      amt: reads,
    },
    {
      name: readsBook[3],
      uv:reads[4],
      pv: reads,
      amt: reads,
    },
    
    {
   name: readsBook[4],
      uv:reads[5],
      pv: reads,
      amt: reads,
    },
    
    {
   name: readsBook[5],
      uv:reads[6],
      pv: reads,
      amt: reads,
    },
    

  ];

// if(reads.length ===0){
//   return "PLEASE ADD"
// }
  return (
<div className='  lg:ml-[500px] w-[300px]   mt-16 pb-16 lg:pb-10'>

<BarChart

  width={380}
  height={380}
  data={data}
  margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Bar dataKey="uv" fill="#fb5200" shape={<TriangleBar />} label={{ position: 'top' }}>
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
    ))}
  </Bar>
</BarChart>
</div>
  );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
