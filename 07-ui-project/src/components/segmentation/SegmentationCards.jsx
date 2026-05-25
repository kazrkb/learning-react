import React, { useState, useRef, useEffect } from 'react';
import CustomerCard from './CustomerCard';
import womanPhone from '../../assets/woman_phone.png';
import handsPhone from '../../assets/hands_phone.png';
import manPhone from '../../assets/man_phone.png';

const SegmentationCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Track scrolling to update the active dot
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Trigger when 60% of the card is visible
      }
    );

    const cards = container.querySelectorAll('.snap-start');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cardsData = [
    {
      imageSrc: womanPhone,
      altText: "Prime customer satisfied",
      number: "1",
      text: "Prime customers, that have access to bank credit and are satisfied with the current product",
      buttonText: "Satisfied",
      buttonColor: "bg-[#4a63ff]"
    },
    {
      imageSrc: handsPhone,
      altText: "Prime customer underserved",
      number: "2",
      text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      buttonText: "Underserved",
      buttonColor: "bg-[#4a63ff]"
    },
    {
      imageSrc: manPhone,
      altText: "Underbanked customer",
      number: "3",
      text: "Customers from near-prime and sub-prime segments with no access to bank credit",
      buttonText: "Underbanked",
      buttonColor: "bg-[#bdf34a]",
      buttonTextColor: "text-[#1a1a1a]"
    },
    {
      imageSrc: womanPhone,
      altText: "Future growth segment",
      number: "4",
      text: "Young professionals seeking digital-first banking and integrated wealth management solutions",
      buttonText: "Digital Native",
      buttonColor: "bg-[#ff4a7d]"
    },
    {
      imageSrc: handsPhone,
      altText: "SME segment",
      number: "5",
      text: "Small business owners looking for integrated accounting software and quick credit facilities",
      buttonText: "Business",
      buttonColor: "bg-[#ff9e4a]",
      buttonTextColor: "text-[#1a1a1a]"
    }
  ];

  return (
    <div className="w-full lg:w-[65%] flex flex-col min-w-0">
      {/* Top right label */}
      <div className="flex justify-start lg:justify-end items-center text-[10px] font-bold text-gray-500 tracking-[0.15em] mb-6 lg:mb-8 uppercase">
        <span className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[135deg]">
            <polyline points="15 10 20 15 15 20"></polyline>
            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
          </svg>
          DIGITAL BANKING PLATFORM
        </span>
      </div>
      
      {/* Cards container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory flex-1 lg:min-h-[460px] pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {cardsData.map((card, index) => (
          <div 
            key={index}
            data-index={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start flex"
          >
            <CustomerCard {...card} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-4 pb-2">
        {cardsData.map((_, index) => (
          <div 
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-6 bg-[#1a1a1a]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SegmentationCards;
