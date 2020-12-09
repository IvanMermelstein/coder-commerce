import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[800],
    },
    secondary: {
      main: amber[700],
    },
  },
});

export default theme