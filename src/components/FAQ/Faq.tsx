import React, { useState } from 'react';
import './faq.css';

function Faq() {
    const [answer, setAnswer] = useState<number>();

    const handleAnswer = (id: number) => {
        setAnswer(id);
    };

    const faqs = [
        {
            id: 1,
            question: "What is my eligibility to book a car?",
            answer: "You should be 18 years old or above and must possess a valid driving license."
        },
        {
            id: 2,
            question: "Can I book for any period of time?",
            answer: "Yes, you can book for any period of time depending on availability."
        },
        {
            id: 3,
            question: "Can I opt for a longer period?",
            answer: "Yes, you can book a car for an extended period."
        },
        {
            id: 4,
            question: "Can I book a one-way trip?",
            answer: "Yes, one-way trip options are available."
        },
        {
            id: 5,
            question: "Is home delivery available?",
            answer: "Yes, home delivery options are available."
        },
        {
            id: 6,
            question: "How can I make the payment?",
            answer: "You can make the payment online via various payment methods."
        }
    ];

    return (
        <div>
            <section className="faq-section">
                <h4>Frequently Asked Questions</h4>
                <div className="questions">
                    {faqs.map((faq) => {
                        return (
                            <div className="question-answers" key={faq.id}>
                                <div className="question">
                                    <label>{faq.question}</label>
                                    {answer !== faq.id ? (
                                        <img 
                                            src="/assets/plusmark.svg" 
                                            alt="Expand Answer" 
                                            onClick={() => handleAnswer(faq.id)} 
                                            loading="lazy" 
                                        />
                                    ) : (
                                        <img 
                                            src="/assets/xmark.svg" 
                                            alt="Collapse Answer" 
                                            onClick={() => handleAnswer(0)} 
                                            loading="lazy" 
                                        />
                                    )}
                                </div>
                                <div className="answer">
                                    {answer === faq.id && <p>{faq.answer}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Faq;
