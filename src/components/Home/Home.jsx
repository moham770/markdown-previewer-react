import { marked } from "marked";
import  { useState } from "react";
import style from './Home.module.css'


function Home() {
  const [code, setCode] = useState('## Enter Your Html Code Here');
  const [compiled, setCompiled] = useState(marked('## Enter Your Html Code Here'));
  const [hidePreview, setHidePreview] = useState(true);

  const btnHidePreview = () => setHidePreview(true);
  const btnOpenPreview = () => setHidePreview(false);

  const convertCode = (e) => {
    const newCode = e.target.value;
    setCode(newCode);

const domParser= new DOMParser().parseFromString(marked(newCode),'text/html')
setCompiled(domParser.body.innerHTML)
  }

  return (
    <div>
      <h2 className={style.header +` text-center fw-bold my-2`}>MarkDown Previewer</h2>
      <div style={{ minHeight: '90vh',width:'98%',margin:'auto'}} className="bg-dark p-3 rounded-2">
        <div className="row row-cols-sm-2">
          <div className="col">
            <button onClick={btnHidePreview} className="btn btn-info w-100">MarkDown</button>
          </div>
          <div className="col">
            <button onClick={btnOpenPreview} className="btn btn-danger w-100">Preview</button>
          </div>
        </div>
        {hidePreview ? (
          <textarea onInput={convertCode} value={code} />
        ) : (
          <div className="text-white my-2"dangerouslySetInnerHTML={{__html:compiled}}></div>
        )}
      </div>
    </div>
  );
}

export default Home;
