import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../global/services/prisma/prisma.service';
import { userErrors } from './types/user-errors.enum';
import { GetUserInfo, userInfo } from './dto/get-user-info-response.dto';
import { GetTopPlayersDto } from './dto/get-top-players-response.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserInfo(userId: number): Promise<GetUserInfo> {
    //check user exist
    const user = await this.prisma.client.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(userErrors.USER_NOT_FOUND);
    }

    const plays = await this.prisma.client.play.groupBy({
      by: ['userId'],
      orderBy: { _sum: { score: 'desc' } },
      _sum: { score: true },
      _count: { _all: true },
    });

    const playsOfUser = plays?.find((p) => p.userId === userId);
    const userRank = plays?.findIndex((p) => p.userId === userId) + 1;

    return {
      success: true,
      data: {
        userId: user.id,
        userName: user.username,
        fullName: user.fullname,
        sumScore: playsOfUser?._sum.score ?? 0,
        playCount: playsOfUser?._count._all ?? 0,
        rank: userRank,
      },
    };
  }

  async getTopPlayers(count: number): Promise<GetTopPlayersDto> {
    const plays = await this.prisma.client.play.groupBy({
      by: ['userId'],
      orderBy: { _sum: { score: 'desc' } },
      take: count,
    });
    if (!plays) throw new NotFoundException(userErrors.PLAY_RECORD_NOT_FOUND);
    const userIdList = plays.map((p) => p.userId);
    const topPlayersInfo: userInfo[] = await Promise.all(
      userIdList.map(async (id) => {
        return (await this.getUserInfo(id)).data;
      }),
    );
    return {
      success: true,
      data: topPlayersInfo,
    };
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.prisma.client.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  async findUserById(userId: number): Promise<User> {
    return this.prisma.client.user.findFirst({
      where: {
        id: userId,
      },
    });
  }
}
