import React from 'react';
import ProfileHeader from './ProfileHeader';
import SidebarInfo from './SidebarInfo';
import SegmentationCards from './SegmentationCards';

const CustomerSegmentation = () => {
  return (
    <div className="min-h-screen bg-[#dce1e6] flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      {/* Global SVG filter for gooey effects in buttons */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
      </svg>

      <ProfileHeader />

      {/* Main Card */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-16 shadow-lg relative">
        <SidebarInfo />
        <SegmentationCards />
      </div>
    </div>
  );
};

export default CustomerSegmentation;
