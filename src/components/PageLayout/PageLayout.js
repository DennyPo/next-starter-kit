import { useState } from "react";
import { connect } from "react-redux";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Router from "next/router";
import HomeIcon from '@material-ui/icons/Home';

// Actions

import { logoutRequest } from "../../store/actions/authActions";

// urls

import { SIGNIN_PAGE } from "../../config/url";

// config

import { MENU_PAGES } from "../../config/config";

// styles

import styles from "./PageLayout.module.scss";


const PageLayout = (props) => {

  const { children, currentUser, logoutRequest } = props;

  const [isSideBar, setIsSideBar] = useState(false);

  const onToggleSideBar = () => setIsSideBar(state => !state);

  return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={onToggleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              {`${currentUser.name} ${currentUser.lastName}`}
            </Typography>
            <Button
                color="inherit"
                onClick={() => logoutRequest(() => Router.push(SIGNIN_PAGE))}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          open={isSideBar}
          onClose={onToggleSideBar}
          classes={{
            paper: styles.sidebar
          }}
        >
          <List>
            {MENU_PAGES.map(({ text, link }) => (
              <ListItem
                button
                key={text}
                classes={{
                  root: styles.listItem
                }}
                onClick={() => {
                  Router.push(link);
                  onToggleSideBar();
                }}
              >
                <ListItemIcon classes={{ root: styles.listItemIcon }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText classes={{ root: styles.listItemText }} primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {children}
      </>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { logoutRequest })(PageLayout);
