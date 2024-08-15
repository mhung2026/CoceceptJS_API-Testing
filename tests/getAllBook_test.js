Feature('Book');

Scenario('Get all Books',  async({ I }) => {
    const res = await I.sendGetRequest('/books');
    I.seeResponseCodeIsSuccessful;
    console.log(res.data);
});