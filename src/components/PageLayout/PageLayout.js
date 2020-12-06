import { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import {
  AppBar,
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
              {!_.isEmpty(currentUser) && `${currentUser.name} ${currentUser.lastName}`}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          open={isSideBar}
          onClose={onToggleSideBar}
          classes={{
            paper: styles.sidebar
          }}
        >
          <List
            classes={{
              root: styles.list
            }}
          >
            {MENU_PAGES.map(({ text, link, Icon }) => (
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
                  <Icon />
                </ListItemIcon>
                <ListItemText classes={{ root: styles.listItemText }} primary={text} />
              </ListItem>
            ))}
          </List>
          <ListItem
              button
              classes={{
                root: styles.listItem
              }}
              onClick={() => {
                Router.push(SIGNIN_PAGE);
                logoutRequest();
              }}
          >
            <ListItemIcon classes={{ root: styles.listItemIcon }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText classes={{ root: styles.listItemText }} primary='Logout' />
          </ListItem>
        </Drawer>

        {children}
      </>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { logoutRequest })(PageLayout);
