import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: content-box;
  
  height: 100vh;
  background-image: repeating-linear-gradient(
    145deg,
    #e4e4e4,
    #e4e4e4 3px,
    #c1d3de 3px,
    #c1d3de 6px
  );
}
`
