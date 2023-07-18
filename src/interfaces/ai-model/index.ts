import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AiModelInterface {
  id?: string;
  name: string;
  details: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AiModelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  details?: string;
  user_id?: string;
}
