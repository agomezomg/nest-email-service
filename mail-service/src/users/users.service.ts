import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './../interface/user.interface';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const password = await bcrypt.hash(createUserDto.password, 10);
    const newUser = await new this.userModel({ ...createUserDto, password });
    await newUser.save();
    newUser.password = null;
    return newUser;
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    const existingUser = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }

  async getAllUsers(): Promise<IUser[]> {
    const userData = await this.userModel.find().select('name, mail');
    if (!userData || userData.length == 0) {
      throw new NotFoundException('Users data not found!');
    }
    return userData;
  }

  async getUser(userId: string): Promise<IUser> {
    const existingUser = await this.userModel
      .findById(userId)
      .select('name, mail')
      .exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }

  async getByEmail(email: string): Promise<IUser> {
    const existingUser = await this.userModel.findById(email).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${email} not found`);
    }
    return existingUser;
  }

  async deleteUser(userId: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return deletedUser;
  }
}
