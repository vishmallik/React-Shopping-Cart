import { connect } from "react-redux";
import { handleOrder } from "../store/actions";

function OrderBy(props) {
  return (
    <div className="sort">
      Order by
      <select
        value={props.selectedOrder}
        onChange={({ target }) => props.dispatch(handleOrder(target.value))}
      >
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    selectedOrder: state.selectedOrder,
  };
}

export default connect(mapStateToProps)(OrderBy);
