import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black z-50">
      <div className="text-white text-6xl font-bold">
        <div className="text-6xl font-extrabold text-center animate-preloadtyping overflow-hidden whitespace-nowrap">
          Welcome
        </div>
      </div>
    </div>
  );
}

Preloader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
