import React, { useState } from "react";

const ImageCard = ({ image }) => {
    // console.log(image.webformatURL);
    const tags = image.tags.split(',');
    
    return (
        <div className=" transition ease-in-out delay-150 max-w-sm rounded overflow-hidden shadow-lg my-4 hover:-translate-y-1 hover:scale-110" > 
      <img src={image.webformatURL} className="img w-96 h-72 "  ></img>
      <div className="bg-slate-50   mb-2  px-6 py-3 ">
        <div className="font-bold text-lg text-purple-400">Photo By {image.user}</div>
        <ul>
        <li className="text-sm"><strong>Views:</strong> {image.views}</li>
        <li className="text-sm"><strong>Downloads:</strong> {image.downloads}</li>
        <li className="text-sm"><strong>Likes:</strong> {image.likes}</li>
      </ul>
      <div className=" mt-7 ">
        {tags.map((tag,index) => (
             <span key ={index} className="inline-block py-1 px-2 text-center text-xs rounded-full bg-gray-200 mx-1.5">
             #{tag}
           </span>
        ))}
      </div>
      </div>
      
    </div> 
    )
}
export default ImageCard;