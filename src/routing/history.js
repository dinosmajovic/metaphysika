import { createBrowserHistory } from 'history';

export default createBrowserHistory({
  basename: process.env.REACT_APP_ROUTER_BASENAME || ''
});
