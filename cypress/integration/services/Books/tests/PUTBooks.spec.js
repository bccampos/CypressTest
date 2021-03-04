import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {

  it('Update Book', () => {
    GETBooks.allBooks().then((resAllBooks) => {
      PUTBooks.updateBook(resAllBooks.body[0].id).should((resChangeBook) => {

        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Book Changed');

      })
    })
  });

  it('Insert AND update Book', () => {
    POSTBooks.addBook().then((resAddBook) => {
      PUTBooks.updateBook(resAddBook.body.id).should((resChangeBook) => {

        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Book Changed');

      })
    })
  });

});