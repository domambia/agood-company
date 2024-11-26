import { pixelToViewPortWidth } from "./common";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    a  {
        text-decoration: none;
        color:  #fff !important;
        
    }
    input,
    textarea,
    select{
        font-size: 16px;
    }
    :root {
        font-size: ${pixelToViewPortWidth(24)};

        @media (min-width: 768px) {
            font-size: ${pixelToViewPortWidth(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${pixelToViewPortWidth(16)};
        }
    }
    body {
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
        font-size: 87.5%;
        height: 100vh;
        max-width: 75rem;
        line-height: 1.5;
    }
`;
