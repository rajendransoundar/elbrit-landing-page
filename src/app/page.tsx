import {
  Footer,
  Header,
  IconsCardSection,
  Ingredients,
  Latestnews,
  MainSection,
} from "../components";

export default function page() {
  return (
    <>
      <Header />
      <MainSection />
      <IconsCardSection />
      <Ingredients />
      <Latestnews />
      <Footer />
    </>
  );
}
