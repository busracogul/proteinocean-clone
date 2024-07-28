import BestsellersSection from '../HomePage/BestSellersSection'
import ProductDetailFeature from './ProductDetailFeature'

function index() {
  return (
    <>
    <ProductDetailFeature/>
   <div className='my-24'>
   <BestsellersSection title="SON GÖRÜNTÜLENEN ÜRÜNLER"/>
   </div>
    </>
  )
}

export default index