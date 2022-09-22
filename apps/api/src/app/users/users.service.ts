import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users')
    private userModel: Model<UserDocument>
  ) {}

  async getUser(username): Promise<User> {
    const user = await this.userModel.findOne({ email: username });

    return user;
  }

  async getAllUser() {
    const user = await this.userModel.find({});

    return user;
  }

  async getUserById(id) {
    const user = await this.userModel.findById({
      _id: id,
    });

    return user;
  }

  async getRole(body) {
    const userRole = await this.userModel.find({ role: body.role || body });
    return userRole;
  }

  async assignSectionToUser(type, section, id) {
    console.log('SECTION: ', section);
    if (type === 'student') {
      return await this.userModel.findByIdAndUpdate(id, {
        section_id: section._id.toString(),
      });
    } else if (type === 'faculty') {
      return await this.userModel.findByIdAndUpdate(id, {
        section_id: section._id.toString(),
      });
    }
  }

  async createUser(body): Promise<User> {
    const {
      email,
      password,
      last_name,
      first_name,
      middle_name,
      role,
      student,
      faculty,
      admin,
    } = body;
    try {
      const existUser = await this.userModel.findOne({
        email: body.email,
      });

      if (existUser) {
        console.log('Admin Exists');
      } else {
        const hashPass = await bcrypt.hash(password, 10);

        const newUser = await this.userModel.create({
          _id: new Types.ObjectId(),
          last_name: last_name,
          first_name: first_name,
          middle_name: middle_name,
          email: email,
          password: hashPass,
          role: role,
          student: student,
          faculty: faculty,
          admin: admin,
        });
        return newUser;
      }
    } catch (err) {
      console.log('error create User: ', err);
    }
  }

  async editUser(id, body) {
    const {
      email,
      password,
      last_name,
      first_name,
      middle_name,
      role,
      student,
      faculty,
      admin,
    } = body;

    const existUser = await this.userModel.findById({ _id: id });

    if (existUser) {
      return 'User Exists';
    }
    const hashPass = await bcrypt.hash(password, 10);

    const updateUser = await this.userModel.findByIdAndUpdate(
      { _id: id },
      {
        last_name: last_name ? last_name : existUser.last_name,
        first_name: first_name ? first_name : existUser.first_name,
        middle_name: middle_name ? middle_name : existUser.middle_name,
        email: email ? email : existUser.email,
        password: password ? hashPass : existUser.password,
        role: role ? role : existUser.role,
        student: student ? student : existUser.student,
        faculty: faculty ? faculty : existUser.faculty,
        admin: admin ? admin : existUser.admin,
      }
    );

    return updateUser;
  }

  async listStudentStrand(body) {
    const userStrands = await this.userModel.find({
      'student.strand': body.strand,
    });
    return userStrands;
  }
}
