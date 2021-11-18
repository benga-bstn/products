import {
  CardTitle,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText
} from 'reactstrap'

function CardComp({ product: { title, description, image, price }, width, height }) {
  return (
    <Card className="p-3 mb-3">
      <CardTitle color="dark" tag="h3">
        {title}
      </CardTitle>
      <CardBody>
        <CardImg alt={description} src={image} width={width} height={height} />
        <CardSubtitle tag="h6" className="text-muted m-3">
          £{price}
        </CardSubtitle>
        <CardText className="text">{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardComp
