import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle";

import { isSignedInUser } from "../../routes/dashboard";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {isSignedInUser && (
              <React.Fragment>
                <ListItem className={classes.inlineBlock}>
                  <a href="/dashboard" className={classes.block}>
                    Dashboard
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/reports" className={classes.block}>
                    Reports
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/config" className={classes.block}>
                    Config
                  </a>
                </ListItem>
              </React.Fragment>
            )}
            {!isSignedInUser && (
              <React.Fragment>
                <ListItem className={classes.inlineBlock}>
                  <a href="/signin" className={classes.block}>
                    Sign in
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/signup" className={classes.block}>
                    Sign up
                  </a>
                </ListItem>
              </React.Fragment>
            )}
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="https://github.com/sgdreamer7" className={classes.a}>
              Vladimir Scherbina
            </a>, made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
