import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/**/*.ts'],
	unbundle: true,
	format: 'esm',
	target: 'es2024',
	platform: 'node',
	nodeProtocol: true,
	sourcemap: true,
	outDir: 'dist',
	clean: true,
	dts: false,
	failOnWarn: 'ci-only',
	tsconfig: './tsconfig.build.json',
});
