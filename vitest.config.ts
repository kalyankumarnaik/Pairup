import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [
      'tests/**/*.test.ts',
      'tests/**/*.spec.ts',
      'apps/api/test/**/*.spec.ts'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '.turbo/**',
        'Pairup/**',
        'scripts/**',
        'scratch/**',
        '**/*.d.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@pairup/contracts': path.resolve(__dirname, 'packages/contracts/src'),
      '@pairup/domain-types': path.resolve(__dirname, 'packages/domain-types/src'),
      '@pairup/design-tokens': path.resolve(__dirname, 'packages/design-tokens/src'),
      '@pairup/validation': path.resolve(__dirname, 'packages/validation/src'),
      '@pairup/api-client': path.resolve(__dirname, 'packages/api-client/src'),
      '@pairup/config': path.resolve(__dirname, 'packages/config/src'),
      '@pairup/test-utils': path.resolve(__dirname, 'packages/test-utils/src')
    }
  }
});
