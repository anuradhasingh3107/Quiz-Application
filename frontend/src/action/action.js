export function createAction(actionType, payload) {
    const action = {
        type: actionType,
        data: payload
    }
    return action;
}
