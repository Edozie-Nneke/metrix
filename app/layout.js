import './globals.css';

import RootLayoutContainer from '@layouts/rootLayoutContainer';

export const metadata = {
  title: 'Metrix',
  description: 'A metric dashboard UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <RootLayoutContainer children={children} />
      </body>
    </html>
  );
}
