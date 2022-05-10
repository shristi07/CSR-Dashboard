import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs, ...props }) => {
  return (
    <>
      <div className="breadcrumbs-container">
        {breadcrumbs.map(({ path, name }, index) => (
          <>
            <div className="breadcrumb">{name}</div>
          </>
        ))}
      </div>
    </>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default withRouter(Breadcrumbs);
