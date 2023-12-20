import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add cart Movies', () => {
    const cart = new Cart();
    const movie1 = new Movie(1, "Sherlock Holmes", 1981, 'Russia', 'The Hound of the Baskervilles', 'Detective', '120 minutes', 600);
    const movie2 = new Movie(1, "Sherlock Holmes", 1983, 'Russia', 'The Treasures of Agra', 'Detective', '120 minutes', 600);
    cart.add(movie1);
    cart.add(movie2);
  
    expect(cart.items.length).toBe(2);
});

test('total price', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 10, 100);
    const book2 = new Book(2, 'book2', 'author2', 20, 200);
    const book3 = new Book(3, 'book3', 'author3', 30, 300);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getTotal()).toBe(60);
});

test('discounted price', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 10, 100);
    const book2 = new Book(2, 'book2', 'author2', 20, 200);
    const book3 = new Book(3, 'book3', 'author3', 30, 300);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getDiscout(10)).toBe(54);
});

test('delete ', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 10, 100);
    const book2 = new Book(2, 'book2', 'author2', 20, 200);
    const book3 = new Book(3, 'book3', 'author3', 30, 300);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    cart.deleteId(1);
    expect(cart.items.length).toBe(2);
});