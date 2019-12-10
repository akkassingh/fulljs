import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
      <ContestPreview key={contestId} onClick={ onContestClick } {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.Object,
  onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;