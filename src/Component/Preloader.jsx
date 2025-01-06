import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const textRef = useRef(null); 
  const [textWidth, setTextWidth] = useState(0); 

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-75" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-screen filter blur-xl animate-pulse delay-150" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Main text animation */}
        <div ref={textRef} className="mb-12">
          {'SHRIHARI'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block text-7xl font-bold text-white opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'forwards',
                textShadow: '0 0 20px rgba(255,255,255,0.5)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="h-1 bg-gray-800 rounded-full overflow-hidden"
          style={{
            width: textWidth, 
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress text */}
        <div className="mt-4 text-white font-mono text-sm tracking-wider">
          Loading {progress}%
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
  }
`;
document.head.appendChild(style);

export default Preloader;

Preloader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
