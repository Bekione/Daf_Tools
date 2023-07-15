import { useRef, useEffect, useState } from 'react';
import './style.css';

const HoverableImage = ({ src, alt }) => {
  const imageRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { top, left, width, height } = imageRef.current.getBoundingClientRect()
      const x = e.clientX - (left + width / 2)
      const y = e.clientY - (top + height / 2)

      setRotateX(-y / 20)
      setRotateY(x / 10)
    };

    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
    }

    const img = imageRef.current;
    img.addEventListener('mousemove', handleMouseMove)
    img.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      img.removeEventListener('mousemove', handleMouseMove)
      img.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="hoverable_image_perspective">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        className='hoverable_image'
      />
    </div>
  );
};

export default HoverableImage;