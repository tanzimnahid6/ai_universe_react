import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data,setData] = useState([])
    const [showAll,setShowAll] = useState(false)
    const [uniqueId,setUniqueId] = useState(null)
    const [modalData,setModalData] = useState({})
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
         .then(res=>res.json())
         .then(allData=>setData(allData.data.tools))
    },[])
    
    const handleId = (id)=>{
        setUniqueId(id)
    }
    useEffect(()=>{
        const URL = `https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`
        fetch(URL)
         .then(res=>res.json())
         .then(data=>setModalData(data)) 
    },[uniqueId])

    return (
        <>
            <div className=' grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:px-12 mx-auto gap-5 my-6'>
            {data.slice(0,showAll ? 12 : 6).map(singleData=><SingleData handleId ={handleId} key={singleData.id} singleData={singleData}></SingleData>)}
            </div>
            {
              ! showAll && <span onClick={()=>setShowAll(true)}><Button>See More</Button></span>
            }
          <Modal uniqueId={uniqueId} modalData={modalData}></Modal>    
        </>
        
    );
};

export default Card;