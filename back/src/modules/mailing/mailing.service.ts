import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MailingService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(
    user: User,
    token: string,
    redirectUrl: string,
  ): Promise<void> {
    const url = `${redirectUrl}?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Guess Number Game - Reset password! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        //filling curly brackets with content
        name: user.fullname,
        url,
      },
    });
  }
}
