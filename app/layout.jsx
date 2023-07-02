"use client";
import "@styles/index.css";
import Navbar from "@components/Navbar";
import Body from "@components/Body";
import Footer from "@components/Footer";
import DataProvider from "@context/DataProvider";
import ScrollButton from "@components/ScrollButton";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    let r = document.querySelector(":root");
    if (theme === "light") {
      document.body.style.background = "black";
      document.body.style.color = "white";
      r.style.setProperty("--bgLight", "black");
      r.style.setProperty("--black", "white");
      r.style.setProperty("--white", "black");
      r.style.setProperty("--textLight", "white");
      r.style.setProperty("--bgLight-secondary", "#323232");
      r.style.setProperty("--bs-body-color", "white");
      r.style.setProperty("--bs-body-bg", "#323232");
      r.style.setProperty("--bgFooter-light", "rgb(0, 18, 41)");
      r.style.setProperty("--textGray-dark", "#c7d2fa");
      setTheme("dark");
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
      r.style.setProperty("--black", "");
      r.style.setProperty("--white", "");
      r.style.setProperty("--bgLight", "");
      r.style.setProperty("--textLight", "");
      r.style.setProperty("--bgLight-secondary", "");
      r.style.setProperty("--bs-body-color", "");
      r.style.setProperty("--bs-body-bg", "");
      r.style.setProperty("--bgFooter-light", "");
      r.style.setProperty("--textGray-dark", "");
      setTheme("light");
    }
  };

  return (
    <html lang="en">
      <body>
        <DataProvider>
          <main className="app">
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <div className="app-body">
              <Body theme={theme} />
            </div>
            <Footer theme={theme} />
            <ScrollButton />
          </main>
        </DataProvider>
      </body>
    </html>
  );
};

export default RootLayout;
