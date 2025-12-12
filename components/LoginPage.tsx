import React from 'react';

interface LoginPageProps {
  onBack: () => void;
  onSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onSignup }) => {
  return (
    <div className="min-h-screen bg-primaryBg flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[40px] shadow-2xl w-full max-w-md animate-bounce-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform -rotate-12">
               <span className="text-white font-bold text-md italic">in</span>
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">instakoo</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">로그인</h2>
          <p className="text-gray-500 text-sm mt-1">서비스 이용을 위해 로그인해주세요.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">이메일</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">비밀번호</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="비밀번호 입력"
            />
          </div>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg hover:bg-primaryLight transition-colors">
            로그인
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
          <button className="hover:text-primary">아이디 찾기</button>
          <span className="h-3 w-px bg-gray-300"></span>
          <button className="hover:text-primary">비밀번호 찾기</button>
          <span className="h-3 w-px bg-gray-300"></span>
          <button onClick={onSignup} className="hover:text-primary font-bold">회원가입</button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
             <button 
                onClick={onBack}
                className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-dark transition-colors"
            >
                <i className="fa-solid fa-house"></i>
                홈으로 돌아가기
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;