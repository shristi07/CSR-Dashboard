// import { Toast } from "react-to";

export const submitContributionRequest = (element,cb) => {
    cb && cb();
    // Toast.
    return {
      type: "CREATE_FOLDER",
      payload: element,
    };
  };
  export const addFile = (element) => {
    console.log("ele",element);
    return {
      type: "CREATE_FILE",
      payload: element,
    };
  };
  
  export const renameEntity = (element, index) => {
    console.log("entering");
    return {
      type: "RENAME_ENTITY",
      payload: { ...element, index },
    };
  };
  
  export const duplicateEntity = (element, index) => {
    console.log("entering duplicate");
    return {
      type: "DUPLICATE_ENTITY",
      payload: { ...element, index },
    };
  };
  export const deleteEntity = (element, index) => {
    console.log("entering delete");
    return {
      type: "DELETE_ENTITY",
      payload: { ...element, index },
    };
  };
  