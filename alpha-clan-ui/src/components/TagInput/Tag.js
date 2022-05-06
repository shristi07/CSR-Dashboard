import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Icon from "@material-ui/core/Icon";
// import InfoButton from "../Dashboard/InfoButton";

const Tag = ({
               id,
               text,
               tagIcon,
               onRemove,
               isRemoveEnabled,
               validateTag,
               onValidateTag,
               validateTagResult
             }) => {

  const [validateLoader, setValidateLoader] = useState(true);
  const [isValid, setIsValid] = useState({isValid: true, message: ""})

  useEffect(
    () => {
      return () => {
        setValidateLoader(true);
        setIsValid({isValid: true, message: ""})
      }
    },
    []
  );
  useEffect(
    () => {
      if (validateTag) {
        onValidateTag(id);
      }
    },
    []
  );
  useEffect(
    () => {
      if (validateTag) {
        if (validateTagResult.hasOwnProperty(id)) {
          const {loader, isValid, error = ""} = validateTagResult[id];
          setValidateLoader(loader);
          setIsValid({isValid, message: error});
        }
      }
    },
    [validateTag, validateTagResult, id, setValidateLoader, setIsValid]
  );

  return <>
    <div className="tag2-container tag-block" key={`div-tag-id-${id}`}>
      {
        validateTag ?
          validateLoader ?
            <Icon className="spin" fontSize={"small"} style={{color: " #858796", margin: "0 5px 0 0"}}>refresh</Icon> :
            isValid.isValid ?
              <Icon fontSize={"small"} style={{color: " #1cc88a", margin: "0 5px 0 0"}}>done</Icon> :<></>
              // <InfoButton
              //   content={isValid.message}
              //   placement={"bottom"}
              //   icon={() => <Icon fontSize={"small"} style={{color: " #e74a3b", margin: "0 5px 0 0"}}>error</Icon>}
              // /> 
              :
          undefined
      }
      {
        tagIcon &&
        <span className="tag-icon"> {
          typeof tagIcon === "function" ?
            <> {tagIcon()} </> :
            // <Icon>{tagIcon}</Icon>
            undefined
        }</span>
      }
      {text}
      {
        isRemoveEnabled &&
        <span className="close-icon" onClick={() => onRemove(id)}><Icon className={"icon"}>close</Icon></span>
      }
    </div>
  </>
};

Tag.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tagIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onRemove: PropTypes.func,
  isRemoveEnabled: PropTypes.bool,
  validateTag: PropTypes.bool,
  onValidateTag: PropTypes.func,
  validateTagResult: PropTypes.object
};
Tag.defaultProps = {
  isRemoveEnabled: true,
  validateTag: false,
  onValidateTag: () => {
  },
  validateTagResult: {}
}

export default Tag
