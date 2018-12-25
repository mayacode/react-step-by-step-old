import { connect } from 'react-redux';

import { clickedMyButton } from './actions';
import MyButton from './MyButton';

const mapStateToProps = state => ({
  clicks: state.myButtonReducer.clicks,
});

const mapDispatchToProps = dispatch => ({
  clickHandler: () => dispatch(clickedMyButton()),
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyButton);

export default MainContainer;
