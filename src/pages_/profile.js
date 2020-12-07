import authUtil from "../utils/authUtil";

// components

import PageLayout from "../components/PageLayout/PageLayout";

export const getServerSideProps = async ctx => authUtil(ctx);

function Profile(props) {

  return (
      <PageLayout />
  )
}

export default Profile;
