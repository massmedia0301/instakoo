import React, { useState, useEffect } from 'react';
import { Platform, ServiceOption } from '../types';
import { SERVICE_OPTIONS } from '../constants';

const OrderForm: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>(Platform.YOUTUBE);
  const [selectedService, setSelectedService] = useState<string>('');
  const [url, setUrl] = useState('');
  const [quantity, setQuantity] = useState<number>(0);
  const [agreed, setAgreed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Filter services by platform
  const currentServices = SERVICE_OPTIONS.filter(s => s.platform === platform);
  
  // Get currently selected service object
  const currentServiceOption = SERVICE_OPTIONS.find(s => s.id === selectedService);

  // Default selection when platform changes
  useEffect(() => {
    if (currentServices.length > 0) {
      setSelectedService(currentServices[0].id);
      setQuantity(currentServices[0].minQuantity);
    }
  }, [platform]);

  // Calculate price
  const totalPrice = currentServiceOption ? quantity * currentServiceOption.pricePerUnit : 0;

  const handlePayment = async () => {
    if (!url) {
      alert('링크를 입력해주세요.');
      return;
    }
    if (!currentServiceOption) return;
    if (quantity < currentServiceOption.minQuantity) {
      alert(`최소 주문 수량은 ${currentServiceOption.minQuantity}개 입니다.`);
      return;
    }
    if (!agreed) {
      alert('이용약관에 동의해주세요.');
      return;
    }

    setIsProcessing(true);

    // Backend Interaction Simulation
    // In a real app, you would call your backend here: 
    // const res = await fetch('/api/payments/prepare', ...);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    // PG Integration Mock (PortOne / Iamport)
    // We assume window.IMP exists from the script loaded in index.html
    const { IMP } = window as any;
    
    if (IMP) {
        // Initialize with your generic user code (this is a demo key)
        IMP.init('imp00000000'); 
        
        // This is a DEMO. We will mock the success flow directly for the user interface
        // because we don't have a real merchant ID configured for this generated code.
        console.log("Requesting payment for:", totalPrice);
    }

    // Mock Success
    setTimeout(() => {
        setIsProcessing(false);
        setShowSuccessModal(true);
    }, 1000);
  };

  const getPlatformIcon = (p: Platform) => {
    switch (p) {
      case Platform.YOUTUBE: return <i className="fa-brands fa-youtube text-red-500"></i>;
      case Platform.INSTAGRAM: return <i className="fa-brands fa-instagram text-pink-500"></i>;
      case Platform.NAVER: return <span className="font-bold text-green-500 text-xs border border-green-500 rounded px-1">N</span>;
      case Platform.DANGGEUN: return <i className="fa-solid fa-carrot text-orange-500"></i>;
    }
  };

  const tabs = [
    { key: Platform.YOUTUBE, label: 'YouTube' },
    { key: Platform.INSTAGRAM, label: 'Instagram' },
    { key: Platform.NAVER, label: 'Naver' },
    { key: Platform.DANGGEUN, label: 'Danggeun' },
  ];

  return (
    <section id="order" className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-pink-100">
        <div className="bg-gradient-to-r from-primary to-primaryLight p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">간편 주문하기</h2>
          <p className="opacity-90">원하는 서비스를 선택하고 즉시 마케팅을 시작하세요.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setPlatform(tab.key)}
              className={`flex-1 py-4 px-2 font-bold text-lg transition-colors flex items-center justify-center gap-2 min-w-[120px] ${
                platform === tab.key 
                ? 'text-primary bg-white border-b-2 border-primary' 
                : 'text-gray-400 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {getPlatformIcon(tab.key)}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-10 space-y-6">
          
          {/* Service Selector */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">서비스 선택</label>
            <div className="relative">
              <select
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  const s = SERVICE_OPTIONS.find(opt => opt.id === e.target.value);
                  if (s) setQuantity(s.minQuantity);
                }}
                className="w-full appearance-none border-2 border-gray-200 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-gray-800 font-medium transition-colors"
              >
                {currentServices.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name} (개당 {service.pricePerUnit}원)
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            {currentServiceOption && (
              <p className="mt-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <i className="fa-solid fa-circle-info mr-2 text-primary"></i>
                {currentServiceOption.description}
              </p>
            )}
          </div>

          {/* Link Input */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              링크(URL) 입력
            </label>
            <input
              type="text"
              placeholder="https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <p className="text-xs text-gray-400 mt-1 ml-1">
              * 정확한 URL을 입력해야 작업이 시작됩니다.
            </p>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              수량 <span className="text-sm font-normal text-gray-500">(최소 {currentServiceOption?.minQuantity}개)</span>
            </label>
            <input
              type="number"
              value={quantity}
              min={currentServiceOption?.minQuantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border-2 border-gray-200 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          {/* Price Calculation */}
          <div className="bg-primaryBg rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 font-medium">
              <p>예상 완료 시간: <span className="text-dark font-bold">평균 1~3일</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">총 결제 금액</p>
              <p className="text-3xl font-extrabold text-primary">
                {totalPrice.toLocaleString()}원
              </p>
            </div>
          </div>

          {/* Agreement & Submit */}
          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer mb-6">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary" 
              />
              <span className="text-gray-600 text-sm">
                서비스 시작 후에는 취소/환불이 불가함을 확인했습니다.
              </span>
            </label>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 rounded-2xl text-white font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1 ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primaryLight hover:shadow-xl'
              }`}
            >
              {isProcessing ? '처리중...' : '결제하기'}
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSuccessModal(false)}></div>
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md relative z-10 text-center shadow-2xl animate-bounce-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-check text-2xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">주문이 완료되었습니다!</h3>
            <p className="text-gray-600 mb-6">
              주문하신 서비스가 곧 시작됩니다.<br/>
              주문번호: ORD-{Math.floor(Math.random() * 1000000)}
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">서비스</span>
                <span className="font-bold text-gray-800 text-sm text-right w-40 truncate">{currentServiceOption?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">수량</span>
                <span className="font-bold text-gray-800">{quantity.toLocaleString()}개</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-500">결제금액</span>
                <span className="font-bold text-primary">{totalPrice.toLocaleString()}원</span>
              </div>
            </div>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-dark text-white py-3 rounded-xl font-bold hover:bg-black transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderForm;