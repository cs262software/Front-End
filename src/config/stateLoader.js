const StateLoader = {
    loadState: function() {
        try {
            let serializedState = localStorage.getItem("http://calvintheatreapp.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    },

    saveState: function(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://calvintheatreapp.com:state", serializedState);

        }
        catch (err) {
        }
    },

    initializeState: function() {
        return {
          //state object
        };
    }
}

export default StateLoader;
