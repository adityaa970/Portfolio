import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FNXJSJYN4P"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNXJSJYN4P');
          `,
        }}
      />
      
      {process.env.NODE_ENV !== 'development' && (
        <Script id="disable-inspect" strategy="afterInteractive">
          {`
            // Disable right-click
            document.addEventListener('contextmenu', event => event.preventDefault());

            // Disable F12, Ctrl+Shift+I/J/C, Ctrl+U
            document.addEventListener('keydown', (event) => {
              if (
                event.key === 'F12' ||
                (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
                (event.ctrlKey && event.key === 'U')
              ) {
                event.preventDefault();
              }
            });
          `}
        </Script>
      )}

      {/* Site Layout */}
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
