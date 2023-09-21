class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
}

const user = new User("Alice");
console.log(user.name);