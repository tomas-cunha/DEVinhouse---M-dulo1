const THEME = 'THEME';

export const getThemeLS = () => {
    return localStorage.getItem(THEME);
    
}

export const setThemeLS = (value) => {
    return localStorage.setItem(THEME, value)
}

export const clearTheme = () => {
    return localStorage.clear(THEME)
}