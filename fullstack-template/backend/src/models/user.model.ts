import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IUser extends Document {
    id:number,
    photo: string,
    name:string,
    password:string,
    course: number,  
    sessionCounter: number
}

// ------------------------------------------
// Schema definition
const UserSchema = new Schema(
  {
    id: { type: Number, required: true},
    photo: { type: String, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    course: { type: Number, required: true},
    sessionCounter: { type: Number, required: true}

  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const UserModel: Model<IUser> = model<IUser>(
  'User', UserSchema, 'User'
);
