module.exports = {
    commands: [{
        setInputs: function (artist) {
            this.waitForElementVisible(this.elements.youtubeSearch.locateStrategy, this.elements.youtubeSearch.selector);
            this.api.setValue(this.elements.youtubeSearch.locateStrategy, this.elements.youtubeSearch.selector, artist, result => {
                console.log(`The search was done successfully ${result.status}`);
            })
            return this;
        },
        clickSearch: function () {
            this.waitForElementVisible(this.elements.youtubeSearchButton.locateStrategy, this.elements.youtubeSearchButton.selector);
            this.api.click(this.elements.youtubeSearchButton.locateStrategy, this.elements.youtubeSearchButton.selector,result => {
             console.log(`the element was clicked with status: ${result.status}`);
          });
          return this;
        },
        validateResult: function () {
            this.waitForElementPresent(this.elements.resultTitle.locateStrategy, this.elements.resultTitle.selector);
            this.api.expect.element(this.elements.resultTitle).text.to.not.equal("");
            this.waitForElementVisible(this.elements.resultDesk.locateStrategy, this.elements.resultDesk.selector);
            this.api.expect.element(this.elements.resultDesk).text.to.not.equal("");

            return this;
        }
    }],
    url: "https://www.youtube.com",
    elements: {
        youtubeSearch: {
            selector: '//input[@id= "search"]',
            locateStrategy: 'xpath'
        },
        youtubeSearchButton: {
            selector: '//button[@id= "search-icon-legacy"]',
            locateStrategy: 'xpath'
        },
        resultImg: {
            selector: '(//ytd-search[@class = "style-scope ytd-page-manager"]//div[@id="contents"])[2]/*[1]//a[@id = "thumbnail"]',
            locateStrategy: 'xpath'
        },
        resultTitle: {
            selector: '(//ytd-search[@class = "style-scope ytd-page-manager"]//div[@id="contents"])[2]/*[1]//div[@id = "meta"]//h3//yt-formatted-string',
            locateStrategy: 'xpath'
        },
        resultDesk: {
            selector: '((//ytd-search[@class = "style-scope ytd-page-manager"]//div[@id="contents"])[2]/*[1]//div[@class = "metadata-snippet-container style-scope ytd-video-renderer"]//yt-formatted-string)[2]/span[3]',
            locateStrategy: 'xpath'
        }
    }
}
