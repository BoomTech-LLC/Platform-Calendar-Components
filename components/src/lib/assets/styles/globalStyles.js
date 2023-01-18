import { createGlobalStyle } from 'styled-components';
import NameOfFontEot from './../fonts/icomoon.eot';
import NameOfFontWoff from './../fonts/icomoon.woff';
import NameOfFontTtf from './../fonts/icomoon.ttf';
import NameOfFontSvg from './../fonts/icomoon.svg';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'icomoon';
        src:  url('${NameOfFontEot}');
        src:  url('${NameOfFontEot}') format('embedded-opentype'),
        url('${NameOfFontTtf}') format('truetype'),
        url('${NameOfFontWoff}') format('woff'),
        url('${NameOfFontSvg}') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
    
    [class^="icon-"], [class*=" icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: never;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
    
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    [class^="icon-"]::before, 
    [class*=" icon-"]::before{
        font: inherit !important;
    }
    
    .icon-phone:before {
        content: "\\e550";
    }
    .icon-tag:before {
        content: "\\e551";
    }
    .icon-name:before {
        content: "\\e552";
    }
    .icon-apple:before {
        content: "\\e553";
        color: #7a95aa;
    }
    .icon-copy:before {
        content: "\\e554";
        color: #6b9ecb;
    }
    .icon-facebook:before {
        content: "\\e555";
        color: #0429b7;
    }
    .icon-world:before {
        content: "\\e556";
    }
    .icon-mail:before {
        content: "\\e557";
    }
    .icon-outlook:before {
        content: "\\e558";
        color: #0072c6;
    }
    .icon-google:before {
        content: "\\e559";
        color: #4285f4;
    }
    .icon-linkedin:before {
        content: "\\e560";
        color: #262ea1;
    }
    .icon-twitter:before {
        content: "\\e561";
        color: #03a9f4;
    }
    .icon-yahoo:before {
        content: "\\e562";
        color: #8f25a9;
    }
    .icon-clock:before {
        content: "\\e563";
    }
    .icon-date:before {
        content: "\\e564";
    }
    .icon-location:before {
        content: "\\e565";
    }
    .icon-ticket:before {
        content: "\\e566";
    }
    .icon-guests:before {
        content: "\\e900";
    }
`;

export default GlobalStyle;
