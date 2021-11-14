export default class Users{
    constructor(){
        this.users = [];
    }

    addUser(user){
        this.users.push(user);
    }

    removeUser(user){
        this.users = this.users.filter(currentUser => currentUser !== user);
    }

    //iteradores
    [Symbol.iterator](){
        return this.generatorUser();
    }
    
    * generatorUser(){
        for(var i =0;i < this.users.length; i++){
            yield this.users[i];
        }
    }

}