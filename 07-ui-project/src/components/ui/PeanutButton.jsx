import React from 'react';

const PeanutButton = ({ text, color, textColor = "text-white" }) => {
  return (
    <div className="relative inline-flex items-center group cursor-pointer w-max hover:opacity-90 transition-opacity">
      {/* Gooey Background Layer */}
      <div 
        className="absolute inset-[-10px] z-0 flex items-center justify-center pointer-events-none" 
        style={{ filter: "url(#gooey)" }}
      >
        <div className={`h-[38px] rounded-full ${color} px-5 flex items-center shrink-0`} style={{ color: 'transparent' }}>
          <span className="text-[13px] font-medium">{text}</span>
        </div>
        <div className={`w-[38px] h-[38px] rounded-full shrink-0 ${color} -ml-2`}></div>
      </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 flex items-center h-[38px] pointer-events-none">
        <div className={`px-5 text-[13px] font-medium ${textColor}`}>
          {text}
        </div>
        <div className={`w-[38px] h-[38px] shrink-0 flex items-center justify-center ${textColor} -ml-2`}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PeanutButton;
