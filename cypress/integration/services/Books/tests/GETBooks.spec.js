import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('List All Books', () => {
      GETBooks.allBooks().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.not.null;
      })
    });
  });