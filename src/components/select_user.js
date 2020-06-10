 const selectUser = (users) => {
    console.log("You clicked on user: ", users);
    return {
        type: 'USER_SELECTED',
        payload: users
    }
};
export default selectUser;