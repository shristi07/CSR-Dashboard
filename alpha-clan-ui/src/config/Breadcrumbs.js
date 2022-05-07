import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
// import config from '../../config/config';
import { useSelector } from 'react-redux';

const Breadcrumbs = ({
                       breadcrumbs,
                       ...props
                     }) => {

                    console.log("reach",breadcrumbs);
  return <>
    <div className="breadcrumbs-container">
      {
         breadcrumbs.map(({
                                                     path,
                                                     name
                                                   }, index) => <>{console.log("test bread",path,name)}
          <div
            // to={{pathname: path}}
            className="breadcrumb"
            // key={`${index}-${Math.random()}-${path}`}
          >
            {name}
          </div>
        </>)
      }
    </div>
  </>
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
};

export default withRouter(Breadcrumbs)
