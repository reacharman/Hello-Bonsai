import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ProjectTracking from './components/ProjectTracking/ProjectTracking';
import MonitorUtilization from './components/MonitorUtilization/MonitorUtilization';
import TurningBillable from './components/TurningBillable/TurningBillable';
import ExploreFeatures from './components/ExploreFeatures/ExploreFeatures';
import GetStarted from './components/GetStarted/GetStarted';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProjectTracking />
        <MonitorUtilization />
        <TurningBillable />
        <ExploreFeatures />
        <GetStarted />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}