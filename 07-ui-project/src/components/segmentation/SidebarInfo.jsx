import React from 'react';

const SidebarInfo = () => {
  return (
    <div className="w-full lg:w-[35%] flex flex-col justify-between">
      <div>
        <div className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1.5 rounded-full inline-block mb-8 lg:mb-16 tracking-wider">
          TARGET AUDIENCE
        </div>
        <h1 className="text-4xl lg:text-[44px] font-semibold leading-[1.1] mb-6 text-[#1a1a1a] tracking-tight">
          Prospective<br />customer<br />segmentation
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-[280px]">
          Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
        </p>
      </div>
      
      {/* Arrow bottom left */}
      <div className="hidden lg:block text-2xl mt-12">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default SidebarInfo;
