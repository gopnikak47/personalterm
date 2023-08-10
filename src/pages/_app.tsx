import React, { useState } from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { randompics } from '../utils/bin/api_commands';

const App: React.FC<any> = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [pictureUrl, setPictureUrl] = useState<string | null>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          key="viewport"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-full text-xs md:text-base"
        onClick={onClickAnywhere}
        style={{
          minHeight: '80vh', // Ensure full viewport coverage
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <main
          className="bg-light-background dark:bg-dark-background flex-grow p-2"
          style={{
            overflow: 'auto', // Enable scrolling if content overflows
          }}
        >
          <Component {...pageProps} inputRef={inputRef} />
        </main>
        {pictureUrl && (
          // Display picture on the page
          <img src={pictureUrl} alt="Random Picture" />
        )}
      </div>
    </>
  );
};

export default App;
