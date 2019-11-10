import React, { useContext } from 'react';
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "pink",
      background: "#222222"
    }
  };
  
const ThemeContext = React.createContext(themes.light);

const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}
const ThemedButton = () => {
  /**
   * 接受上下文对象（从React.createContext返回的值），并返回该上下文的当前上下文值。当前上下文值由树中调用组件上方value最接近的prop 决定<MyContext.Provider>。
   */
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
const Header = (props) => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        </header>
    )
}
export default Header