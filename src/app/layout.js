import "./globals.css";
import { Roboto } from "next/font/google";
import { AppProvider } from "@/AppContext";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import RouteHeaderMenu from "./components/layout/RouteMenu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "cargo-so",
  description: "Generated by fagundesrafael/cargo-so",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppProvider>
          <Header />

          <div className={"flex"}>
            <Sidebar />
            <div className={"flex flex-col w-full"}>
              <RouteHeaderMenu />
              {children}
            </div>
          </div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
