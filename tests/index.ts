type Month = 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december';

function printMonth(month: Month) {
    console.log(`The month is: ${month}`);
}

printMonth("june")

type User = {
    name: string;
    age: number;
}

type AdvancedUser = User & {
    email: string;
}

interface IUser {
    name: string;
    age: number;
    sayHello: () => void;
}

interface IAdvancedUser extends IUser {
    email: string;
}

const user1: User = {
    name: "Alice",
    age: 30
};

const user2: IUser = {
    sayHello(): void {
    },
    name: "Bob",
    age: 25
};

class Person implements IUser {
    age: number;
    name: string;

    sayHello(): void {
    }
}


