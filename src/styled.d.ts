// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            mint: string;
            black: string;
            blue: string;
            gray: string;
            lightGray: string;
            red: string;
            yellow: string;
        };
        shadows: {
            default: string;
        };
        fonts: {
            title: {
                fontWeight: number;
                fontSizeDesktop: string;
                fontSizeTablet: string;
                fontSizeMobile: string;
                lineHeightDesktop: number;
                lineHeightTablet: number;
                lineHeightMobile: number;
                letterSpacingMobile: string;
                color: string;
            };
            paragraph: {
                fontSizeDesktop: string;
                fontSizeTablet: string;
                lineHeight: string;
                letterSpacingTablet: string;
                letterSpacingMobile: string;
                color: string;
            };
            link: {
                fontSizeDesktop: string;
                fontSizeMobile: string;
                lineHeight: string;
                fontWeight: number;
                color: string;
            };
            caption: {
                fontSizeDesktop: string;
                fontSizeMobile: string;
                lineHeight: string;
                color: string;
            };
            cardTitle: {
                fontSize: string;
                fontWeight: number;
                color: string;
            };
        };
        container: {
            maxWidth: string;
            paddingDesktop: string;
            paddingLarge: string;
            paddingMedium: string;
            paddingSmall: string;
        };
    }
}
