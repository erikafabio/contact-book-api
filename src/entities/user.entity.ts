import { Exclude } from "class-transformer"
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Contact } from "./contact.entitiy"

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60 })
    email: string

    @Column({ type: 'bigint' })
    phoneNumber: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 120 })
    @Exclude()
    password: string

    @Column()
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @OneToMany(type => Contact, contact => contact.id)
    contact: Contact[]
}