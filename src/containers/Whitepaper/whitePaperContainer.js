import { connect } from 'react-redux'
import { getList } from 'actions/Auth'
import WhitePaper from 'components/WhitePaper'

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhitePaper)
