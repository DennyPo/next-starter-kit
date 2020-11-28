import getCookies from "next-cookies";
import _ from "lodash";

import { FREE_PAGES, HOME_PAGE, SIGNIN_PAGE, USER_URL } from "../config/url";
import { fetcher } from "./fetcher";
import wrapper from "../store";
import actionHelper from "./actionHelper";
import { LOGIN } from "../store/actions/authActions";

const authUtil = wrapper.getServerSideProps(async (ctx, props = {}) => {
  const { Authorization } = getCookies(ctx);

  const redirect = {
    redirect: {
      permanent: false,
      destination: SIGNIN_PAGE
    }
  }

  const isFreePage = FREE_PAGES.includes(ctx.req.url);

  if (!Authorization && !isFreePage) return redirect;

  if (_.isEmpty(ctx.store.getState().user.currentUser) && Authorization) {

    const { user } = await fetcher(USER_URL, { Authorization });

    if (!user) return redirect;

    ctx.store.dispatch({ type: actionHelper(LOGIN, true), payload: user });

    if (isFreePage) {
      return {
        redirect: {
          permanent: false,
          destination: HOME_PAGE
        }
      }
    }
  }

  return { props };
});

export default authUtil;
