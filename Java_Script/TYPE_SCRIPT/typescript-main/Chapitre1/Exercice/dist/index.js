"use strict";
class Music {
    constructor(_instrument) {
        this._instrument = _instrument;
    }
    play() {
        return "play music";
    }
    ;
}
;
class Guitar extends Music {
    getPlay() {
        return this._instrument;
    }
}
;
const instru = new Guitar("Piano");
console.log(instru.getPlay());
