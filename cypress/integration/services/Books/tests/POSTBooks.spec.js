import * as POSTBooks from '../requests/POSTBooks.request';

context('POST Books', () => {
  it('Insert new Book', () => {
    POSTBooks.addBook().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("Book 1");
    })
  });
});