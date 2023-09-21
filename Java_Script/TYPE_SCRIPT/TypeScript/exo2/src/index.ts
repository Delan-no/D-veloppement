 class Music {
    protected _instrument: string;

    get instrument(): string {
        return this._instrument
    }

    play():  string{
        return "play music";
    }
 }
  // Classe étendue
  class Guitar extends Music{
     
  };


