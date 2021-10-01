import "../styles/globals.css";
import type { AppProps } from "next/app";
import { I18n } from "aws-amplify";
import { L10n } from "../src/lib/l10n";

I18n.setLanguage("ja");
I18n.putVocabularies(L10n);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
