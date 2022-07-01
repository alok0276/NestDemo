import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async createUser(userDto: UserDto): Promise<User>{
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async readAllUser(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async readUserById(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    async updateUser(id: string, user: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, {new: true})
    }

    async deleteUser(id: string): Promise<any> {
        return await this.userModel.findByIdAndRemove(id);
    }

}
