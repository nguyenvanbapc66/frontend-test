import { clientApi } from './axios-instance';

type SkillType = {
  category: string;
  description: string;
  image: string;
  title: string;
  url: string;
};

export const fetchSkills = async (search?: string): Promise<{ data: SkillType[] }> => {
  return clientApi.get('', { params: { search } });
};
