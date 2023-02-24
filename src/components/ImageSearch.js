import React from "react";
import { useState } from "react";

const ImageSearch = ({searchText}) => {
    const [text,setText] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className="rounded mx-96 my-10 ">
            <form onSubmit={onSubmit}>
                <div className="flex px-16 ">
                    <input placeholder="Search..." className=" border-2 px-3 py-1.5 text-sm rounded mx-2" size={40} onChange={e => setText(e.target.value)} ></input>
                    <div className="rounded ">
                    <button className="rounded shadow-lg border-2 border-cyan-600 px-5 py-1.5 text-sm text-cyan-800 hover:bg-slate-100" type="submit" >Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;