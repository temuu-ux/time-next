import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex gap-10 justify-between flex-col m-auto py-5">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
