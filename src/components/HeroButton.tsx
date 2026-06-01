import styled from 'styled-components';

interface HeroButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string; // Accept incoming Tailwind layouts from parents
}

const HeroButton = ({ label = "Get in touch", onClick, className }: HeroButtonProps) => {
  return (
    // Pass className to the wrapper so Tailwind can control button width/flex states
    <StyledWrapper onClick={onClick} className={className}>
      <button>
        <div className="text">
          {label.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
        <div className="clone">
          {label.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
        <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Allow the component to scale full-width if the parent asks for it */
  width: 100%;
  
  @media (min-width: 640px) {
    width: auto;
  }

  button {
    width: 100%;
    min-width: 200px;
    height: 56px;
    overflow: hidden;
    border: none;
    color: #fff;
    background: none;
    position: relative;
    cursor: pointer;
    
    /* Changed: layout centered via flex instead of absolute baseline shifts */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 48px 0 24px; 
  }

  button > div {
    position: absolute;
    left: 24px; /* Hard align text container baseline */
    right: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  button:before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: currentColor;
    transition: transform 0.25s ease-out;
  }
  button:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  button .clone > *,
  button .text > * {
    opacity: 1;
    font-size: 1.1rem; /* Slightly balanced text footprint for mobile display sizes */
    transition: 0.2s;
    margin-right: 4px;
  }
  
  @media (min-width: 768px) {
    button .clone > *,
    button .text > * {
      font-size: 1.3rem;
    }
  }

  button .clone > * {
    transform: translateY(40px);
  }
  button:hover .clone > * {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
  button:hover .text > * {
    opacity: 1;
    transform: translateY(-40px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
  button:hover .clone > :nth-child(1) { transition-delay: 0.05s; }
  button:hover .clone > :nth-child(2) { transition-delay: 0.1s; }
  button:hover .clone > :nth-child(3) { transition-delay: 0.15s; }
  button:hover .clone > :nth-child(4) { transition-delay: 0.2s; }
  
  button svg {
    position: absolute;
    width: 18px;
    height: 18px;
    right: 24px; /* Keeps the arrow securely locked inside layout borders */
    top: 50%;
    transform: translateY(-50%) rotate(-40deg);
    transition: 0.2s ease-out;
  }
  button:hover svg {
    transform: translateY(-50%) rotate(-90deg);
  }
`;

export default HeroButton;