import axios from 'axios';
import queryString from 'query-string';
import { AiModelInterface, AiModelGetQueryInterface } from 'interfaces/ai-model';
import { GetQueryInterface } from '../../interfaces';

export const getAiModels = async (query?: AiModelGetQueryInterface) => {
  const response = await axios.get(`/api/ai-models${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAiModel = async (aiModel: AiModelInterface) => {
  const response = await axios.post('/api/ai-models', aiModel);
  return response.data;
};

export const updateAiModelById = async (id: string, aiModel: AiModelInterface) => {
  const response = await axios.put(`/api/ai-models/${id}`, aiModel);
  return response.data;
};

export const getAiModelById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ai-models/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAiModelById = async (id: string) => {
  const response = await axios.delete(`/api/ai-models/${id}`);
  return response.data;
};
