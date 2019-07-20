import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement} from 'sequelize-typescript';
@Table
export default class User extends Model<User> {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    password: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}

