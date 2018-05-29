import * as constants from "../constants";

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widgets')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}
export const findAllWidgetsForLesson = (dispatch, lessonId) => {
    fetch(('http://localhost:8080/api/lesson/LID/widgets').replace('LID',lessonId))
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_LESSON,
            widgets: widgets }))
}
export const addWidget = dispatch =>{
    dispatch({type: constants.ADD_WIDGET})
}

export const save = (dispatch, lessonId) =>{
    dispatch({type: constants.SAVE, lessonId:lessonId})
}

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)