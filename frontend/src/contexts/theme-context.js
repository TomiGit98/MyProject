import React from "react";

export const themes = {
    customTheme: {
        primaryColor: '#FFFFFF',
        secondaryColor: '#EEEEEE',
        thirdColor: '#333333',
        primaryTextColor: '#000000',
        secondaryTextColor: '#555555',
        borderPrimary: '1px solid #555555',
        boxShadow: '0px 0px 5px rgba(200 200 200 / 0.1)',
    },
    light: {
        primaryColor: '#FFFFFF',
        secondaryColor: '#EEEEEE',
        thirdColor: '#FFFFFF',
        primaryTextColor: '#000000',
        secondaryTextColor: '#555555',
        borderPrimary: '1px solid #DDDDDD',
        boxShadow: '0px 0px 5px rgba(200 200 200 / 0.1)',
    },
    dark: {
        primaryColor: '#111111',
        secondaryColor: '#000000',
        thirdColor: '#111111',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: '#BBBBBB',
        borderPrimary: '1px solid #333333',
        boxShadow: '0px 0px 5px rgba(200 200 200 / 0.1)',
    },
};

export const ThemeContext = React.createContext(
    themes.dark
)