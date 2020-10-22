import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // Create a new Sub Item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a new document Id to prevent the random string of numbers
            .documentId('downtown')
        ),
      // Add the rest of the document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
