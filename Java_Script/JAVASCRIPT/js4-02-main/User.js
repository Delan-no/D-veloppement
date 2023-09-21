'use strict';

class User {
	#job

	constructor(name, firstName, job) {
		this.name = name;
		this.firstName = firstName;
		this.#job = job;

	}


	get job (){
		return this.#job;
	}

	set job (newJob){
		this.#job = newJob
	}

	fullName() {
		return `je suis ${this.name} ${this.firstName} et je travail comme ${this.#job}`;
	}

}
export default User

