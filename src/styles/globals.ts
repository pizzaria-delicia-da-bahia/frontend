import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../assets/images/pizzas_pattern.svg";
import Filter from "../assets/images/filter.svg";
import { breakpointsMQ } from "./mediaQueries";
import { colors } from "./colors";
// import InterFont from '../../public/fonts/Inter.ttf';

const Globals = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  /* src: url('/fonts/Inter.ttf') format('ttf'); */
  src: url('/fonts/Inter.ttf') format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}
::-moz-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${colors.background}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.elements}; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff; 
}

body{
  background-color: ${colors.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  inset: 0;
  overflow: hidden;

  &:after {
    /* content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh; 
    pointer-events: none;
    opacity: 100%;
    z-index: 999;
    background-size: cover;
    opacity: 0;
    
    background-image: url(${Filter.src});
    background-repeat: no-repeat;

    @supports ((mix-blend-mode: multiply)) {
      opacity: 1;
      mix-blend-mode: multiply;
    }; */
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    opacity: 15%;
    z-index: -1;
    background-image: url(${BackgroundImage.src});
    background-size: 60%;
      @media ${breakpointsMQ.tablet}{
        background-size: 40%;
      }
      @media ${breakpointsMQ.desktopSmUp}{
        background-size: 30%;
      }
      @media ${breakpointsMQ.tvSmUp}{
        background-size: 20%;
      }
    }

  }

  img{
    user-select: none;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      outline: none;
    }
`;

export default Globals;
