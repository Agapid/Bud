
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: '', type: "nvarchar" ,  name: 'Title', length: 300})
    //@Column()
    title: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(()=> User, (user) => user.categories)
   // @JoinColumn({name: 'user_id'})
    user: User 

}
