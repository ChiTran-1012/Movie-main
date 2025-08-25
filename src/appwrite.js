import { Client, Databases, Query, ID } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint('http://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("searchTerm", searchTerm)]
    );

    if (result.total > 0) {
      // Tài liệu đã tồn tại => cập nhật searchCount
      const doc = result.documents[0];
      const updatedCount = (doc.searchCount || 0) + 1;

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        doc.$id,
        {
          searchCount: updatedCount
        }
      );
    } else {
      // Chưa có tài liệu => tạo mới
      await database.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          searchTerm: searchTerm,
          movie: movie,
          searchCount: 1
        }
      );
    }
  } catch (error) {
    console.error('Error updating search count:', error);
  }
};
