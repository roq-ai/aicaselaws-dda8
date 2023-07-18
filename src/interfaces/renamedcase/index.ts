import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RenamedcaseInterface {
  id?: string;
  name: string;
  details: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RenamedcaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  details?: string;
  user_id?: string;
}
