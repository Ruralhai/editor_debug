export type ToolSlice = {
  activeTool: string;
  setActiveTool: (tool: string) => void;
};

export const createToolSlice = (set: any): ToolSlice => ({
  activeTool: "select",

  setActiveTool: (tool) => set({ activeTool: tool }),
});