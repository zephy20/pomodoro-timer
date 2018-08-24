import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Header = (props) => (
    <div>
    <Typography variant="display3" component="h3">
    {props.title}
    </Typography>   
  </div>
)
    


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});



export default withStyles(styles)(Header);

