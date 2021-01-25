describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('file:///Users/a.fedoseev/work/test.html');
        browser.pause(3000);
        $('button').moveTo();
        browser.pause(1000);
        browser.performActions([
            {
            "type": "pointer",
            "id": "finger",
            "parameters": {"pointerType": "mouse"},
            "actions": [
            {"type": "pointerDown", "button": 0},
            {"type": "pointerUp", "button": 0}
            ]
            }
            ]);
        browser.pause(3000);
    })
})