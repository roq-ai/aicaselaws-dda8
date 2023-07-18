import axios from 'axios';
import queryString from 'query-string';
import { SearchQueryInterface, SearchQueryGetQueryInterface } from 'interfaces/search-query';
import { GetQueryInterface } from '../../interfaces';

export const getSearchQueries = async (query?: SearchQueryGetQueryInterface) => {
  const response = await axios.get(`/api/search-queries${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSearchQuery = async (searchQuery: SearchQueryInterface) => {
  const response = await axios.post('/api/search-queries', searchQuery);
  return response.data;
};

export const updateSearchQueryById = async (id: string, searchQuery: SearchQueryInterface) => {
  const response = await axios.put(`/api/search-queries/${id}`, searchQuery);
  return response.data;
};

export const getSearchQueryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/search-queries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSearchQueryById = async (id: string) => {
  const response = await axios.delete(`/api/search-queries/${id}`);
  return response.data;
};
