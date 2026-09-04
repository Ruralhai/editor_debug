import { create } from "zustand";

import {
    createViewportSlice,
    ViewportSlice,
} from "./slices/viewportSlice";

import {
    createToolSlice,
    ToolSlice,
} from "./slices/toolSlice";

import {
    createSelectionSlice,
    SelectionSlice,
} from "./slices/selectionSlice";

import {
    createObjectSlice,
    ObjectSlice,
} from "./slices/objectSlice";

type EditorStore = ViewportSlice & ToolSlice & SelectionSlice & ObjectSlice;

export const useEditorStore = create<EditorStore>()((...a) => ({
    ...createViewportSlice(a[0]),
    ...createToolSlice(a[0]),
    ...createSelectionSlice(a[0]),
    ...createObjectSlice(a[0]),
}));