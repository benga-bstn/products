import { Container, Row } from 'reactstrap'

function Layout({ children, title }) {
  return (
    <Container> 
      <h1 className="text-center mb-5">{title}</h1>
      <Row className="align-items-center">{children}</Row>
    </Container>
  )
}

export default Layout
