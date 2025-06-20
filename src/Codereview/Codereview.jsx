
import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './Codereview.css'
import { useNavigate } from 'react-router-dom';



function Codereview() {
  const [loading, setLoading] = useState(false);
  const [ code, setCode ] = useState("")

  const [ review, setReview ] = useState(``)

  const navigate=useNavigate();

  useEffect(() => {
    prism.highlightAll()
  }, [])

  // async function reviewCode() {
  //   const response = await axios.post('http://localhost:3000/ai/get-review', { code })
  //   setReview(response.data.review)
  // }

  async function reviewCode() {
  try {
    setLoading(true); // Start loading
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });
    setReview(response.data.review);
  } catch (err) {
    setReview("❌ Failed to fetch review");
  } finally {
    setLoading(false); // Stop loading
  }
}


  return (
    <>

    <div className="back-button-container">
      <button className="back-button" onClick={() => navigate("/")}>
      ⬅ Back to Home
      </button>
     </div>

      <main>
        {/* <div className="left">
          <div className="code">  
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div> */}
        <div className="left">
  <div className="code-editor-wrapper">
    {code.trim() === "" && (
      <div className="editor-placeholder">
        // Start writing your code here...
        {"\n"}function sum(a, b) {"\n"}  return a + b;
      </div>
    )}

    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) =>
        prism.highlight(code, prism.languages.javascript, "javascript")
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
        backgroundColor: "transparent",
        color: "#fff",
        minHeight: "100%",
        outline: "none",
        position: "relative",
        zIndex: 1,
      }}
    />
  </div>

  {/* ✅ This button must sit OUTSIDE the code wrapper */}
  <div onClick={reviewCode} className="review">
    Review
  </div>
</div>

        <div className="right">
  {loading ? (
    <div className="loader">
      <p>⚙️ Reviewing your code, please wait...</p>
    </div>
  ) : (
    <Markdown rehypePlugins={[rehypeHighlight]}>
      {review}
    </Markdown>
  )}
</div>

      </main>

      
    </>
  )
}



export default Codereview
