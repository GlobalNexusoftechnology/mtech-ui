import BannerSlider from "../banner/banner-slider"
import ClientSays from "../client-says/client-says"
import FeaturedProducts from "../featured-products/featured-products"
import OurProduct from "../our-product/our-product"
import ProductRange from "../product-range/product-range"
import Trusted from "../trusted/trusted"

const HomeView = () => {
  return (
    <>
        <BannerSlider />
        <ProductRange />
        <FeaturedProducts />
        <OurProduct />
        <ClientSays />
        <Trusted />
    </>
  )
}

export default HomeView