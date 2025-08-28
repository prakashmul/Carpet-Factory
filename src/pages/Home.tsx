import ExperiencePage from "../components/layout/ExperiencePage"
import HomeBanner from "../components/layout/HomeBanner"
import LatestArrivals from "../components/layout/LatestArrival"
import ProductCategory from "../components/layout/ProductCategory"
import WhyChooseUs from "../components/layout/WhyChooseUs"

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <LatestArrivals />
      <ProductCategory />
      <WhyChooseUs />
      <ExperiencePage />
    </>
  )
}
