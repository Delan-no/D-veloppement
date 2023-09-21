public class HelloWorld {
    public static void exampleMethod(String greeting, String name) {
        System.out.println(greeting + " " + name);
    }

    public static int addNumbers(int num1, int num2) {
        return num1 * num2;
    }

    public static void scopeExample() {
        String msg = "This value is only accessible within this method";
        System.out.println(msg);
    }

    public static void stringMethod() {
        String str1 = "Hello World!";
        String str2 = "Hi!";
        String str3 = "";

        System.out.println(str1.length()); // Prints: 12
        System.out.println(str2.length()); // Prints: 3
        System.out.println(str3.length()); // Prints: 0
    }

    public static void concatMethod() {
        String name = "Code";
        String nam = "Academy";
        name = name.concat(nam);
        System.out.println(name);
    }

    public static void equalsMethod() {
        String flavor1 = "Mango";
        String flavor2 = "Bananas";
        System.out.println(flavor1.equals("Mango"));
        System.out.println(flavor2.equals("Mango"));
        System.out.println(flavor1.equals(flavor2));
    }

    public static void indexOfMethod() {
        String letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        System.out.println(letters.indexOf("C"));
        System.out.println(letters.indexOf("EFG"));
    }

    public static void charAtMethod() {
        String currency = "Yen";
        System.out.println(currency.charAt(2));
    }

    public static void substringMethod() {
        String line = "It was the best of times, it was the worst of times.";
        System.out.println(line.substring(26));
    }

    public static void toUpperLower() {
        String input = "Cricket!";
        System.out.println(input.toUpperCase());
        System.out.println(input.toLowerCase());
    }

    public static void challenge() {
        String chaine = " rosért nu tse liavart el euQ trom as tnava rertnom ruel eD egas tuf erèp el siaM .éhcac ed tniop ,tnegra'D.egatnavad atroppar ne lI na'l ed tuob ua'uq neib is ; tuotrap ,àled ,àçeD pmahc el tnenruoter suov slif sel ,trom erèp eL .essaper te essap en niam al ùO ecalp ellun zessial en ; zehcêb ,relliuof ,zesuerC .tûO'l tiaf arua no'uq sèd pmahc ertov zeumeR .tuob à zerdneiv ne suov ,revuort aref el suoV egaruoc ed uep nu siam ; tiordne'l sap sias en eJ .snaded éhcac tse rosért nU .stnerap son éssial tno suon euQ egatiréh'l erdnev ed ,li-tid ruel ,suov-zedraG .sniomét snas alrap ruel ,stnafne ses rinev tiF ,eniahcorp trom as tnatnes ,rueruobaL ehcir nU .sniom el euqnam iuq sdnof el tse'C : eniep al ed zenerp ,zelliavarT ";
        

        String poeme = "";
        for(int i = 0; i < chaine.length(); i++){
            char letter = chaine.charAt(i);
            poeme = letter + poeme;
        }
        System.out.println(poeme);

    }

    public static void main(String[] args) {
        // exampleMethod("Delanno", "Kotcho"); // Prints: Hello Method!
        // int product = addNumbers(12, 10);
        // System.out.println(product);
        // scopeExample();
        // stringMethod();
        // concatMethod();
        // equalsMethod();
        // indexOfMethod();
        // charAtMethod();
        // substringMethod();
        // toUpperLower();
        challenge();
    }

}