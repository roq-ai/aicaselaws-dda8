import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchQueryInterface {
  id?: string;
  query: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SearchQueryGetQueryInterface extends GetQueryInterface {
  id?: string;
  query?: string;
  user_id?: string;
}
