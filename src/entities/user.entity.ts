import { Exclude } from "class-transformer"
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Contact } from "./contact.entitiy"

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
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

    @Column({ default: true })
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]
}