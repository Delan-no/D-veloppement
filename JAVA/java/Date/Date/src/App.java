// import java.time.LocalDate;
import java.time.LocalDateTime;
// import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
public class App {
    public static void main(String[] args) throws Exception {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
    
        String formattedDate = myDateObj.format(myFormatObj);
        System.out.println("After formatting: " + formattedDate);
    }
}
