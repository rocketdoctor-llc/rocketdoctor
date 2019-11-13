import { connect } from 'react-redux';
import { getList } from 'actions/Auth';
import AboutUs from 'components/AboutUs';

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutUs)
