export default class User {
    constructor({ id, name, email, age }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
