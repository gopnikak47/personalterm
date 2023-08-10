// List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getBingPictureOfTheDay } from '../api';
import { getCatPictures } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Đang mở README GitHub của tớ...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Cách sử dụng: weather [địa điểm]. Ví dụ: weather hanoi';
  }
  const weather = await getWeather(city);
  return weather;
};

export const randompics = async (args: string[]): Promise<string> => {
  const picture = await getBingPictureOfTheDay();
  return `<img src="${picture}" />`;
};

export const catpics = async (args: string[]): Promise<string> => {
  const catpics = await getCatPictures();
  return `<img src="${catpics}" />`;
};