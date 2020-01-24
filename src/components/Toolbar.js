import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import MuiToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Auth from "../utils/auth";
import { ThemeConsumer } from "../utils/theme";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  home: { cursor: "pointer" }
}));

const Toolbar = () => {
  const styles = useStyles();
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <AppBar position="fixed" className={styles.appBar} color="default">
          <MuiToolbar className={styles.toolbar}>
            <Typography variant="h6" noWrap className={styles.home}>
              Prospect
            </Typography>
            <div>
              <IconButton size="small" onClick={() => toggleTheme()}>
                <Icon>
                  {theme.palette.type === "dark" ? "nights_stay" : "wb_sunny"}
                </Icon>
              </IconButton>
              <Button onClick={Auth.logout}>Logout</Button>
            </div>
          </MuiToolbar>
        </AppBar>
      )}
    </ThemeConsumer>
  );
};

export default Toolbar;