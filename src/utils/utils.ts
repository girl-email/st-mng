export const checkUrl = () => {
  const localUrl = '';
  let baseURL = '';
  const dailyURL = 'https://daily-okr.forwe.store/';
  const prodURL = 'https://qzz-okr.forwe.store/';
  const isMock =
      location.host.includes('localhost') ||
      location.host.includes('127.0.0.1');
  if (isMock) {
      baseURL = '';
  }
  return baseURL;
};