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
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    minWidth:300,
  },
  control: {
    padding: theme.spacing(4)
  },
}));

export default function App() {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
          <Grid container className={classes.root} spacing={2} justify="center">
            <Grid item>
              <Paper className={classes.paper}><Text /></Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}><Number /></Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}><UUID /></Paper>
            </Grid>
          </Grid>
      </header>
    </div>
  );
}
