import ThemeWrapper from "@micromed/herz-ui/lib/theme/ThemeWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
