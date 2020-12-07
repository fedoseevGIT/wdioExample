exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        // TypeScript setup
        require: ['ts-node/register'],
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
}
