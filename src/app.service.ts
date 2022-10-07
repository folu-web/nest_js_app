import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      "message":"Application API Working",
      "version":"0.0.1"
      "you should see this"
      "adding other script"
    };
  }
}
