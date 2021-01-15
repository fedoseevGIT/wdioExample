// const reportportal = require('wdio-reportportal-reporter');
// const RpService = require("wdio-reportportal-service");
const RerunService = require('wdio-rerun-service');

// const conf = {
//   reportPortalClientConfig: { // report portal settings
//     token: '0c7ee146-fc49-4420-9fbe-94cefd34ec30',
//     endpoint: 'http://localhost:8080/api/v1',
//     launch: 'superadmin_TEST_EXAMPLE',
//     project: 'superadmin_personal',
//     mode: 'DEFAULT',
//     debug: false,
//     description: "Описание проекта",
//     attributes: [{key:"tag", value: "foo"}],
//     headers: {"foo": "bar"} // optional headers for internal http client
//   },
//   reportSeleniumCommands: false, // add selenium commands to log
//   seleniumCommandsLogLevel: 'debug', // log level for selenium commands
//   autoAttachScreenshots: true, // automatically add screenshots
//   screenshotsLogLevel: 'info', // log level for screenshots
//   parseTagsFromTestTitle: false, // parse strings like `@foo` from titles and add to Report Portal
//   cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
//   autoAttachCucumberFeatureToScenario: false, // requires cucumberNestedSteps to be true for use
//   isSauseLabRun: false // automatically add SauseLab ID to rp tags.
// };

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
    services: [
        'chromedriver',
        [RerunService],
        // [RpService, {}]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {outputDir: 'allure-results'}], 
        // [reportportal, conf]
    ],

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
