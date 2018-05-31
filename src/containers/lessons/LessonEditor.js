import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import * as constants from '../../constants/index'
import {widgetReducer} from '../../reducers/widgetReducer'
import {WidgetContainer} from '../../components/Widget'
import * as actions from '../../actions/index'
import {App}from '../WidgitList'


const store= createStore(widgetReducer)

export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.setLessonId =
            this.setLessonId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId: ''
        };
    }


    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState
        ({lessonId: lessonId});
    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.setLessonId(
            this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(
            newProps.match.params.lessonId);
    }

    render() {
        return (
            <div className="container-fluid">
                <Provider store={store}>
                    <App lessonId={this.state.lessonId} moduleId={this.state.moduleId}
                         courseId={this.state.courseId}/>
                </Provider>,
            </div>
        )
    }
}
