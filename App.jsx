import Strands from './strands.jsx';
import SplashCursor from './SplashCursor.jsx';

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#09090b',
        overflow: 'hidden',
      }}
    >
      {/* Interactive Fluid Splash Cursor */}
      <SplashCursor />

      {/* Background WebGL Animation */}
      <Strands
        colors={['#F97316', '#7C3AED', '#06B6D4']}
        count={4}
        speed={0.8}
        amplitude={1.2}
        waviness={1.5}
        thickness={1.0}
        glow={3.0}
        taper={3}
        spread={1.2}
        intensity={1.0}
        saturation={1.5}
        opacity={1}
        scale={1.5}
      />

      {/* Overlay Text Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '90%',
          maxWidth: '900px',
        }}
      >
        <h1
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: '#ffffff',
            textShadow: '0 10px 30px rgba(0,0,0,0.9), 0 0 40px rgba(249,115,22,0.4)',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Use More Bacon
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            fontWeight: 400,
            maxWidth: '550px',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            margin: 0,
          }}
        >
          Interactive Strands by le J le 100% Bacon
        </p>
      </div>
    </div>
  );
}
