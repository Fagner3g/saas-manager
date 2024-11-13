"use client";
import Preview from "../../preview";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CloudUpload, Eye, Save } from "lucide-react";
const SidebarActions = () => {
  return (
    <div className="flex w-full flex-row items-center justify-around rounded-lg border">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1" variant={"ghost"} size={"icon"}>
                  <Eye className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="flex min-h-screen min-w-full flex-col justify-start">
                <DialogTitle />
                <DialogDescription />
                <Preview />
              </DialogContent>
            </Dialog>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visualizar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="flex-1" variant={"ghost"} size={"icon"}>
              <Save className="mr-2 h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Salvar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="flex-1" variant={"ghost"} size={"icon"}>
              <CloudUpload className="mr-2 h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Publicar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SidebarActions;
