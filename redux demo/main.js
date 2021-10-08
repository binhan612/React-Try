console.log(window.Redux);
const { createStore } = window.Redux;

// State
// Reducer
// Store

const initialState = JSON.parse(localStorage.getItem("hobby_list")) || [];
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state];
            newList.push(action.payLoad);
            return newList;
        }
        default:
            return state
    };
};
const store = createStore(hobbyReducer);

// -------------

// RENDER REDUX HOBBYREDUCER
const renderHobbylist = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId');
    if (!ulElement) return;

    // reset previous content of ul
    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    };
};

// RENDER INITIAL HOBBY LIST
const initialHobbiList = store.getState();
console.log(initialHobbiList)
renderHobbylist(initialHobbiList);

// HANDLE FORM SUBMIT
const hoobyFormElement = document.querySelector("#hobbyFormId");
const handleFormSubmit = (e) => {
    // Prevent browser reloading
    e.preventDefault();
    const hobbyInputElement = hoobyFormElement.querySelector("#hobbyInputId");

    const action = {
        type: 'ADD_HOBBY',
        payLoad: hobbyInputElement.value
    };

    store.dispatch(action);
    hoobyFormElement.reset();
};
hoobyFormElement.addEventListener('submit', handleFormSubmit);

store.subscribe(() => {
    const newHoobyList = store.getState();
    renderHobbylist(newHoobyList);
    localStorage.setItem('hobby_list', JSON.stringify(newHoobyList));
});