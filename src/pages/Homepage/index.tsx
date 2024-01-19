import { QuoteCard } from "@/components/PageComponents/Card";
import { Navbar, Footer } from "@/components/PageComponents/index";

const Homepage = () => {
  return (
    <div className="h-screen bg-mainBg flex flex-col justify-between py-4">
      <Navbar />
      <div className="bg-mainBg p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
