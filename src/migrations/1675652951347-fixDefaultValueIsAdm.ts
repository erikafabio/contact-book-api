import { MigrationInterface, QueryRunner } from "typeorm";

export class fixDefaultValueIsAdm1675652951347 implements MigrationInterface {
    name = 'fixDefaultValueIsAdm1675652951347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdm" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
