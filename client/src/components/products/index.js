import { NavLink } from 'react-router-dom'
import { Spinner, Col } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { fetchData } from '../../lib'
import CardComp from '../card'
import Layout from '../layout'

function Products() {
  const { getProducts } = fetchData

  const [products] = useFetch([], getProducts)

  if (products.length === 0) return <Spinner>Loading...</Spinner>

  return (
    <Layout title="Products">
      {products.map((product) => (
        <Col sm="4" key={product.id}>
          <NavLink className="text" to={`products/${product.id}`}>
            <CardComp product={product} width="350" height="400" />
          </NavLink>
        </Col>
      ))}
    </Layout>
  )
}

export default Products
