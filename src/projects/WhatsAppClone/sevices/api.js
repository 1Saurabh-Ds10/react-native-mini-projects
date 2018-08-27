import { setListener, pushData, initialize } from './firebase';
export const mockMessages = [
  {
    incoming: true,
    message: 'Hi Max'
  },
  {
    incoming: false,
    message: 'Hi, John'
  },
  {
    incoming: true,
    message: 'When we will learn real data fetching'
  },
  {
    incoming: false,
    message: `First we need to learn debugging and testing, then we will learn styling and animations and then we will learn real data fetching. Let's use this mock data for now ok?`
  }
];

export const initApi = () => initialize();

export const getMessages = updaterFn => setListener('messages', updaterFn);

export const postMessage = message => {
  if (Boolean(message)) {
    return pushData('messages', {
      incoming: true,
      message
    });
  }
};

export const getMockData = () => new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000));
