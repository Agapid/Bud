import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


/**
 * Модули - это такие штуки, кторые связывают между собой и контроллер(который по сути есть маршрут запроса к конечно точке)
 * и сервис, еоторый по сути вызывается из контроллера, когда отработает маршрут. Сервис - есть набор процедур и функций, которые
 * и есть соновная логика приложения
 * Поскольку вот этот кокнетно модуль, он самый главный, то когда мы создали ресурс user, то сюда прописался UserModule, чтобы приложение
 * знало об этом UserModule
 */
@Module({
  imports: [UserModule, CategoryModule, AuthModule, TransactionModule, ConfigModule.forRoot({isGlobal: true}), 
            TypeOrmModule.forRootAsync({

              imports: [ConfigModule],
              useFactory: (configService: ConfigService) => ({
                  type: 'mysql',
                  host: configService.get('DB_HOST'), 
                  port: configService.get('DB_PORT'),
                  username: configService.get('DB_USERNAME'),
                  password: configService.get('DB_PASSWORD'),
                  database: configService.get('DB_NAME'),

                  synchronize: true,  //Эта строка, как я погял, отвечает за то, будет ли осуществляться автоматическая миграция

                  entities: [__dirname + '/**/*.entity{.js, .ts}']    //это маска для всех сущностей в этой папке и подпапке

              }),
              inject: [ConfigService],
            }),

  ],

 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
