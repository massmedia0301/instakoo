import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '주문하기', href: '#order' },
    { name: '서비스 안내', href: '#guide' },
    { name: '충전하기', href: '#' },
    { name: '고객센터', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }} className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
             <span className="text-white font-bold text-xl italic">in</span>
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">instakoo</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={onLogin}
              className="text-primary font-medium hover:text-primaryLight transition-colors"
            >
              로그인
            </button>
            <button 
              onClick={onSignup}
              className="bg-primary hover:bg-primaryLight text-white px-5 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              회원가입
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-[80%] max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold text-primary">instakoo</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 text-2xl">
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onLogin(); }}
                className="w-full py-3 rounded-xl border border-primary text-primary font-bold"
              >
                로그인
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onSignup(); }}
                className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;