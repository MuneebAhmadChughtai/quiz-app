function QuizCard(props:any) {
    return (
        <div className="flex justify-center">
            <form action="">
                <h2 className="text-5xl mb-10">{props.question}</h2>
                {props.options.map( (opt:string, id:number) => 
                <> 
                    <label className="mr-2"> {opt} </label>
                    <input type="radio" key={id} name="answer" value={opt} />
                    <br />
                </>
                )}

            </form >
        </div>
    )
}

export default QuizCard