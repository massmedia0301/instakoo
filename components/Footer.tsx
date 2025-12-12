import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-800">instakoo</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              SNS 마케팅 자동화 플랫폼 인스타쿠.<br/>
              쉽고 빠르고 안전하게 계정을 성장시키세요.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <p><span className="font-bold">고객센터</span> 032-322-8571 (평일 10:00 ~ 18:00)</p>
            <p>이메일: help@instakoo.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">이용약관</a>
            <a href="#" className="hover:text-gray-600">개인정보처리방침</a>
          </div>
          <p>© 2025 instakoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;