
import { ThemeProvider } from "next-themes";

function Theme({Component, pageProps}) {
    return (
        <ThemeProvider defaultTheme="system" attribute="light">
            <Component{...pageProps} />
        </ThemeProvider>
    )

}

export default Theme;