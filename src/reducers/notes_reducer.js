import moment from 'moment';
const INITIAL_STATE = {
    notesList: [
        { id: 0, title: 'Note Item', location: 'Strathmore University', content:'bleh', timestamp: moment()},
        { id: 1, title: 'Note Item', location: 'Strathmore University', content:'bleh', timestamp: moment()},
        { id: 2, title: 'Note Item', location: 'Strathmore University', content:'bleh', timestamp: moment()}
    ],
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
