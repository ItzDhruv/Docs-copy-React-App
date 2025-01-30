import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"
function Card ({data , referance}) {

 // Function to copy text to clipboard
 const copyToClipboard = () => {
  navigator.clipboard.writeText(data.desc).then(() => {
    alert("Text copied to clipboard! ✅");
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
};

const [description, setDescription] = useState(data.desc);  // to alow set description

  return (
    <>
      <motion.div drag dragConstraints={referance} whileDrag={{scaleX : 1.2}} className="relative h-62 w-50 bg-zinc-900/90 rounded-[20%] text-white p-5 overflow-hidden">
        <FaRegFileAlt />
        {/* <p className="text-xs leading-tight mt-5">{data.desc}</p> */}
       
        <textarea 
          className="w-full mt-5 text-xs bg-transparent outline-none border border-zinc-700 p-2 rounded-md resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
        <div className="absolute footer  bottom-0 left-0  w-full ">

          <div className="flex items-center justify-between py-4 px-10 "> 
            <h5>{data.filesize}</h5>

            <span className="h-5 w-5 rounded-full bg-sky-400 flex items-center justify-center">
              {data.close ? <IoClose color='black' /> : <LuDownload size="0.8rem" color='black' /> }
            </span>
           </div>
            {data.tag.isOpen && (
              <div className={` py-2 w-full ${data.tag.tagColor == "blue" ? "bg-sky-600" : "bg-green-600"} flex justify-center `} onClick={copyToClipboard}> 
            {data.tag.tagTitle }
            </div>
            )}
        </div>



      </motion.div>
    </>
  )
}

export default Card