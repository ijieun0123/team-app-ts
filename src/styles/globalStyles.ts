import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* ===== cabin font ===== */
    @import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap");

    /* ===== reset ===== */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-family: Cabin, "Noto Sans KR", sans-serif;
        font-size: 16px;
        background-color: #fff;
        color: ${props => props.theme.colors.black};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    img,
    video {
        max-width: 100%;
        display: block;
    }

    ul,
    ol,
    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    input,
    textarea {
        font-family: inherit;
        border: none;
        outline: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* ===== root ===== */
    :root {
        --mint-color: #1fcdcd;
        --black-color: #25313c;
        --blue-color: #3a46f7;
        --gray-color: #515c6f;
        --light-gray-color: #e5e5e5;
        --red-color: #fc4a17;
        --yellow-color: #ffb33a;
        --shadow-color: 0px 15px 40px 0px rgba(37, 49, 60, 0.05);
    }

    /* ===== container ===== */
    .container {
        max-width: ${props => props.theme.container.maxWidth};
        margin: 0 auto;
        padding: 0 ${props => props.theme.container.paddingDesktop};
    }

    @media (max-width: 1200px) {
        .container {
            padding: 0 ${props => props.theme.container.paddingLarge};
        }
    }

    @media (max-width: 1024px) {
        .container {
            padding: 0 ${props => props.theme.container.paddingMedium};
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 ${props => props.theme.container.paddingSmall};
        }
    }

    /* ===== fonts ===== */
    .title {
        font-weight: ${props => props.theme.fonts.title.fontWeight};
        font-size: ${props => props.theme.fonts.title.fontSizeDesktop};
        line-height: ${props => props.theme.fonts.title.lineHeightDesktop};
        color: ${props => props.theme.fonts.title.color};
    }
    .paragraph {
        font-size: ${props => props.theme.fonts.paragraph.fontSizeDesktop};
        line-height: ${props => props.theme.fonts.paragraph.lineHeight};
        color: ${props => props.theme.fonts.paragraph.color};
    }
    .link {
        font-size: ${props => props.theme.fonts.link.fontSizeDesktop};
        line-height: ${props => props.theme.fonts.link.lineHeight};
        color: ${props => props.theme.fonts.link.color};
        font-weight: ${props => props.theme.fonts.link.fontWeight};
    }
    .caption {
        font-size: ${props => props.theme.fonts.caption.fontSizeDesktop};
        line-height: ${props => props.theme.fonts.caption.lineHeight};
        color: ${props => props.theme.fonts.caption.color};
    }
    .card_title {
        font-size: ${props => props.theme.fonts.cardTitle.fontSize};
        font-weight: ${props => props.theme.fonts.cardTitle.fontWeight};
        color: ${props => props.theme.fonts.cardTitle.color};
    }

    @media (max-width: 1024px) {
        .title {
            font-size: ${props => props.theme.fonts.title.fontSizeTablet};
            line-height: ${props => props.theme.fonts.title.lineHeightTablet};
        }
        .paragraph {
            font-size: ${props => props.theme.fonts.paragraph.fontSizeTablet};
            letter-spacing: ${props =>
                props.theme.fonts.paragraph.letterSpacingTablet};
        }
    }

    @media (max-width: 768px) {
        .link {
            font-size: ${props => props.theme.fonts.link.fontSizeMobile};
        }
        .caption {
            font-size: ${props => props.theme.fonts.caption.fontSizeMobile};
        }
    }

    @media (max-width: 480px) {
        .title {
            font-size: ${props => props.theme.fonts.title.fontSizeMobile};
            line-height: ${props => props.theme.fonts.title.lineHeightMobile};
            letter-spacing: ${props =>
                props.theme.fonts.title.letterSpacingMobile};
        }
        .paragraph {
            letter-spacing: ${props =>
                props.theme.fonts.paragraph.letterSpacingMobile};
        }
    }
`;

export default GlobalStyle;
