import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import UseDonation from '../../hook/UseDonation';

const colors = ['#0088FE', 'green', '#FFBB28', '#FF8042', 'red', 'pink'];



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


  const reads=read.map((book)=> book.category)
console.log(reads)

  const data = [
    {
      name: 'Adoles',
      uv:204,
      pv: reads,
      amt: reads,
    },
    {
      name: reads,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'shanto',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'adoles',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Adoles',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },

  ];

console.log(datas)

  return (
<div className='  lg:ml-[500px] w-[300px]   mt-16 pb-16 lg:pb-10'>

<BarChart

  width={400}
  height={400}
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
