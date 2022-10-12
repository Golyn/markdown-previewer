import React from 'react';
import { useState } from 'react';
// import Preview from './Preview';
import { Container } from 'react-bootstrap';
import { marked } from 'marked';

const Home = () => {
  const [state, setState] = useState(
    `	
  # H1
  ## H2
  [title](https://www.example.com) 
  \`code\`
  \`\`\`javascript
  function add(num1, num2) {
    return num1 + num2;
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**`
  );

  marked.setOptions({
    breaks: true,
  });
  return (
    <div>
      <Container>
        <div className="ggg " style={{ margin: '50px auto' }}>
          <div
            style={{
              backgroundColor: '#6dbfb8',
              width: '608px',
              margin: '0 auto',
              border: '1px solid black',
            }}
          >
            <h2
              className="text-start"
              style={{
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                backgroundColor: '#4aa3a3',
                padding: '0 8px 0 10px',
              }}
            >
              Editor
            </h2>
          </div>
          <textarea
            className="mb-4"
            style={{
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
              backgroundColor: '#c0d8d8',
            }}
            name=""
            id="editor"
            cols="80"
            rows="10"
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></textarea>
        </div>
        <h2
          className="text-start"
          style={{
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            backgroundColor: '#4aa3a3',
            border: '1px solid black',
            margin: '0 auto',
            width: '1000px',
          }}
        >
          Previewer
        </h2>
        <div
          id="preview"
          style={{
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            backgroundColor: '#c0d8d8',
          }}
          dangerouslySetInnerHTML={{
            __html: marked(state),
          }}
        ></div>
        {/* <Preview state={state} /> */}
      </Container>
    </div>
  );
};

export default Home;
