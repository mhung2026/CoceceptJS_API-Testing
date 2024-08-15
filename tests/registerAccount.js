Feature('Book');

Scenario('Login',  async({ I }) => {
    const res = await I.sendPostRequest('/api-clients',{
        "clientName": "Hakan",
        "clientEmail": "abcd2@msn.com"
    });
    // matches 200, 201, 202, ... 206
    // I.seeResponseCodeIsSuccessful();
    // matches 300...308
    // I.seeResponseCodeIsRedirection();
    // matches 400..451
    // I.seeResponseCodeIsClientError();
    // matches 500-511
    // I.seeResponseCodeIsServerError();
    I.seeResponseCodeIsSuccessful();
    console.log(res.data);
});
