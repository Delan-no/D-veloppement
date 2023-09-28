public class Calculator<T> {
    // Generic method
    public void add(T a, T b) {
        System.out.println("a + b = " + a + " + " + b);
        System.out.printf("addition de %s et %s\n", a, b);
        
        // %s => string
        // %d => decimal
        // %f => float
    }

}
