import React from 'react';
import PeanutButton from '../ui/PeanutButton';

const CustomerCard = ({ imageSrc, number, text, buttonText, buttonColor, buttonTextColor = "text-white", altText }) => {
  return (
    <div className="relative rounded-[1.5rem] overflow-hidden bg-gray-200 group h-[400px] lg:h-full w-full shadow-sm flex flex-col justify-between">
      <img src={imageSrc} alt={altText} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-between p-5 lg:p-6 z-10">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[11px] font-bold text-gray-900 shadow-sm">{number}</div>
        <div>
          <p className="text-[#f5f5f5] text-[13px] leading-tight mb-5 font-normal">
            {text}
          </p>
          <PeanutButton text={buttonText} color={buttonColor} textColor={buttonTextColor} />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
