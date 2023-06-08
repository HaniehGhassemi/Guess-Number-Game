import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from './modules/global/global.module';
import { GuessNumberModule } from './modules/games/guess-number/guess-number.module';
import { UsersModule } from './modules/users/users.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { MailingModule } from './modules/mailing/mailing.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { LoggerModule } from 'nestjs-pino';
import { GamesModule } from './modules/games/games.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register(),
    LoggerModule.forRoot({
      pinoHttp: {
        formatters: {
          level: (label) => {
            return { level: label.toUpperCase() };
          },
        },
        transport:
          process.env.NODE_ENV !== 'production'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: process.env.SMTP_EMAIL_ADDRESS,
      },
      template: {
        dir: process.cwd() + '/src/modules/mailing/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    RedisModule.forRoot({
      config: {
        host: 'redis',
        port: 6379,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GlobalModule,
    GuessNumberModule,
    UsersModule,
    MailingModule,
    GamesModule,
  ],
})
export class AppModule {}
