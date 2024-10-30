"use client"
import { useState } from "react";
import Image from "next/image";
import listIcon from '../../../public/list.png';
import gridIcon from '../../../public/grid.png';
import sortIcon from '../../../public/sort.png';
import menuIcon from '../../../public/menu.png';

export default function ContentActions(){
    const [isListView, setIsListView]= useState(true);

    const handleToggleView=()=>{
        setIsListView(!isListView);
    }

    const handleSort=()=>{

    }

    const handleMenu=()=>{

    }

    return(
        <div className="flex h-10 gap-4 py-2">
            <div>
                <button className="" type="button" onClick={handleToggleView}>
                    {isListView?<Image className="w-6 h-6"src={listIcon} alt='list'/>
                    :<Image src={gridIcon} alt='grid'/>} 
                    </button>
            </div>
            <div>
                <button className="" type="button" onClick={handleSort}>
                   <Image className="w-6 h-6"src={sortIcon} alt='sort'/>           
               </button>
            </div>

            <div>
                <button className="" type="button" onClick={handleMenu}>
                   <Image className="w-6 h-6" src={menuIcon} alt='menu'/>           
               </button>
            </div>
        </div>
    )
}