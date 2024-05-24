function createInitialState() {
    const obtainedMarks = "";

    return {
    obtainedMarks: obtainedMarks
    };

  }
  
  function reducer(state:any, action:any) {
    switch (action.type) {
      case 'correct': {
        return {
          obtainedMarks: state.obtainedMarks + 1 ,
        };
      };
    }
    throw Error('Unknown action: ' + action.type);
  }

  export default reducer