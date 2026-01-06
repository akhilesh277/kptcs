
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Simple "router" logic based on state
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'faculty': return <Faculty />;
      case 'resources': return <Resources />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="transition-opacity duration-300">
        {renderContent()}
      </div>
      <Chatbot />
    </Layout>
  );
};

export default App;
