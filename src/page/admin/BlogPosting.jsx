import React from 'react'
import Layout from '../../components/layout/Layout'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import { useEffect } from 'react'
const BlogPosting = () => {
    const [editorContent, setEditorContent] = useState("");

    // Handle editor content change
    const handleEditorChange = (event, editor) => {
      const data = editor.getData();
      setEditorContent(data);
    };

    // Handle form submission and save to MongoDB
    const handleSubmit = (e) => {
      e.preventDefault();

      // Send 'editorContent' to your server (e.g., via an API)
      // In the server, save the content to MongoDB
    };
    useEffect(()=>{
        console.log(editorContent)
    },[])
  return (
    <div>
      <Layout title="Create-Blog">
        <form onSubmit={handleSubmit}>
          <CKEditor
            editor={ClassicEditor}
            data={editorContent}
            onChange={handleEditorChange}
          />
          <button type="submit">Save to MongoDB</button>
        </form>
      </Layout>
    </div>
  );
}

export default BlogPosting
