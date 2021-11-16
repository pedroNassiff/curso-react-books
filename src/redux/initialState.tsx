import { BookList } from '../components/BooksList'

export interface State {
    favorites: Array<BookList>;
    counter: number
}

const initialState: State = {
    favorites: [],
    counter: 0
}

export default initialState;