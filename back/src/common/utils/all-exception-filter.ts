import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ResponseDto } from '../types/response.dto';
import { Response } from 'express';
import { CommonError } from '../types/common-error.enum';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const responseBody: ResponseDto = {
      success: false,
      data:
        exception instanceof HttpException
          ? exception.getResponse()
          : {
              statusCode: 500,
              message: CommonError.INTERNAL_SERVER_ERROR,
              error: CommonError.INTERNAL_SERVER_ERROR,
            },
    };
    response.status(httpStatus).json(responseBody);
  }
}
