import { MigrationInterface, QueryRunner } from "typeorm";

export class fixPhoneNumberError1675566578527 implements MigrationInterface {
    name = 'fixPhoneNumberError1675566578527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" integer NOT NULL`);
    }

}
