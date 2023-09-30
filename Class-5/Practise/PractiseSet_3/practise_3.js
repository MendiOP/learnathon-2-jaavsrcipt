//a very simple libary management system

// Abstract class representing a Library Item
class LibraryItem {
    constructor(title, author, itemID) {
      this.title = title;
      this.author = author;
      this.itemID = itemID;
      this.isAvailable = true;
      this.borrower = null;
      this.dueDate = null;
    }
  
    checkOut(borrower, dueDate) {
      if (this.isAvailable) {
        this.isAvailable = false;
        this.borrower = borrower;
        this.dueDate = dueDate;
        console.log(this.title + ' by ' + this.author + ' has been checked out by ' + borrower + ' and is due on ' + dueDate + '.');
      } else {
        console.log(this.title + ' is not available.');
      }
    }
  
    returnItem() {
      if (!this.isAvailable) {
        console.log(this.title + ' has been returned by ' + this.borrower + '.');
        this.isAvailable = true;
        this.borrower = null;
        this.dueDate = null;
      } else {
        console.log(this.title + ' is already available.');
      }
    }
  

    displayInfo() {
      throw new Error("Subclasses must implement displayInfo.");
    }
  }
  

  class Book extends LibraryItem {
    constructor(title, author, itemID, isbn) {
      super(title, author, itemID);
      this.isbn = isbn;
    }
  
    displayInfo() {
      return 'Book: ' + this.title + ' by ' + this.author + '\nISBN: ' + this.isbn + '\nAvailable: ' + this.isAvailable;
    }
  }
  

  class Magazine extends LibraryItem {
    constructor(title, author, itemID, issueNumber) {
      super(title, author, itemID);
      this.issueNumber = issueNumber;
    }
  
    displayInfo() {
      return 'Magazine: ' + this.title + ' (Issue ' + this.issueNumber + ') by ' + this.author + '\nAvailable: ' + this.isAvailable;
    }
  }
  

  class DigitalMedia extends LibraryItem {
    constructor(title, author, itemID, format) {
      super(title, author, itemID);
      this.format = format;
    }
  
    displayInfo() {
      return 'Digital Media: ' + this.title + ' (' + this.format + ') by ' + this.author + '\nAvailable: ' + this.isAvailable;
    }
  }
  
  
  class LibraryCatalog {
    constructor() {
      this.catalog = [];
    }
  
    addItem(item) {
      this.catalog.push(item);
    }
  
    removeItem(itemID) {
      const index = this.catalog.findIndex(item => item.itemID === itemID);
      if (index !== -1) {
        this.catalog.splice(index, 1);
        console.log('Item with ID ' + itemID + ' has been removed from the catalog.');
      } else {
        console.log('Item with ID ' + itemID + ' not found in the catalog.');
      }
    }
  
    findItemByTitle(title) {
      return this.catalog.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
    }
  
    findItemByAuthor(author) {
      return this.catalog.filter(item => item.author.toLowerCase().includes(author.toLowerCase()));
    }
  }
  
  // Create a library catalog
  const catalog = new LibraryCatalog();
  
  // Create library items and add them to the catalog
  const book1 = new Book('Aj Himur Biye', 'Humayun Ahmed', 'B001', '12345878');
  const magazine1 = new Magazine('Data Structure and Algorithm', 'Cormen, Leisterson', 'M001', 255);
  const digitalMedia1 = new DigitalMedia('The Shawshank Redemption', 'Frank Darabont', 'D001', 'Blu-ray');
  
  catalog.addItem(book1);
  catalog.addItem(magazine1);
  catalog.addItem(digitalMedia1);
  
  // Perform operations on library items
  book1.checkOut('Mehedi Hasan', '2023-10-15');
  magazine1.checkOut('Tajnur Hasan', '2023-10-20');
  
  book1.returnItem();
  
  // Display item info
  console.log('\nItem Information:');
  console.log(book1.displayInfo());
  console.log(magazine1.displayInfo());
  console.log(digitalMedia1.displayInfo());
  
  // Search for items
  console.log('\nSearch Results by Title:');
  console.log(catalog.findItemByTitle('the'));
  console.log('\nSearch Results by Author:');
  console.log(catalog.findItemByAuthor('Frank Darabont'));
  
  // Remove an item from the catalog
  catalog.removeItem('M001');
  