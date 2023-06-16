import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Replace '/my-app/' with your deployment subdirectory
  plugins: [react()],
});