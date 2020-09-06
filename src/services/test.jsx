import axios from './axios';

export const getTest = async (params) => {
  try {
    const data = await axios.get('https://www.baidu.com/');
    return data;
  } catch (e) {
    return e;
  }
};
