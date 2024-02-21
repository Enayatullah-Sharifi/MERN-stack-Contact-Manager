import { configureStore} from '@reduxjs/toolkit'
import contactSlicer from '../features/contactSlicer'


const store = configureStore({
    reducer: {
        contactReducer: contactSlicer
    }
})


export default store