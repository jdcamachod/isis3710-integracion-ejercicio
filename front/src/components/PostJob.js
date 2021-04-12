import usePostJobForm from "./Hooks";
import { Button, Form } from "react-bootstrap";
import * as Joi from "joi";

function PostJob() {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    company: Joi.string().min(3).max(100).required(),
    salary: Joi.string().min(3).max(100).required(),
    city: Joi.string().min(3).max(100).required(),
  });
  const { handleSubmit, handleInputChange, errors } = usePostJobForm(schema);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type the name"
          id="name"
          name="name"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="company">Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type the company"
          id="company"
          name="company"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="salary">Salary</Form.Label>
        <Form.Control
          type="text"
          id="salary"
          placeholder="Type the salary"
          name="salary"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="city">City</Form.Label>
        <Form.Control
          type="text"
          id="city"
          placeholder="Type the city"
          name="city"
          onChange={handleInputChange}
        />
      </Form.Group>
      <div>
        <p>{errors.toString()}</p>
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}

export default PostJob;
