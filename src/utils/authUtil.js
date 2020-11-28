import getCookies from "next-cookies";
import _ from "lodash";

import { USER_URL, WITHOUT_TOKEN_ROUTE } from "../config/url";
import { fetcher } from "./fetcher";
import wrapper from "../store";
import actionHelper from "./actionHelper";
import { LOGIN } from "../store/actions/authActions";

const authUtil = wrapper.getServerSideProps(async (ctx, props = {}) => {
  const { Authorization } = getCookies(ctx);

  const redirect = {
    redirect: {
      permanent: false,
      destination: WITHOUT_TOKEN_ROUTE
    }
  }

  if (!Authorization) return redirect;

  if (_.isEmpty(ctx.store.getState().user.currentUser)) {

    const { user } = await fetcher(USER_URL, { Authorization });

    if (!user) return redirect;

    ctx.store.dispatch({ type: actionHelper(LOGIN, true), payload: user })
  }

  return { props };
});

export default authUtil;
