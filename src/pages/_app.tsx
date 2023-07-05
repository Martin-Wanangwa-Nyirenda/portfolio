import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  createDOMRenderer,
  FluentProvider,
  GriffelRenderer,
  SSRProvider,
  RendererProvider,
  webLightTheme,
} from '@fluentui/react-components';
type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

function MyApp({ Component, pageProps, renderer }: EnhancedAppProps) {
  return (
    // 👇 Accepts a renderer from <Document /> or creates a default one
    //    Also triggers rehydration a client
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme}>
          <Component {...pageProps} />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}

export default MyApp;
