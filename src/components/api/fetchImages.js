import { createParamsString } from './createParamsString';

const fetchUrl = 'https://pixabay.com/api/';
const constantParams = {
  key: '31924475-938fe2c560f7db586b0b43322',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const constantParamsString = Object.keys(constantParams)
  .map(key => `${key}=${constantParams[key]}`)
  .join('&');

export const fetchImages = async params => {
  const urlParams = createParamsString(params);
  const res = await fetch(`${fetchUrl}${urlParams}&${constantParamsString}`);
  const resBody = await res.json();

  return resBody;
};
