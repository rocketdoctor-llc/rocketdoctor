import { connect } from 'react-redux'
import SignUp from 'components/SignUp';

const mapStateToProps = state => ({
  //auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  //getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)
