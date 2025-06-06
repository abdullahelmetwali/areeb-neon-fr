import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <main className='dark min-h-dvh bg-background'>
    <App />
    <Toaster/>
  </main>
    </QueryClientProvider>
  </StrictMode>,
)
