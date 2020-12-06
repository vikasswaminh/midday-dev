import React from 'react'
import { RichText } from 'prismic-reactjs'
import markdownStyles from './markdown-styles.module.css'

const FAQS = ({ question , answer }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  return (
    <>
      <div className="mb-2 accordion" onClick={() => setAccordionOpen(!accordionOpen)}>
        <div className={`font-medium px-6 rounded-md bg-primary ${accordionOpen && 'rounded-br-none rounded-bl-none'} text-xl px-2 py-3 flex text-secondary flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:opacity-75`}>
          <div className="px-2 mt-1">
            <div>
              {accordionOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-8 h-8">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down w-8 h-8">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}

            </div>
          </div>
          <div className="flex-auto text-white">{question}</div>
        </div>
        <div className={`${!accordionOpen && 'hidden'} rounded rounded-tr-none rounded-tl-none p-4 text-justify text-left text-secondary mb-5 bg-gray`}>

          <div className="relative overflow-hidden mx-4">
            <div className="w-full mx-auto">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
