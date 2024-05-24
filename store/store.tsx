    import {action, computed, makeObservable, observable, runInAction, autorun, makeAutoObservable } from 'mobx'
    import data from '../pages/quiz/dummyData.json';
    export interface Question {
        id : string,
        question : string,
        correctAnswer: string,
        options: string[],
        total : number,
        obtained: number,
        attempted: boolean,
    } 


    export const updateAttempt = ( questions:Question[], id:string, obtained:number) : Question[] => 
        questions.map( (question) =>({
            ...question,
            obtained : question.id === id ? obtained : 0 , 
            attempted : question.id === id ?  true : false,
        }))


    class Store {
        questions: Question[]  = [];
        id : string ="";
        obtained : number = 0;
        constructor(){
            makeAutoObservable(this, {
                obtained:observable , 
                updateAttempt: action, 
                loadQuestions: action
            });
        }

        updateAttempt(){
            updateAttempt(this.questions, this.id, this.obtained );

        }
        loadQuestions(){
            console.log("data===>",data.questions)
            // this.questions = data.questions.map(ques=> ques)
        }

        runInAction(){
            console.log()
        }
    


    }


    export default Store;