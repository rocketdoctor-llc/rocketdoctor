import { connect } from 'react-redux'
import { getList } from 'actions/Auth'
import SignIn from 'components/SignIn';

const mapStateToProps = state => ({
  //auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  //getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn)
