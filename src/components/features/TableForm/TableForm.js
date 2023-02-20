import { useState } from "react";
import { Button, Form, FormLabel, FormSelect } from "react-bootstrap";

const TableForm = ({ action, ...props }) => {

  const [table] = useState(props.id || "");
  const [status, setStatus] = useState(props.status || "");
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || "");
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || "");
  const [bill, setBill] = useState(props.bill || "");

  const handleSubmit = () => {
    action({ status, peopleAmount, maxPeopleAmount, bill });
  };

  if (maxPeopleAmount > 10) setMaxPeopleAmount("10");
  if (maxPeopleAmount < 0) setMaxPeopleAmount("0");
  if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
  if (peopleAmount < 0) setPeopleAmount("0");
  if (bill < 0) setBill("0");

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <h1 className='my-3'>
        <strong>Table {table}</strong>
      </h1>
      <Form.Group className='my-3 align-items-center d-flex w-50'>
        <FormLabel className='me-3 mt-2'>
          <strong>Status:</strong>
        </FormLabel>
        <FormSelect value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value='Free'>Free</option>;
          <option value='Reserved'>Reserved</option>;
          <option value='Busy'>Busy</option>;
          <option value='Cleaning'>Cleaning</option>;
        </FormSelect>
      </Form.Group>
      <Form.Group className='my-3 align-items-center d-flex w-25'>
        <Form.Label className='me-4 mt-2'>
          <strong>People:</strong>
        </Form.Label>
        <Form.Control type='text' value={peopleAmount} onChange={e=>setPeopleAmount(e.target.value)} className='w-25 text-center' />
        /
        <Form.Control type='text' value={maxPeopleAmount} onChange={e=>setMaxPeopleAmount(e.target.value)} className='w-25 text-center' />
      </Form.Group>
      {status === "Busy" && 
      <Form.Group className='my-3 align-items-center d-flex w-25'>
        <Form.Label className='me-5 mt-2'>
          <strong>Bill:</strong>
        </Form.Label>
        $ <Form.Control type='text' value={bill} onChange={e=>setBill(e.target.value)} className='w-25 text-center' />
      </Form.Group>
      }
      <Button type="submit">Update</Button>
    </Form>
    </>
  );
}

export default TableForm;