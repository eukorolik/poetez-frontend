import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../config/theme';

const App = () => (
  <MuiThemeProvider muiTheme={theme}>

  </MuiThemeProvider>
);

export default App;
