import useScrollProgress from '../../hooks/useScrollProgress';
import './ScrollProgress.css';

/**
 * ScrollProgress Component
 * Fixed progress bar at top of viewport
 */
const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div 
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
