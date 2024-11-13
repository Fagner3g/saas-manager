"use client";
import { EditableContent } from "@/components/ui/extension/editable-content";

const Page = () => {
  const handleSave = (value: unknown) => {
    console.log(value);
  };
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center">
      <EditableContent initialValue="Placeholder Text" action={handleSave} />
    </div>
  );
};

export default Page;
