class Music{
    constructor(
        protected _instrument: string,
    ){ }

    play(): string{
        return "play music";
    };

};

 class Guitar extends Music{

    getPlay(): string {
        return this._instrument
    }
};

const instru = new Guitar ("Piano");
console.log(instru.getPlay());

