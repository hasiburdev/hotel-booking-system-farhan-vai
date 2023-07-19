import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
} from "reactstrap";
const AddHotel = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="title" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input
            id="title"
            name="title"
            placeholder="Enter title"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="desc" sm={2}>
          Description
        </Label>
        <Col sm={10}>
          <Input
            id="exampleText"
            name="desc"
            type="textarea"
            placeholder="Enter description"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="city" sm={2}>
          City
        </Label>
        <Col sm={10}>
          <Input id="city" name="city" placeholder="Enter city" type="text" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="address" sm={2}>
          Address
        </Label>
        <Col sm={10}>
          <Input
            id="address"
            name="address"
            placeholder="Enter address"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="distance" sm={2}>
          Distance
        </Label>
        <Col sm={10}>
          <Input
            id="distance"
            name="distance"
            placeholder="Enter distance"
            type="number"
          />
        </Col>
      </FormGroup>{" "}
      <FormGroup row>
        <Label for="price" sm={2}>
          Price
        </Label>
        <Col sm={10}>
          <Input
            id="price"
            name="price"
            placeholder="Enter price"
            type="number"
          />
        </Col>
      </FormGroup>{" "}
      <FormGroup row>
        <Label for="maxGroupSize" sm={2}>
          Max Group Size
        </Label>
        <Col sm={10}>
          <Input
            id="maxGroupSize"
            name="maxGroupSize"
            placeholder="Enter maximum group size"
            type="number"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="photo" sm={2}>
          File
        </Label>
        <Col sm={10}>
          <Input id="photo" name="photo" type="file" />
          <FormText>Upload a good quality picture of the hotel</FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="featured" sm={2}>
          Featured
        </Label>
        <Col
          sm={{
            size: 10,
          }}
        >
          <FormGroup check>
            <Input id="featured" name="featured" type="checkbox" />
            <Label check>Check this</Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default AddHotel;
