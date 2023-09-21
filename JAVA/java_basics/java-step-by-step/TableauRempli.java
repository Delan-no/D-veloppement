// import java.util.Arrays;

public class TableauRempli {

    // public static void table() {
    // String[] tabSt = { "Jesus", "Christ", "Ange", "Marie", "Joseph" };
    // int[] tabIn = { 12, 13, 14, 15, 16, 18 };
    // tabSt[3] = "Dieu";
    // // System.out.println(tabSt[3]);
    // // System.out.println(tabIn[3]);

    // for (int i = 0; i < tabSt.length; i++) {
    // System.out.println(tabSt[i]);
    // }

    // for (int num : tabIn) {
    // System.out.println(num);
    // }
    // }

    // public static void tableBD() {
    // int[][] tab = { { 12, 10, 10 }, { 4, 3, 6 }, { 12, 85, 10 }, { 4, 9, 8 } };
    // tab[0][0] = 10;
    // System.out.println(tab[0][0]);
    // }

    // public static void tabVide() {
    // int[][] letters = { { 1, 2 }, { 1, 3 }, { 2, 7 } };

    // for (int i = 0; i < letters.length; i++) {
    // for (int j = 0; j < letters[0].length; j++) {
    // System.out.print(letters[i][j]);
    // }
    // }
    // }

    // public static void twoDimensionalArrays() {
    // String[][] colors = { { "rojo", "red" }, { "azul", "yellow" }, { "verde",
    // "green" } };

    // // System.out.println(colors[1][1]);
    // colors[1][1] = "blue";
    // System.out.println(colors[1][1]);

    // char[][] arr2D = new char[3][2];
    // arr2D[0][0] = '1';
    // arr2D[0][1] = 'A';
    // arr2D[1][0] = '2';
    // arr2D[1][1] = 'B';
    // arr2D[2][0] = '3';
    // arr2D[2][1] = 'C';

    // for (int i = 0; i < arr2D.length; i++) {
    // for (int j = 0; j < arr2D[0].length; j++) {
    // System.out.println(arr2D[i][j]);
    // }
    // }

    // for (int k = 0; k < colors.length; k++) {
    // for (int l = 0; l < colors[0].length; l++) {
    // System.out.println(colors[k][l]);
    // }
    // }
    // }

    // public static void toUpperCas() {
    // String[] groceries = new String[] { "candy corn", "chocolate", "jelly beans",
    // "cookies" };

    // for (String item : groceries) {
    // System.out.println(item.toUpperCase());
    // }
    // }

    // public static double getTotalCost(double[] groceryPrices) {
    // double totalCost = 0.0;
    // for (int i = 0; i < groceryPrices.length; i++) {
    // totalCost = groceryPrices[i] + totalCost;
    // }
    // return totalCost;
    // }

    // public static double getMostExpensiveItemCost(double[] groceryPrices) {
    // double maxCost = groceryPrices[0];

    // for (double Prices : groceryPrices) {
    // maxCost = Math.max(Prices, maxCost);
    // }
    // return maxCost;
    // }

    // public static int getNumAllergicItems(String[] groceryList) {
    // int numAllergicItems = 0;

    // for (int i = 0; i < groceryList.length; i++) {
    // String text = groceryList[i];
    // if (text.length() > 5) {
    // numAllergicItems++;
    // }
    // }

    // return numAllergicItems;
    // }

    // public static boolean hasSpecialItem(double[] groceryPrices){
    // for (double item : groceryPrices) {
    // String stringValItem = String.valueOf(item);

    // if (stringValItem.endsWith(".99")) {
    // return true;
    // }
    // }
    // /* for (int i = 0; i < groceryPrices.length; i++) {
    // String price = "" + groceryPrices[i] + "";
    // if (price.substring(price.indexOf(".") + 1).equals("99")) {
    // return true;
    // }
    // }*/
    // return false;
    // }

    public static boolean isAlphabetized(String[] groceryList) {
        String lastGrocery = groceryList[0];
        for (int i = 1; i < groceryList.length; i++) {
            System.out.println(" comparaison: " + lastGrocery + " vs " + groceryList[i]);
            if (lastGrocery.compareTo(groceryList[i]) > 0) {
                return false;
            }

            lastGrocery = groceryList[1];
        }
        return true;
    }

    public static boolean hasDuplicates(String[] groceryList) {
        
        return false;
    }

    public static void main(String[] args) {
        // table();
        // tableBD();
        // tabVide();
        // twoDimensionalArrays();
        // toUpperCas();
        // getTotalCost(null);

        // double[] groceryPrices = { 10.0, 12.3, 8.45, 2.43, 18};
        // System.out.println(getTotalCost(groceryPrices));

        // System.out.println(getMostExpensiveItemCost(groceryPrices));

        // String[] groceryList = { "apple", "milk", "banana", "bananas", "chocolate" };
        // System.out.println(getNumAllergicItems(groceryList));

        // double[] groceryList = { 10.0, 89.9, 8.99, 2.99 };
        // System.out.println(hasSpecialItem(groceryList));

        // String[] groceryList = { "apples", "banana", "bananas", "chocolate" };
        // System.out.println(isAlphabetized(groceryList));

        String[] groceryList = { "apples", "banana", "Apples", "chocolate" };
        System.out.println(hasDuplicates(groceryList));

    }
}
