
public class BeeHive extends Generic<Bee> {
  
    public BeeHive(int numBees) {
      for (int i = 0; i < numBees; i++) {
        elementList.add(new Bee("bee" + i));
      }
    }
  
    
  }