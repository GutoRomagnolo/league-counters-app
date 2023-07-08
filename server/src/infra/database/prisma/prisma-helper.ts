import { PrismaClient } from '@prisma/client';

export const PrismaHelper = {
  client: new PrismaClient(),

  async connect(): Promise<void> {
    this.prisma = new PrismaClient().$connect().catch(() => {
      console.log("Failed")
      process.exit(1);
    });
  },

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}