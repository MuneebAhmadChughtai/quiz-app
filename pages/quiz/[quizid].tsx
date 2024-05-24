import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import data from "./dummyData.json"
import Store, { updateAttempt } from '@/store/store';



export function getStaticProps(staticProps: any) {
  console.log(staticProps.params)
  return {
    props: {
      question: data.questions.find(question => question.id === staticProps.params.quizid)
    }
  }
}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = data.questions
  console.log("posts===>", posts)

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { quizid: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}





function quiz(props: any) {

  const [isloading, setIsLoading] = useState(false);
  const [selection, setSelection] = useState("");


  useEffect(() => {
    console.log("props====>", props)
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    selection === props.question.correctAnswer && updateAttempt

  }

  const handleChange = (e: any) => {
    console.log(e.target.value)
    setSelection(e.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center mb-5">

        <label>
          <h1>{props.question.question}</h1>
          <select value={selection} onChange={handleChange} >

            {props.question.options.map((opt: any, index: number) => <option value={opt} key={opt.index}>{opt}</option>)}
          </select>
        </label>

        <input type="submit" value="Submit" className="rounded-md mt-5 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
      </div>
    </form>
  )
}

export default observer(quiz)