 'use strict';

import User from "./User.js";

 class Admin extends User{
    #rigth
    constructor(name, firstname, job, rigth){
        super(name, firstname, job);
        this.#rigth = rigth
    }

    get rigth(){
        return this.#rigth
    }

    set rigth(newRigth){
        this.#rigth = newRigth
    }
     canEditArticles (){
        return `je suis ${this.name} ${this.firstName} et je travail comme ${this.job} ${this.#rigth}`;
     }
     
  
 }
 export default Admin