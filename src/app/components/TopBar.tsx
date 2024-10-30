'use client'
import { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Search from './Search';
export default function TopBar({data, selectedPath}){
    const [searchKey, setSearchKey] = useState('');

    const handleSearch = (value:string) => {
        setSearchKey(value);
      };

    return(
        <div className='flex px-10 py-2 justify-between items-center border-b'>
           <Breadcrumb path={selectedPath}/>
           <Search
           placeholder="Search here..."
           value={searchKey}
           handleChange={handleSearch}
        />
        </div>
    )
}