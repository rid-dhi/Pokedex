// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withTRPC } from '@trpc/next';
import { AppRouter } from '../server/router'; // Ensure this import is correct
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import '../app/globals.css';

// Create a client for react-query
const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

const trpc = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

// Export the App with TRPC HOC
// export default withTRPC<AppRouter>({
//   config({ctx }) {
//     const url = process.env.NEXT_PUBLIC_API_URL; // Ensure the URL is defined
//     return {
//       url: url || '', // Provide a fallback to an empty string if undefined
//       // You can also specify other options like headers if needed
//       // For example:
//       // headers: { 'x-custom-header': 'value' },
//       // transformer: {
//       //   // Transformer options if you use them
//       // },
//     };
//   },
//   ssr: false, // Set to true if you want SSR (Server Side Rendering)
// })(MyApp);

export default MyApp;