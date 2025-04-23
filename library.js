// Step 1: Create a Base Class
// Define a class LibraryItem to represent shared properties
//(title, id, isAvailable) and methods (e.g., checkOut() and
//returnItem()).

class LibraryItem {
    constructor(title, id) {
      this.title = title;
      this.id = id;
      this.isAvailable = true;
    }
  
    checkOut() {
        console.log(`inside the checked out function`);
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`checkout done for ${this.title}`);
      } else {
        console.log(`${this.title} is in stock for checkout`);
      }
    }
  
    returnItem() {
        console.log(`Inside of checkin/return module.`);
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`$Thank you for returning {this.title}.`);
      } else {
        console.log(`Sorry! ${this.title} need to checked out before returning.`);
      }
    }
  
  }
  
  /* Step 2: Child Classes
  ○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
  */ 
 class Book extends LibraryItem {
    constructor(title, id, author, genre) {
      super(title, id,);
      this.author = author;
      this.genre = genre;
    }
  
  }
 /* Step 2: Child Classes
  ○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ DVD: Add properties like director and duration.
 */ 
   
  class DVD extends LibraryItem {
    constructor(title, id, director, country, duration) {
      super(title, id,);
      this.director = director;
      this.country = country;
      this.duration = duration;
    }
  
  }
 /* Step 2: Child Classes
  ○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Magazine: Add properties like issueNumber and publisher
  */ 
   
  class Magazine extends LibraryItem {
    constructor(title, id,issueNumber, publisher) {
      super(title, id);
      this.issueNumber = issueNumber;
      this.publisher = publisher;
    }
  
 }
  
  // Step 3: Instantiate Objects
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", 1, "J.K. Rowling", "Fantasy");
  const dvd1 = new DVD("Lagaan", 2, "Ashtosh G", "india", 180);
  const mag1 = new Magazine("Vogue", 3, 2024, "Vougue Retail");
  
  // Step 4: Test Inheritance and Methods
  console.log("\n--- Book ---");
  console.log(book1);
  //book1.displayInfo();
  book1.checkOut();
  console.log(book1);
  book1.checkOut();
  book1.returnItem();
  console.log(book1);
 
  console.log("\n--- DVD ---");
  console.log(dvd1);
  dvd1.checkOut();
  console.log(dvd1);
  dvd1.returnItem();
  console.log(dvd1);
 
  console.log("\n--- Magazine ---");
  console.log(mag1);
  mag1.checkOut();
  console.log(mag1);
  mag1.returnItem();
  console.log(mag1);
  