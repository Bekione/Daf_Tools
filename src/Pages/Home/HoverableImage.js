import { useState } from 'react';

const HoverableImage = ({imgPath}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [boxShadow, setBoxShadow] = useState('none');
  
    const handleMouseMove = (e) => {
        const containerWidth = e.currentTarget.offsetWidth;
        const containerHeight = e.currentTarget.offsetHeight;
        const mouseX = e.pageX - e.currentTarget.offsetLeft - containerWidth / 2;
        const mouseY = e.pageY - e.currentTarget.offsetTop - containerHeight / 2;
        const newRotateX = isHovering ? -mouseY / containerHeight * 20 : 0;
        const newRotateY = isHovering ? mouseX / containerWidth * 20 : 0;
        setRotateX(newRotateX);
        setRotateY(newRotateY);

        const shadowX = (mouseX / containerWidth * 10).toFixed(2);
        const shadowY = (-mouseY / containerHeight * 10).toFixed(2);
        setBoxShadow(`${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.5)`);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
        
    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotateX(0);
        setRotateY(0);
        setBoxShadow('none');
    }
  return (
    <div className='about_mobile_img' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <img src={imgPath} alt='' className='' style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}/>
    </div>
  )
}

export default HoverableImage