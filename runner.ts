import Launcher from '@wdio/cli/build/launcher';

const launcher = new Launcher('wdio.conf.js', {});

	launcher.run().then(
		(code) => {
			if (code === 0) {
				console.log('\x1B[32m', 'All tests were successfully finished');
			} else {
				console.log('\x1B[31m', 'Tests finished with unwanted exit code', code);
			}

			process.exit(code);
		},
		(error) => {
			process.exit(-1);
		},
	);