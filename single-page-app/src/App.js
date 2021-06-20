import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Feature from "./components/feature/Feature";
import SmartJackpot from "./components/smart-jackpot/SmartJackpot";
import Designed from "./components/designed-build-by/Designed";
import WhyUs from "./components/why-choose-us/WhyUs";
import UltimateFeature from "./components/ultimate-feature/UltimateFeature";
import Pricing from "./components/pricing/Pricing";
import Testimonila from "./components/testimonila/Testimonila";
import FAQ from "./components/FAQ/FAQ";
import DownloadApp from "./components/download-app/DownloadApp";

function App() {
  return (
    <>
      <Header />
      <Feature />
      <SmartJackpot />
      <Designed />
      <WhyUs />
      <UltimateFeature />
      <Pricing />
      <Testimonila />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
}
export default App;
