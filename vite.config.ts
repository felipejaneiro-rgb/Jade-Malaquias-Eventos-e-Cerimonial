import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Substitua 'nome-do-repositorio' pelo nome exato do seu repositório no GitHub.
  // Exemplo: se seu repo é 'jade-eventos', use base: '/jade-eventos/'
  // Se for usar um domínio personalizado (ex: www.jade.com), remova esta linha ou use base: '/'
  base: '/',
})