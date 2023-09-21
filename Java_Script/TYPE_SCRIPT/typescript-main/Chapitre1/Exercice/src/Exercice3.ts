interface Duck{
     name: string;
    swim:()=> string;
}

class Thing implements Duck{

    name:string = "";
    swim():string  {
        return "Nage comme un canard";
    };
}
 const nou = new Thing();
 console.log(nou.swim());

 /**En typescript, lorsqu'une classe implémente une interface, elle doit fournir une implémentation pour toutes 
 Une interface, elle doit fournir une implémentation pour toutes les propriétés et méthodes déclarées dans l'interface
  * ex:
  * interface MonInterface{
  *     propriété:type;
  *     
  * }
  */