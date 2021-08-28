import IssuesActionTypes from "./issues.types";

const initialIssuesState = {
    currentPageIssues: [],
    isLoading: false,
    error: null,
};

export function issuesReducer(state = initialIssuesState, action) {
    switch (action.type) {
        case IssuesActionTypes.GET_ISSUES_START:
            return {
                ...state,
                isLoading: true,
            };
        case IssuesActionTypes.GET_ISSUES_SUCCESS:
            return {
                ...state,
                currentPageIssues: [...state.currentPageIssues, ...action.payload.issues],
                isLoading: false,
                error: null,
            };
        case IssuesActionTypes.GET_ISSUES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
