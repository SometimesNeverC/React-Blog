import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/18.jpg'
import six from '../../assets/6.jpg'
import nineteen from '../../assets/19.jpg'
import twenty from '../../assets/20.jpg'
import twenty_one from '../../assets/21.jpg'


const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineContainerRef = useRef(null);

  const items = [
    { img: three, year: "2019", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: four, year: "2020", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: five, year: "2021", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: six, year: "2022", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: nineteen, year: "2023", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: twenty, year: "2024", desc: "相遇有时，后会无期", text: "《MIKU》" },
    { img: twenty_one, year: "2025", desc: "相遇有时，后会无期", text: "《MIKU》" },
  ];

  const [backgroundImage, setBackgroundImage] = useState(items[0]?.img || '');

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const itemsDom = container.querySelectorAll('.item');

      let currentIndex = 0;
      let minOffset = Infinity;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;

      itemsDom.forEach((itemEl, index) => {
        const rect = itemEl.getBoundingClientRect();
        // console.log(rect);
        const itemCenter = rect.top + rect.height / 2;
        const offsetToCenter = Math.abs(itemCenter - (containerTop + containerHeight / 2));

        if (offsetToCenter < minOffset) {
          minOffset = offsetToCenter;
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
      setBackgroundImage(items[currentIndex].img);
    };

    handleScroll(); // 初始化
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <div
      className='shell'
      id='shell'
      ref={timelineContainerRef}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='header_about'>
        <h2 className='title'>SometimesNever</h2>
      </div>
      <div className="timeline" >
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'item--active' : ''}`}
            data-text={`${item.text}`}
          >
            <div className="content_about">
              <img src={item.img} alt='' className='img_about' />
              <h2 className='content-title'>{item.year}</h2>
              <p className='content-desc'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Index;