"use client";

import TopToolbar from "./layout/TopToolbar";
import LeftSidebar from "./layout/LeftSidebar";
import RightSidebar from "./layout/RightSidebar";
import BottomStatusBar from "./layout/BottomStatusBar";
import Workspace from "./layout/Workspace";

export default function PackagingEditor() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopToolbar />

      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <Workspace />
        <RightSidebar />
      </div>

      <BottomStatusBar />
    </div>
  );
}