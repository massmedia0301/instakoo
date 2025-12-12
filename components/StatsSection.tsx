import React, { useEffect, useState, useRef } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <div className="text-center p-6 bg-white rounded-3xl shadow-soft">
        <h3 className="text-4xl font-bold text-primary mb-2">
          {count.toLocaleString()}{suffix}
        </h3>
        <p className="text-gray-500 font-medium">{label}</p>
      </div>
    );
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Counter end={125000} label="누적 주문 건수" suffix="+" />
        <Counter end={50} label="제공 중인 서비스" suffix="개" />
        <Counter end={98} label="고객 만족도" suffix="%" />
      </div>
    </div>
  );
};

export default StatsSection;