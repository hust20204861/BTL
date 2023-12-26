import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import Loader from '../../components/layout/Loader'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'

const UsersList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth)

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(allUsers(token));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('User deleted successfully');
            navigate('/users');
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, navigate, token])

    const deleteUserHandler = (userId, token) => {
        dispatch(deleteUser(userId, token))
    }

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'User ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        users.forEach(user => {
            data.rows.push({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,

                actions: <Fragment>
                    <Link to={`/admin/update/${user.id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user.id, token)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }


    return (
        <Fragment>
            <MetaData title={'All Users'} />
         
                    <Fragment>
                        <h1>All Users</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setUsers()}
                                bordered
                                striped
                            />
                        )}

                    </Fragment>
        </Fragment>
    )
}

export default UsersList
