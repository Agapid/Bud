import { Category } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string
   
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    /**Не видно связи в MySQL, порпобую создаьб базу на MSSQL*/
    @OneToMany(()=> Category, (category) => category.user)
    categories: Category[]
}
