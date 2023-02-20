import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../../../redux/tablesRedux";

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <>
    {tables.map(table => (
    <Row key={table.id} className="py-3 border-bottom align-items-center">
      <Col xs={2}>
        <Card.Title>Table {table.id}</Card.Title>
      </Col>
      <Col xs={8}>
        <Card.Text><strong>Status: </strong>{table.status}</Card.Text>
        {table.status === "Busy" &&
        <Card.Text><strong>Bill: </strong>${table.bill}</Card.Text>}
      </Col>
      <Col>
      <Link to={'/table/' + table.id}>
        <Button variant='primary'>Show more</Button>
      </Link>
      </Col>
    </Row>
    ))}
		</>
  );
};

export default Tables;