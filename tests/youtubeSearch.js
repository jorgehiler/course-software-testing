module.exports = {
    "Test1": function (client) {
        const youtubePage = client.page.youtubePage();

        youtubePage.navigate()
            .setInputs("Dua Lipa")
            .clickSearch()
            .validateResult()
    },
    "Test2": function (client) {
        const youtubePage = client.page.youtubePage();

        youtubePage.navigate()
            .setInputs("rihanna")
            .clickSearch()
            .validateResult()
    },
    "Test3": function (client) {
        const youtubePage = client.page.youtubePage();

        youtubePage.navigate()
            .setInputs("Hector Lavoe")
            .clickSearch()
            .validateResult()
    },
    after: function(client){
        client.end()
    }
}