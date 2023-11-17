import { Divider } from '@nextui-org/react';
import React from 'react';

const ChatWrapper = ({ children, imageUrl }) => {

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="">
      <Divider className='mt-3 bg-slate-800' />
      <div className="relative">
        <div className="absolute inset-0" style={style}></div>
        <div className={`absolute inset-0 bg-gradient-to-r from-background from-10% via-transparent via-50% to-background to-90%`} />
        <div className="inset-0 py-6">
          {children}
        </div>
      </div>
      <Divider className='mb-3 bg-slate-800' />
    </div>
  );
};

export default ChatWrapper;
