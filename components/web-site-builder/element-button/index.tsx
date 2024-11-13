"use client";
import { Button } from "@/components/ui/button";
import type { Element } from "@/types/web-site-builder";

type Props = {
  element: Element;
};

const ElementButton = ({ element }: Props) => {
  const { label, icon: Icon } = element.elementButton;
  const { type } = element;

  const onDragStart = (e: React.DragEvent) => {
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("elementType", type);
    // console.log(e.dataTransfer)
  };

  return (
    <Button
      className="flex h-20 w-20 cursor-grab flex-col items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs text-accent-foreground transition-colors hover:bg-accent/90"
      draggable="true"
      onDragStart={onDragStart}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  );
};

export default ElementButton;
