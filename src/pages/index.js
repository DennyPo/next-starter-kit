import authUtil from "../utils/authUtil";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";

// styles

import styles from '../styles/Home.module.scss';

// actions

import { logoutRequest } from "../store/actions/authActions";

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
            onClick={logoutRequest}
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
