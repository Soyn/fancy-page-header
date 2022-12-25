import './App.scss';
import { useRef, useState } from 'react';
function App() {
  const container = useRef(null);
  const [headerStyle, setHeaderStyle] = useState({});
  const onScroll = (e) => {
    const scrollTop = container.current.scrollTop;
    if (scrollTop > 0) {
      setHeaderStyle({
        boxShadow: 'inset 0 -1px 0 0 rgba(0,0,0,.1)',
        backdropFilter: 'saturate(180%) blur(5px)'
      });
    } else {
      setHeaderStyle({
        boxShadow: '0 0 #0000',
      });
    }
  }
  const scrollEffect = {
    transition: 'box-shadow .2s ease 0s,background-color .2s ease 0s',
  }
  return (
    <div ref={container} className="w-full h-full bg-white overflow-scroll"  onScroll={onScroll}>
      <div className='flex justify-between items-center w-full h-16 bg-transparent sticky top-0 left-0 shadow-none p-1 mb-4' style={{...scrollEffect, ...headerStyle}}>
        <span className='text-4xl'>LOGO</span>
        <span className='text-4xl'>TEXT-1</span>
        <span className='text-4xl'>TEXT-2</span>
      </div>
      <div className='page-content page-1'></div>
        <div className='page-content page-2'></div>
        <div className='page-content page-3'></div>
        <div className='page-content page-4'></div>
    </div>
  );
}

export default App;
