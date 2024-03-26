import React, { useEffect, useState } from 'react'

const UseDonation = () => {
const [data,setData]=useState([])
const [loading,setLoaing]=useState(true)

useEffect(()=>{

const fetchData=async ()=>{

const res=await fetch ('/data.json')
const data=await res.json()
setData(data)
setLoaing(false)

}
fetchData()


},[])



  return {data,loading}
}

export default UseDonation
