import { darkTheme, lightTheme } from "../constants";

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN';
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS';
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE';

export const toggleThemeBegin = () => ({
  type: TOGGLE_THEME_BEGIN
})

export const toggleThemeSuccess = (selectedTheme) => ({
  type: TOGGLE_THEME_SUCCESS,
  payload: { selectedTheme }
})

export const toggleThemeFailure = (selectedTheme) => ({
  type: TOGGLE_THEME_FAILURE,
  payload: { selectedTheme }
})

export const toggleTheme = (themeType) => {
  return dispatch => {
    dispatch(toggleThemeBegin())

    switch (themeType) {
      case 'dark':
        dispatch(toggleThemeSuccess(darkTheme))
        break;
      case 'dark':
        dispatch(toggleThemeSuccess(lightTheme))
        break;
      default:
        dispatch(toggleThemeFailure({ error: "Invalid theme type"}))
        break;
    }
  }
}
