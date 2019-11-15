import { connect } from 'react-redux';
import ForgotPassword from 'components/ForgotPassword';

const mapStateToProps = state => ({
  //auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  //getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword)
