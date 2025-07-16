import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        mint: "#1fcdcd",
        black: "#25313c",
        blue: "#3a46f7",
        gray: "#515c6f",
        lightGray: "#e5e5e5",
        red: "#fc4a17",
        yellow: "#ffb33a",
    },
    shadows: {
        default: "0px 15px 40px 0px rgba(37, 49, 60, 0.05)",
    },
    fonts: {
        title: {
            fontWeight: 500,
            fontSizeDesktop: "48px",
            fontSizeTablet: "40px",
            fontSizeMobile: "35px",
            lineHeightDesktop: 1.21,
            lineHeightTablet: 1.325,
            lineHeightMobile: 1.25,
            letterSpacingMobile: "-0.8px",
            color: "#25313c", // black-color
        },
        paragraph: {
            fontSizeDesktop: "18px",
            fontSizeTablet: "16px",
            lineHeight: "163.2%",
            letterSpacingTablet: "-0.3px",
            letterSpacingMobile: "-0.5px",
            color: "#515c6f", // gray-color
        },
        link: {
            fontSizeDesktop: "16px",
            fontSizeMobile: "14px",
            lineHeight: "175.7%",
            fontWeight: 500,
            color: "#3a46f7", // blue-color
        },
        caption: {
            fontSizeDesktop: "14px",
            fontSizeMobile: "12px",
            lineHeight: "150.6%",
            color: "#515c6f", // gray-color
        },
        cardTitle: {
            fontSize: "24px",
            fontWeight: 500,
            color: "#25313c", // black-color
        },
    },
    container: {
        maxWidth: "1440px",
        paddingDesktop: "140px",
        paddingLarge: "50px",
        paddingMedium: "32px",
        paddingSmall: "16px",
    },
};
