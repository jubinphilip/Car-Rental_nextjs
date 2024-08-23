import React, { useState } from 'react'
import './faq.css'
function Faq() {
    const[answer,setAnswer]=useState<number>()
    const handleAnswer=(id:number)=>
    {
        setAnswer(id);
    }
    const faqs=[
        {
            id:1,
            question:"What is my eligibility to book a car?",
            answer:"You should be of 18 years old above and you must possess a valid driving license"
        },
        {
            id:2,
            question:"Can i book for any period of time?",
            answer:"second answer"
        },
        {
            id:3,
            question:"Can i opt car for a longer period?",
            answer:"Third answer"
        },
        {
            id:4,
            question:"  Can i book one-way trip??",
            answer:"Fourth answer"
        },
        {
            id:5,
            question:" Is there home delivery option available?",
            answer:"Fifth answer"
        },
        {
            id:6,
            question:"  How can i make the payment?",
            answer:"Sixth answer"
        }
    ]
  return (
    <div>
        <section className="faq-section">
    <h4>Frequently Asked Questions</h4>
    <div className="questions">
    {faqs.map((faq)=>
    {
        return(
            <div className="question-answers" key={faq.id}>
    
            <div className="question">
                <label >{faq.question}</label>
               { answer!==faq.id && <img src="/assets/plusmark.svg" alt="" onClick={()=>handleAnswer(faq.id)}/>}
               { answer===faq.id && <img src="/assets/xmark.svg" alt="" onClick={()=>handleAnswer(0)}/>}
            </div>
    
            <div className="answer">
              {answer===faq.id && <p>{faq.answer}</p>} 
            </div>
        </div>
        )
    })
  }

</div>
</section>
    </div>
  )
}

export default Faq
