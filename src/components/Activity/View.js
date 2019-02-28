import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import ActivityList from './ActivityList';
import Loading from './Loading';
import Error from './Error';


const View = ({
  loading, error, data, initialQuery, onLoad,
  RenderSearchInput, RenderActivityList, RenderLoading, RenderError,
}) => (
  <div>
  <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad} />
  <section>
    { (loading) ? <RenderLoading />
      : (error) ?  <RenderError error={error} />
      : <RenderActivityList activities={data} />}
  </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  activities: PropTypes.string,
  initialQuery: PropTypes.string.isRequired,
  RenderActivityList: PropTypes.func,
  RenderLoading: PropTypes.func,
  RenderError: PropTypes.func,
};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderActivityList: ActivityList,
  RenderLoading: Loading,
  RenderError: Error,
};

export default View;
