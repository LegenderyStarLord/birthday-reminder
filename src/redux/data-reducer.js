import photo_1 from "../assets/images/photo-1.jpg";
import photo_2 from "../assets/images/photo-2.jpg";
import photo_3 from "../assets/images/photo-3.jpg";
import photo_4 from "../assets/images/photo-4.jpg";
import photo_5 from "../assets/images/photo-5.jpg";
import photo_6 from "../assets/images/photo-6.jpg";
import photo_7 from "../assets/images/photo-7.jpg";
import photo_8 from "../assets/images/photo-8.jpg";
import photo_9 from "../assets/images/photo-9.jpg";
import photo_10 from "../assets/images/photo-10.jpg";
import photo_11 from "../assets/images/photo-11.jpg";
import photo_12 from "../assets/images/photo-12.jpg";

const CHANGE_BIRTHDAY_DATE = "CHANGE_BIRTHDAY_DATE";

let initialState = {
    birthdayData: [
        {
            id: 1,
            name: "Bertie Yates",
            birthday: 7,
            age: 29,
            image: photo_1
        },
        {
            id: 2,
            name: "Hester Hogan",
            birthday: 7,
            age: 32,
            image: photo_2
        },
        {
            id: 3,
            name: "Larry Little",
            birthday: 7,
            age: 36,
            image: photo_3
        },
        {
            id: 4,
            name: "John Green",
            birthday: 7,
            age: 29,
            image: photo_4
        },
        {
            id: 5,
            name: "Phil Foden",
            birthday: 7,
            age: 33,
            image: photo_5
        },
        {
            id: 6,
            name: "Harry Kane",
            birthday: 8,
            age: 33,
            image: photo_6
        },
        {
            id: 7,
            name: "Jane Swiss",
            birthday: 8,
            age: 27,
            image: photo_7
        },
        {
            id: 8,
            name: "Andy García",
            birthday: 8,
            age: 355,
            image: photo_8
        },
        {
            id: 9,
            name: "Sienna Miller",
            birthday: 8,
            age: 35,
            image: photo_9
        },
        {
            id: 10,
            name: "Matthew Fox",
            birthday: 9,
            age: 42,
            image: photo_10
        },
        {
            id: 11,
            name: "Katherine Langford",
            birthday: 9,
            age: 24,
            image: photo_11
        },
        {
            id: 12,
            name: "Viggo Mortensen",
            birthday: 9,
            age: 51,
            image: photo_12
        }
    ],

    newDate: ""
};

const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_BIRTHDAY_DATE:
            let selectedDate = action.selectedDate;
            return {
                ...state,
                newDate: selectedDate
            };


        default:
            return state;
    }
};

export const changeDateActionConstructor = (selectedDate) => {
    return {
        type: CHANGE_BIRTHDAY_DATE,
        selectedDate
    };
};

export default dataReducer;

