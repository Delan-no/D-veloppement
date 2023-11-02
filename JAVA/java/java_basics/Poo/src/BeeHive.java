import java.util.ArrayList;

// 1. Afficher le nom des abeilles
/* 
public class BeeHive {
  private ArrayList<Bee> beeList;

  public BeeHive(int numBees) {
    this.beeList = new ArrayList<Bee>();
    for (int i = 0; i < numBees; i++) {
      this.beeList.add(new Bee("bee" + i));
    }
  }

  public void printBees(){
    for (Bee bee : beeList) {
      System.out.println(bee.getName());
    }
  }

  public static void main(String[] args) {
    BeeHive myHive = new BeeHive(365);
    myHive.printBees();
  }
}
*/

// 2. Abeille charognarde
/*
public class BeeHive {
  private ArrayList<Bee> beeList;

  public BeeHive(int numBees) {
    this.beeList = new ArrayList<Bee>();
    for (int i = 0; i < numBees; i++) {
      this.beeList.add(new Bee("bee" + i));
    }
  }

  public ArrayList<Bee> getBeeList() {
    return this.beeList;
  }

  public void leaveHome(String beeName) {
    for (Bee b : beeList) {
      if (b.getName().equals(beeName)) {
        b.leaveHome();
        return;
      }
    }
  }

  public static void main(String[] args) {
    BeeHive myHive = new BeeHive(365);
    myHive.leaveHome("bee43");

    // Affiche le statut de l'abeille pour s'assurer qu'elle n'est plus à la maison
    System.out.println(myHive.beeList.get(43).isHome());
  }
}
*/

// 3. Entrée d'abeilles 
/*
public class BeeHive {
  private ArrayList<Bee> beeList;

  public BeeHive(int numBees) {
    this.beeList = new ArrayList<Bee>();
    for (int i = 0; i < numBees; i++) {
      this.beeList.add(new Bee("bee" + i));
    }
  }

  public ArrayList<Bee> getBeeList() {
    return this.beeList;
  }

  public void addBees(ArrayList<String> beeNames) {
    for (String name : beeNames) {
      this.beeList.add(new Bee(name));
    }
  }

  public static void main(String[] args) {
    BeeHive myHive = new BeeHive(3);
    ArrayList<String> newBees = new ArrayList<String>();
    newBees.add("bob");
    newBees.add("macey");
    newBees.add("anna");

    myHive.addBees(newBees);

    // Afficher les éléments dans la liste d'abeille pour s'assurer que les
    // nouvelles abeille ont été ajoutées
    for (Bee b : myHive.beeList) {
      System.out.println(b.getName());
    }
  }
}
*/

// 4. Sortie d'abeilles

public class BeeHive {
  private ArrayList<Bee> beeList;

  public BeeHive(int numBees) {
    this.beeList = new ArrayList<Bee>();
    for (int i = 0; i < numBees; i++) {
      this.beeList.add(new Bee("bee" + i));
    }
  }

  public ArrayList<Bee> getBeeList() {
    return this.beeList;
  }

  public void moveOutBees() {
    // while(this.beeList.size() > 0) {
    //   this.beeList.remove(0); // supprime un élément particulier
    // }

    // this.beeList.clear(); // supprime tous les éléments 
  }

  public static void main(String[] args) {
    BeeHive myHive = new BeeHive(365);
    myHive.moveOutBees();
   
    // Afficher tous les éléments dans la liste d'abeille pour s'assure que toutes les abeilles ont été retirées
    for(Bee b : myHive.beeList){
      System.out.println(b.getName());
    }
  }
}

// 5. Attaque