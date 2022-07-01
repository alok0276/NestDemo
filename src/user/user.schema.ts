import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";


export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({required : true})
    name : string;


    @Prop({required : true})
    age : string;


    @Prop({required : true})
    gender : string;
}

export const UserSchema = SchemaFactory.createForClass(User);