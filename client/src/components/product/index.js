import { useHistory, useParams } from 'react-router'
import { Button, Spinner } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { fetchData } from '../../lib'
import CardComp from '../card'
import Layout from '../layout'


function Product() {
  const { id } = useParams()
  const { getProduct } = fetchData

  const [product] = useFetch(null, getProduct, id)

  const history = useHistory()
  

  if (!product) return <Spinner>Loading...</Spinner>

  return (
    <Layout>
      <div className="w-50 p-4 m-auto">
        <Button onClick={() => history.goBack()} className="mb-4" color="primary" size="md" block={false}>Go Back</Button>
        <CardComp product={product} />
      </div>
    </Layout>
  )
}

export default Product
