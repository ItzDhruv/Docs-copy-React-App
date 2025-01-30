import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
let ref = useRef(null)
  let data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".85mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".8mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".5mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Not Available",tagColor: "blue" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".7mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".97mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".93mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Copy Now",tagColor: "green" ,}
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. " ,
      filesize: ".94mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Not Available",tagColor: "Blue" ,}
    },
  ]


  return (
    <>
      <div ref={ref} className="fixed z-[3] w-full h-full flex gap-8 m-8 flex-wrap">
      {data.map((item,index)=>(
        <Card data={item} referance = {ref}/>
      ))}
      </div>
    </>
  )
}

export default Forground