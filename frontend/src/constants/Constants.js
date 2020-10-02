export const INITIAL_STATE = {
    userInfoState: {
        role: ""
    }
};

export const loginState = {
    userName: "",
    passWord: "",
    loginDisability: true,
    // isLoggedIn: false
};

export const userState = {
    quizPlayed: "",
    Score: "20",
    userName: "Akash",
    role: ""
};

export const signupState = {
    firstName: "",
    lastName: "",
    id: ""
};

export const listState = {
    users: []
};

export const SET_USER_DATA = "SET_USER_DATA";


// role : Student, Teacher
