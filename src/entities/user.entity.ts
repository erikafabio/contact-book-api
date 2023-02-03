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

    @Column()
    phoneNumber: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 32 })
    password: string

    @Column()
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @OneToMany(type => Contact, contact => contact.id)
    contact: Contact[]

    constructor(id: string, name: string, email: string, phoneNumber: number, createdAt: Date, updatedAt: Date, password: string, isAdm: boolean, isActive: boolean, contact: Contact[]) {
        this.id = id
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.password = password
        this.isAdm = isAdm
        this.isActive = isActive
        this.contact = contact
    }
}