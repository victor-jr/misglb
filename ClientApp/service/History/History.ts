import createHistory from 'history/createBrowserHistory'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;

export default createHistory({
  basename: baseUrl
});