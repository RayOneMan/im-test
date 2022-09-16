import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false
}

const sidebarPanelSlice = createSlice({
    name: 'showSidebar',
    initialState,
    reducers: {
        showSidebar: (state) => {
            state.sidebar = !state.sidebar;
            return state;
        }
    }
})

const { actions, reducer } = sidebarPanelSlice;

export default reducer;

export const { showSidebar } = actions;

export const sidebarSelector = (state: any) => state.sidebar;