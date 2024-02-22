import { Heading, DragAndDropGrid } from "@/ui";

import { getEditorData } from "../lib/get-editor-data";

const Editor = async () => {
  const { products, templates } = await getEditorData();

  return (
    <>
      <Heading
        title="Drag & Drop Editor"
        paragraph="Move your items from row to row, change your items positions and reorder
        the rows at your please."
      />
      <DragAndDropGrid products={products} templates={templates} />
    </>
  );
};

export default Editor;
