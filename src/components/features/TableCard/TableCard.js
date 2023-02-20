import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTableById, editTable } from "../../../redux/tablesRedux";
import TableForm from "../TableForm/TableForm";

const TableCard = () => {

  const { id } = useParams();
  
  const getTable = useSelector(state => getTableById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = table => {
    dispatch(editTable({ ...table, id}));
    navigate('/');
  }

  if (!getTable) return <Navigate to='/' />
  return (
    <TableForm 
      action={handleSubmit}
      id={getTable.id}
      status={getTable.status}
      peopleAmount={getTable.peopleAmount}
      maxPeopleAmount={getTable.maxPeopleAmount}
      bill={getTable.bill}
    />
  );
};

export default TableCard;