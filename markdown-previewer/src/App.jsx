import { useState } from 'react';
import './App.css';
import { marked } from 'marked';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
  let [text, setText] = useState(`
  This is a paragraph
  
  # Heading 1!
  ## Heading 2!

  - list item 1
  - list item 2

  [VisitMyWebsite](https://nikeshuprety.com.np)
  
  Inline Code \`<div></div>\`
  
  **Bold Text**
  
  This is a block of code

  ![Niku Logo](https://yt3.ggpht.com/yti/AHXOFjXDxlpJaOKwfBrJqnH7JH27ffV7h2mM_uZEznz5nSQ=s88-c-k-c0x00ffffff-no-rj-mo)

  \`\`\`
  const function(){
    return "THis is a multiline code";
  }

  \`\`\`

  `)

  const markdown = marked(text ,{breaks: true});
  return (
    <div className="App">
        <h1 className='heading1'>Markdown Previewer</h1>
        <h2 className='heading2'>Editor</h2>
      <textarea value={text} onChange={e=>setText(e.target.value)} name="" id="editor" cols="68" rows="15"></textarea>
      <h2 className='heading2'>Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}>
      </div>
        {/* <ReactMarkdown id="preview">{text}</ReactMarkdown> */}
      </div>
  )
}

export default App
