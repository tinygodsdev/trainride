import React from 'react';

function Flags({ kind, h, w }) {
  const flags = {
    "apinu": (
      <div className="apinu flex flex-col w-full h-full rounded-lg overflow-hidden">
        <div className={`h-1/4 bg-primary`}></div>
        <div className={`h-1/4 bg-default`}></div>
        <div className={`h-1/4 bg-primary`}></div>
        <div className={`h-1/4 bg-default`}></div>
      </div>
    ),
    "velvet": (
      <div className={`velvet flex flex-col w-full h-full rounded-lg overflow-hidden`}>
        <div className={`h-1/2 bg-white`}></div>
        <div className={`h-1/2 bg-blue-500`}></div>
      </div>
    ),
    "kepeken": (
      <div className={`kepeken flex flex-col w-full h-full rounded-lg overflow-hidden`}>
        <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <rect x="0" y="0" width="900" height="600" className='fill-white'></rect>
          <g transform="translate(450 314.0625)">
            <path d="M194.9 112.5C129.9 225 -129.9 225 -194.9 112.5C-259.8 0 -129.9 -225 0 -225C129.9 -225 259.8 0 194.9 112.5" className='fill-primary'>
            </path>
          </g>
        </svg>
      </div>
    ),
    "kepeken2": (
      <div className='kepeken flex flex-col w-full h-full rounded-lg overflow-hidden'>
        <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <rect x="0" y="0" className='fill-white' width="900" height="600"></rect>
          <g transform="translate(0 600)">
            <path d="M215 -372.3C279.9 -334.8 334.8 -279.9 372.3 -215C409.8 -150 429.9 -75 429.9 0C429.9 75 409.8 150 372.3 215C334.8 279.9 279.9 334.8 215 372.3C150 409.8 75 429.9 0 429.9C-75 429.9 -150 409.8 -215 372.3C-279.9 334.8 -334.8 279.9 -372.3 215C-409.8 150 -429.9 75 -429.9 0C-429.9 -75 -409.8 -150 -372.3 -215C-334.8 -279.9 -279.9 -334.8 -215 -372.3C-150 -409.8 -75 -429.9 0 -429.9C75 -429.9 150 -409.8 215 -372.3" fill="#715DF2"></path>
          </g>
          <g xmlns="http://www.w3.org/2000/svg" transform="translate(900 0)"><path d="M215 -372.3C279.9 -334.8 334.8 -279.9 372.3 -215C409.8 -150 429.9 -75 429.9 0C429.9 75 409.8 150 372.3 215C334.8 279.9 279.9 334.8 215 372.3C150 409.8 75 429.9 0 429.9C-75 429.9 -150 409.8 -215 372.3C-279.9 334.8 -334.8 279.9 -372.3 215C-409.8 150 -429.9 75 -429.9 0C-429.9 -75 -409.8 -150 -372.3 -215C-334.8 -279.9 -279.9 -334.8 -215 -372.3C-150 -409.8 -75 -429.9 0 -429.9C75 -429.9 150 -409.8 215 -372.3" fill="#715DF2"/></g>
        </svg>
      </div>
    ),
  }


  return (
    <div className='w-full h-full'>
      {flags[kind]}
    </div>
  );
}

export default Flags;
