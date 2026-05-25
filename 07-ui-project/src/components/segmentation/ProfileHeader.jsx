import React from 'react';
import profilePic from '../../assets/profile_pic.png';

const ProfileHeader = () => {
  return (
    <div className="w-full max-w-6xl mb-10 md:mb-12 flex items-center gap-6 md:gap-8 px-4 md:px-12 pt-12 md:pt-0">
      <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden shadow-md shrink-0">
        <img src={profilePic} alt="Sasha Profile" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-[24px] md:text-[34px] font-bold text-[#2d3138] tracking-[0.03em] uppercase mb-1 md:mb-2">
          PRESENTATION DESIGN
        </h2>
        <p className="text-[16px] md:text-[22px] text-gray-500 font-normal">
          Для заказа пишите в tg: @SashaS45
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
