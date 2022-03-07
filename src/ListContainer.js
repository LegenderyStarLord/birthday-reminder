import { changeDateActionConstructor } from "../src/redux/data-reducer";
import List from "./List"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        birthdayData: state.mainPage.birthdayData,
        newDate: state.mainPage.newDate,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDate: (selectedDate) => {
            dispatch(changeDateActionConstructor(selectedDate));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);