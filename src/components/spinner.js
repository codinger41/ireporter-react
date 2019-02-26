import React from 'react';

export default props => {
  const { loading } = props;
  return loading ? (
    <div class="lds-ring">
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
    </div>
    </div>
  ) : null;
};
