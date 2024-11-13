import type { PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import { useWebsiteBuilder } from "@/hooks/web-site-builder";
import { cn } from "@/lib/utils";
import type { Element } from "@/types/web-site-builder";
import {
  ActionType,
  type SelectElement,
  type DeleteElement,
  type UpdateElement,
} from "@/types/web-site-builder/actions";
import { Trash } from "lucide-react";

interface Props extends PropsWithChildren {
  element: Element;
}
const ElementActions = ({ children, element }: Props) => {
  const { dispatch } = useWebsiteBuilder();

  const handleDeleteElement = (elementId: string) => {
    const myDeleteAction: DeleteElement = {
      type: ActionType.DeleteElement,
      payload: {
        elementId,
      },
    };
    dispatch(myDeleteAction);
  };

  const handleElementClick = (element: Element) => {
    const mySelectAction: SelectElement = {
      type: ActionType.SelectElement,
      payload: {
        element,
      },
    };
    dispatch(mySelectAction);
  };

  return (
    <div className={cn("w-full")}>
      <div
        className={cn("group relative w-full")}
        onKeyDown={() => {}}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          // alert(element.id.substring(element.id.length - 6, element.id.length))
          handleElementClick(element);
        }}
      >
        <div className="absolute right-0 top-0 -translate-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant={"action"}
            size={"action"}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              // alert(element.id.substring(element.id.length - 6, element.id.length))
              handleDeleteElement(element.id);
            }}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ElementActions;
