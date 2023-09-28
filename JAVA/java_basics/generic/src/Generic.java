import java.util.ArrayList;

public class Generic <T>{
    public class BeeHive {
        protected ArrayList<T> elementList;
        
        public void add(T b) {
          this.elementList.add(b);
        }
      
        public void remove(T b) {
          this.elementList.remove(b); // supprime tous les éléments 
        }

        public void clear(T b){
            this.elementList.clear();
        }
      
      }
}
