import { useState } from 'react'
import './App.css'
import DimaIcon from './icon/dimaIcon/DimaIcon'
import { ICON_COLLECTION } from './icon/dimaIcon/ICON_COLLECTION'
import type { TIconName } from './icon/type'


function App() {
  const [search, setSearch] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState(24)
  const iconSize = [
    { label: 'xs', value: '16' },
    { label: 'sm', value: '20' },
    { label: 'md', value: '24' },
    { label: 'lg', value: '32' },
    { label: 'xl', value: '48' },
  ]
  const icons = (Object.keys(ICON_COLLECTION) as TIconName[])
    .filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='main-app bg-white'>
      <input placeholder="Search icon..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <input
        placeholder="Enter color like #000000"
        value={color}
        type='color'
        onChange={(e) => setColor(e.target.value)}
        style={{ marginLeft: 10 }}
      />
      <select value={size}
        onChange={(e) => setSize(Number(e.target.value))}>
        {iconSize.map(item => (
          <option key={item.label} value={item.value}>
            {item.label} ({item.value}px)
          </option>
        ))}
      </select>
      <div className='max-w-full h-full flex gap-y-15  gap-x-5 flex-wrap mx-20'>
        {icons.map((name) => (
          <div  key={name} className='w-full flex flex-col  justify-between items-center gap-5 flex-1 '>
            <DimaIcon
              name={name}
              size={size}
              color={color}
            />
            <p className='w-full text-center'>{name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
export default App
