
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ProjectTracking from './components/ProjectTracking/ProjectTracking';
import ExploreFeatures from './components/ExploreFeatures/ExploreFeatures';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProjectTracking />
        <ExploreFeatures />
      </main>
    </div>
  );
}

export default App;