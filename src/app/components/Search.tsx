import Image from 'next/image';
import  searchIcon from './../../../public/search.png';

export default function Search({
  placeholder, handleChange, value
}) {
 return(
    <div className="flex items-center border gap-3 border-border-border_1 rounded-lg">
      <Image className='w-6 h-6' src={searchIcon} alt='search'/>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => (handleChange(e.target.value))}
        value={value}
        className=" font-regular bg-base-white outline-none text-sm w-40"
      />
    </div>
  );
} 
