"use client";

import ElementButton from "../element-button";
import EditComponent from "./edit-component";
import SidebarActions from "./sidebar-actions";

import { useWebsiteBuilder } from "@/hooks/web-site-builder";
import { ElementImpl } from "@/lib/web-site-builder/elements";

const SidebarComponents = () => {
  const {
    state: {
      editor: { selectedElement },
    },
  } = useWebsiteBuilder();

  return (
    <div className="fixed right-0 z-10 h-full w-64 rounded-l-lg border bg-background sm:static sm:w-auto">
      {/* <div className="flex h-full flex-col gap-4  justify-start"> */}
      <div className="flex h-full flex-col items-center justify-start gap-4">
        <SidebarActions />
        {selectedElement && <EditComponent key={selectedElement.id} />}
        {!selectedElement && (
          <div className="grid grid-cols-2 space-x-4">
            <ElementButton element={ElementImpl.TextElement} />
            <ElementButton element={ElementImpl.SimpleBannerElement} />
            {/* <ElementButton element={ElementImpl.ContainerElement} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarComponents;
