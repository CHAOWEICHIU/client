import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withActions, withData } from 'spunky';

import nameServiceActions from 'browser/actions/nameServiceActions';

import AddressBar from './AddressBar';

const mapNameServiceActionsToProps = (actions) => ({
  doQuery: (params) => actions.call(params)
});

const mapNameServiceDataToProps = (data) => ({
  query: data && data.query,
  target: data && data.target
});

export default compose(
  withActions(nameServiceActions, mapNameServiceActionsToProps),
  withData(nameServiceActions, mapNameServiceDataToProps),
  withRouter
)(AddressBar);
