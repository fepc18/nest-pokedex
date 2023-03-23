import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // This code is executed before the to ingress to controller

    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid MongoID`);
    }
    return value;
  }
}
