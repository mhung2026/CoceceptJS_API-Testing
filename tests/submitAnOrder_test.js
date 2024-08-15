Feature('Book');

Scenario('Submit An Order',  async({ I }) => {
    const res = await I.sendPostRequest('/orders',{
        
            "bookId": 1,
            "customerName": "ABC"
        
    });
    I.seeResponseCodeIs(200);
    console.log(res.data);
});
