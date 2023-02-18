import { createParamsString } from './createParamsString';

const fetchUrl = '`https://pixabay.com/api/';

export const fetchImages = async params => {
  const urlParams = createParamsString(params);
  const res = await fetch(`${fetchUrl}${urlParams}`);
  const resBody = await res.json();

  return resBody;
};
