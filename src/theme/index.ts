import { GlobalThemeOverrides, darkTheme, lightTheme } from 'naive-ui'

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#000000'
  }
  // ...
}

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FFFFFF'
  }
}

export {
  lightThemeOverrides,
  darkThemeOverrides,
  darkTheme,
  lightTheme
}
