import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SectionDocument } from '../schema/section.schema';
import { SubjectService } from '../subjects/subject.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel('section')
    private sectionModel: Model<SectionDocument>,
    private readonly usersService: UsersService,
    private readonly subjectService: SubjectService
  ) {}

  async getSection(id) {
    return await this.sectionModel.findById(id);
  }

  async createSection(body) {
    const students = await this.usersService.getRole(body.role);
    //const faculty = await this.usersService.getUserById(body.teacher_id);

    const classStudents = [];

    body.students_id.map((student) => {
      students.map((v) => {
        if (v._id.toString() === student) {
          classStudents.push(v);
        }
      });
    });

    const newSection = await this.sectionModel.create({
      _id: new Types.ObjectId(),
      section_name: body.section_name,
      teacher_id: body.teacher_id,
      students_id: body.students_id,
      school_year: body.school_year,
    });

    if (newSection) {
      body.students_id.map((id) =>
        this.usersService.assignSectionToUser('student', newSection, id)
      );
      this.usersService.assignSectionToUser(
        'faculty',
        newSection,
        body.teacher_id
      );
    }

    return newSection;
  }

  async addSubjectToSection(section_id, subject_id) {
    const subject = await this.subjectService.getSubject(subject_id);

    return await this.sectionModel.findByIdAndUpdate(
      { _id: section_id },
      {
        $push: { subjects: subject },
      }
    );
  }

  //   async getAllClass(): Promise<Class> {
  //     const Class = await this.sectionModel.find({});

  //     return Class;
  //   }
}
