import authUtil from "../utils/authUtil";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";
import Router from "next/router";

// styles

import styles from '../styles/Home.module.scss';

// actions

import { logoutRequest } from "../store/actions/authActions";

// config

import { SIGNIN_PAGE } from "../config/url";

export const getServerSideProps = async ctx => authUtil(ctx);

function Home(props) {

  const { currentUser, logoutRequest } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
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
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { logoutRequest })(Home);
