import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import HobbyList from '../../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from "../../actions/hobby";

const ramdomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        // Ramdom a hobby object: id + title
        const newId = ramdomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        };
        // Dispatch action to add new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div className='home-page'>
            <h1>REDUXHOOK-HOMEPAGE</h1>

            <button onClick={handleAddHobbyClick}>Add Hobbies</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            ></HobbyList>
        </div>
    );
};
export default HomePage;