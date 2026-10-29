import { application } from '@application.root';

async function bootstrap(): Promise<void> {
	try {
		await application.listen({
			port: 3000,
			host: '0.0.0.0',
		});
	} catch (error) {
		application.log.error(error);
		process.exit(1);
	}
}

bootstrap();
