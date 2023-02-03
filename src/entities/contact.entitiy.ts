import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./user.entity"

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60 })
    email: string

    @Column()
    phoneNumber: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
    @ManyToOne(() => User, user => user.contact, { eager: true})
    user: User

    constructor(id: string, name: string, email: string, phoneNumber: number, createdAt: Date, updatedAt: Date, user: User) {
        this.id = id,
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.user = user
    }
}