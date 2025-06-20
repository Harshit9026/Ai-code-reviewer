import React from 'react';
import { Code2, Sparkles, Github, ShieldCheck, ChevronRight } from 'lucide-react';
import "./Landingpage.css"
import { useNavigate } from 'react-router-dom';

export default function Landingpage() {

  const navigate=useNavigate();

  const handlegetStarted =()=>{
    console.log("clicked");
    navigate('/review');
  };


  const features = [
    {
      icon: <Sparkles className="icon" />, 
      title: 'AI-Powered Insights',
      description: 'Instant code reviews with deep learning models trained on millions of codebases.'
    },
    {
      icon: <Code2 className="icon" />,
      title: 'Inline Suggestions',
      description: 'Get line-by-line recommendations right in your PRs.'
    },
    {
      icon: <Github className="icon" />,
      title: 'GitHub Integration',
      description: 'Seamlessly integrates with your repos to automate the review process.'
    },
    {
      icon: <ShieldCheck className="icon" />,
      title: 'Secure & Private',
      description: 'All your code stays private with enterprise-grade encryption.'
    }
  ];


  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container center">
          <h1 className="hero-title">
            Supercharge Your Code Reviews with <span className="highlight">AI</span>
          </h1>
          <p className="hero-subtitle">
            Automate, improve, and speed up your pull request reviews with intelligent suggestions.
          </p>
          <button  className="cta-button" onClick={handlegetStarted}>
            Get Started Free <ChevronRight className="icon-inline" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container center">
          <h2 className="section-title">Why Choose Our App?</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container center">
          <h2 className="section-title">Trusted by Developers Worldwide</h2>
          <p className="testimonial-text">“This AI tool saves hours on code reviews every week!” — Coming soon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} CodeAI Review. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}