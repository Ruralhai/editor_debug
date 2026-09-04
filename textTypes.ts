export type TextStyle = {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: "normal" | "italic";

  textAlign: "left" | "center" | "right";

  lineHeight: number;
  letterSpacing: number;

  rotation: number;
  opacity: number;

  color: string;
};

export type TextEditorState = {
  id: string;
  x: number;
  y: number;
  width: number;
  text: string;
} & TextStyle;