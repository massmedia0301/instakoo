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
import RechargePage from './components/RechargePage';

type ViewState = 'home' | 'login' | 'signup' | 'recharge';

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

  const navigateToRecharge = () => {
    setCurrentView('recharge');
    window.scrollTo(0, 0);
  };

  if (currentView === 'login') {
    return <LoginPage onBack={navigateToHome} onSignup={navigateToSignup} />;
  }

  if (currentView === 'signup') {
    return <SignupPage onBack={navigateToHome} onLogin={navigateToLogin} />;
  }

  if (currentView === 'recharge') {
    return <RechargePage onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark">
      <Header onLogin={navigateToLogin} onSignup={navigateToSignup} onRecharge={navigateToRecharge} />
      <main className="flex-grow">
        <HeroBanner />
        
        {/* Order Form moved up */}
        <div className="relative z-10 -mt-6"> 
           {/* Added negative margin to pull overlapping effect up slightly */}
            <OrderForm />
        </div>

        {/* Stats Section moved down */}
        <StatsSection />
        
        <GuideSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;