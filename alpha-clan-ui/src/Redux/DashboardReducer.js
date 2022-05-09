let temp = {
    driveState: {
      name: "Sunshine Academy",
      folders: [
        {
          name: "Grades",
          entity: "folder",
          files: [],
          folders: [],
        },
        {
          name: "Assignments",
          entity: "folder",
          files: [],
          folders: [],
        },
        {
          name: "Annual-Day Preperations",
          entity: "folder",
          files: [],
          folders: [],
        },
      ],
      files: [
        {
          name: "Attendance",
          type: "PDF",
          entity: "file",
        },
        {
          name: "Entrance-Procedure",
          type: "PPT",
          entity: "file",
        },
        {
          name: "Date-Sheets",
          type: "DOC",
          entity: "file",
        },
        {
          name: "Uniform receipt",
          type: "PDF",
          entity: "file",
        },
      ],
    },
  };
  function DriveReducer(state = temp, action) {
    switch (action.type) {
      case "CREATE_FOLDER":
        return {
          ...state,
          driveState: {
            ...state.driveState,
            folders: [...state.driveState.folders, action.payload],
          },
        };
      case "CREATE_FILE":
        return {
          ...state,
          driveState: {
            ...state.driveState,
            files: [...state.driveState.files, action.payload],
          },
        };
      case "RENAME_ENTITY":
        if (action.payload.entity === "file") {
          let entityIndex = state.driveState.files.findIndex(
            (ele, index) => index === action.payload.index
          );
          let tempEntity = { ...state.driveState.files[entityIndex] };
          tempEntity.name = action.payload.name;
          return {
            ...state,
            driveState: {
              ...state.driveState,
              files: [
                ...state.driveState.files.slice(0, entityIndex),
                {
                  ...tempEntity,
                },
                ...state.driveState.files.slice(entityIndex + 1),
              ],
            },
          };
        } else {
          let entityIndex = state.driveState.files.findIndex(
            (ele, index) => index === action.payload.index
          );
          let tempEntity = { ...state.driveState.folders[entityIndex] };
          tempEntity.name = action.payload.name;
          return {
            ...state,
            driveState: {
              ...state.driveState,
              folders: [
                ...state.driveState.folders.slice(0, entityIndex),
                {
                  ...tempEntity,
                },
                ...state.driveState.folders.slice(entityIndex + 1),
              ],
            },
          };
        }
      case "DUPLICATE_ENTITY":
        if (action.payload.entity === "file") {
          let entityIndex = state.driveState.files.findIndex(
            (ele, index) => index === action.payload.index
          );
          state.driveState.files.splice(
            entityIndex + 1,
            0,
            action.payload
          );
          return {
            ...state,
            driveState: {
              ...state.driveState,
              files: [...state.driveState.files],
            },
          };
        } else {
          let entityIndex = state.driveState.folders.findIndex(
            (ele, index) => index === action.payload.index
          );
          let abc = state.driveState.folders.splice(
            entityIndex + 1,
            0,
            action.payload
          );
          return {
            ...state,
            driveState: {
              ...state.driveState,
              folders: [...state.driveState.folders],
            },
          };
        }
      case "DELETE_ENTITY":
        if (action.payload.entity === "file") {
          let entityIndex = state.driveState.files.findIndex(
            (ele, index) => index === action.payload.index
          );
          state.driveState.files.splice(entityIndex, 1);
          return {
            ...state,
            driveState: {
              ...state.driveState,
              files: [...state.driveState.files],
            },
          };
        } else {
          let entityIndex = state.driveState.folders.findIndex(
            (ele, index) => index === action.payload.index
          );
          state.driveState.folders.splice(entityIndex, 1);
          return {
            ...state,
            driveState: {
              ...state.driveState,
              folders: [...state.driveState.folders],
            },
          };
        }
      default:
        return state;
    }
  }
  
  export default DriveReducer;
  