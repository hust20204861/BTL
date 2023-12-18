import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import { newCourse, clearErrors } from '../../actions/courseActions'
import { NEW_COURSE_RESET } from '../../constants/courseConstants'

const NewCourse = () => {

    const [learningObject, setLearningObject] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');
    const [courseFor, setCourseFor] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');
    const [primarilyTaught, setPrimarilyTaught] = useState([]);
    const [courseImageUrl, setCourseImageUrl] = useState([]);
    const [promotionalVideoUrl, setPromotionalVideoUrl] = useState('');
    const [price, setPrice] = useState(0);
    const [welcomeMessage, setWelcomeMessage] = useState(0);
    const [congratulationMessage, setCongratulationMessage] = useState('');
    const [status, setStatus] = useState([]);
    const [rating, setRating] = useState([]);
    const [sale, setSale] = useState([]);
    const [totalEnroll, setTotalEnroll] = useState([]);
    const { useId, token } = useSelector(state => state.auth)



    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, success } = useSelector(state => state.newCourse);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            navigate('/admin/products');
            alert.success('Course created successfully');
            dispatch({ type: NEW_COURSE_RESET })
        }

    }, [dispatch, alert, error, success, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('learningObject', learningObject);
        formData.set('requiredSkills', requiredSkills);
        formData.set('courseFor', courseFor);
        formData.set('title', title);
        formData.set('subtitle', subtitle);
        formData.set('courseDescription', courseDescription);
        formData.set('language', language);
        formData.set('level', level);
        formData.set('category', category);
        formData.set('primarilyTaught', primarilyTaught);
        formData.set('courseImageUrl', courseImageUrl);
        formData.set('promotionalVideoUrl', promotionalVideoUrl);
        formData.set('price', price);
        formData.set('welcomeMessage', welcomeMessage);
        formData.set('congratulationMessage', congratulationMessage);
        formData.set('status', status);
        formData.set('rating', rating);
        formData.set('sale', sale);
        formData.set('totalEnroll', totalEnroll);
        formData.set('userId', useId);
        dispatch(newCourse(formData, token))
    }


    return (
        <Fragment>
            <MetaData title={'New Course'} />
            <div className="row">
                {/* <div className="col-12 col-md-2">
                    <Sidebar />
                </div> */}

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Course</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">LearningObject</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={learningObject}
                                        onChange={(e) => setLearningObject(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">RequiredSkills</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={requiredSkills}
                                        onChange={(e) => setRequiredSkills(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">courseFor</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={courseFor}
                                        onChange={(e) => setCourseFor(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">title</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">subtitle</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={subtitle}
                                        onChange={(e) => setSubTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">courseDescription</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={courseDescription}
                                        onChange={(e) => setCourseDescription(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">language</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">level</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">category</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">primarilyTaught</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={primarilyTaught}
                                        onChange={(e) => setPrimarilyTaught(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">courseImageUrl</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={courseImageUrl}
                                        onChange={(e) => setCourseImageUrl(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">promotionalVideoUrl</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={promotionalVideoUrl}
                                        onChange={(e) => setPromotionalVideoUrl(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">price</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">welcomeMessage</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={welcomeMessage}
                                        onChange={(e) => setWelcomeMessage(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">congratulationMessage</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={congratulationMessage}
                                        onChange={(e) => setCongratulationMessage(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">status</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">rating</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">sale</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={sale}
                                        onChange={(e) => setSale(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_field">totalEnroll</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={totalEnroll}
                                        onChange={(e) => setTotalEnroll(e.target.value)}
                                    />
                                </div>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewCourse
