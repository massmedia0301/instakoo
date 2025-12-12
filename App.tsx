import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import StatsSection from './components/StatsSection';
import OrderForm from './components/OrderForm';
import GuideSection from './components/GuideSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

type ViewState = 'home' | 'login' | 'signup';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToLogin = () => {
    setCurrentView('login');
    window.scrollTo(0, 0);
  };

  const navigateToSignup = () => {
    setCurrentView('signup');
    window.scrollTo(0, 0);
  };

  if (currentView === 'login') {
    return <LoginPage onBack={navigateToHome} onSignup={navigateToSignup} />;
  }

  if (currentView === 'signup') {
    return <SignupPage onBack={navigateToHome} onLogin={navigateToLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark">
      <Header onLogin={navigateToLogin} onSignup={navigateToSignup} />
      <main className="flex-grow">
        <HeroBanner />
        <StatsSection />
        <div className="relative">
            {/* Background decoration for order section */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/50 -z-10 rounded-b-[50px]"></div>
            <OrderForm />
        </div>
        <GuideSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;