import { useState } from 'react';
import './App.css';
import DimaIcon from './icon/dimaIcon/DimaIcon';
import { ICON_COLLECTION } from './icon/dimaIcon/ICON_COLLECTION';
import type { TIconName } from './icon/type';

function App() {
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(24);

  const iconSize = [
    { label: 'xs', value: '16' },
    { label: 'sm', value: '20' },
    { label: 'md', value: '24' },
    { label: 'lg', value: '32' },
    { label: 'xl', value: '48' },
  ];

  const icons = (Object.keys(ICON_COLLECTION) as TIconName[])
    .filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className='max-w-full bg-white py-10 flex flex-row justify-between items-start mx-20 gap-10'>
      <div className='w-3/4 h-full flex gap-y-15 gap-x-5 flex-wrap px-10 overflow-y-auto'>
        {icons.map((name) => (
          <div key={name} className='w-full flex flex-col justify-between items-center gap-3 flex-1 '>
            <DimaIcon
              name={name}
              size={size}
              color={color}
            />
            <p className='w-full text-center text-gray-500'>{name}</p>
          </div>
        ))}
      </div>
      <div className='w-1/4 flex flex-col justify-start items-right gap-5 border-left-solid border-left-[#000000] h-screen fixed right-0 top-0 pt-16 pr-8'>
        <p className='-mb-4'>search</p>
        <div className="relative w-full">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <DimaIcon
              name={'Search'}
              size={24}
              color={'#666666'}
            />
          </div>
          <input
            placeholder="Search icon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-3 w-full h-[36px] rounded-xl border border-gray-200 bg-white
               shadow-sm placeholder:text-gray-400
               focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400
               transition"
          />
        </div>
        <p className='-mb-4'>select color</p>
        <div className="relative w-full">

          <input
            placeholder="Enter color"
            value={color}
            type='color'
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-[36px] rounded-xl border border-gray-200 bg-white p-1
                       focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400
                       cursor-pointer"
            style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">Color</span>
        </div>
        <p className='-mb-4'>select size</p>
        <div className="relative w-full">

          <select value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="pl-3 pr-3 w-full h-[36px] rounded-xl border border-gray-200 bg-white
                       appearance-none  bg-no-repeat
                       focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400
                       transition"
          >
            {iconSize.map(item => (
              <option key={item.label} value={item.value}>
                {item.label} ({item.value}px)
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;