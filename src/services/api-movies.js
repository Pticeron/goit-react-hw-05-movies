import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '0d7a3e0f2906a3f05e73804ba320517e',
    language: 'en-US',
  },
});

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      page: 1,
      include_adult: false,
      query,
    },
  });
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data;
};
