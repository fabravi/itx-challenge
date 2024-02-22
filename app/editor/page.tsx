import { Heading, DragAndDropGrid } from "@/ui";

import { getEditorData } from "../lib/get-editor-data";

const Editor = async ({
  searchParams,
}: {
  searchParams?: {
    ids: string;
  };
}) => {
  const { products, templates } = await getEditorData(searchParams);

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
