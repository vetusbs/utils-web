import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Text from './components/Text.js'
import Number from './components/Number.js'
import UUID from './components/Uuid.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(30),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: red,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    minHeight: 100,
    background: green,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));


class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div>
          

        <Grid container className={useStyles.container} spacing={8}>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}><Text/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}><Number/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}><UUID/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}>TBF</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}>TBF</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={useStyles.paper}>TBF</Paper>
          </Grid>
        </Grid>

        </div>
      </header>
    </div>
    );
  }
}

export default App;
