import { HOME_PAGE, PROFILE_PAGE } from "./url";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';


export const TOKEN_NAME = 'starter_token';

export const MENU_PAGES = t => ([
  { text: t('home'), link: HOME_PAGE, Icon: HomeIcon },
  { text: t('profile'), link: PROFILE_PAGE, Icon: PersonIcon },
]);
