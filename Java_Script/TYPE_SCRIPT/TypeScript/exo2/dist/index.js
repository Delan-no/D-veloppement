"use strict";
class Music {
    get instrument() {
        return this._instrument;
    }
    play() {
        return "play music";
    }
}
// Classe étendue
class Guitar extends Music {
}
;
