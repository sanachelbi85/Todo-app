import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoliste: [
    {
    id: Math.random(),
    title: "Postuler votre CV",
    description:"Veuillez deposez votre CV suivi a notre condidature",
    isDone:false,
},
{
  id: Math.random(),
  title: "Postuler votre lettre de motivation",
  description:"Veuillez deposer votre lettre de motivation",
  isDone:false,
},
{
  id: Math.random(),
  title: "Passer votre entretein d'embauche",
  description:"Good lack",
  isDone:true,
},
],
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state , action) => {
     state.todoliste.push(action.payload);
    },
    removeTask: (state , action) => {
     state.todoliste = state.todoliste.filter((el) => el.id !== action.payload.id);
    },
    doneTask: (state , action) => {
      let i = state.todoliste.findIndex((el) => el.id === action.payload.id);
      state.todoliste[i] = {
        ...state.todoliste[i],
        isDone: !state.todoliste[i].isDone}
    },
    editTask: (state , action) => {
      let i = state.todoliste.findIndex((el) => el.id === action.payload.id);
      state.todoliste[i] = {
        ...state.todoliste[i],
        title: action.payload.edit.title,
        description: action.payload.edit.description
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask , removeTask , doneTask , editTask } = TodoSlice.actions

export default TodoSlice.reducer