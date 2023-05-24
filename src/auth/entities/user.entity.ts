import { Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  //_id: string;
  email: string;
  name: string;
  password: string;
  isActive: boolean;
  roles: string[];
}
