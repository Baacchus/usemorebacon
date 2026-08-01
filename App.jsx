import Strands from './strands.jsx';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#09090b' }}>
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
    </div>
  );
}
