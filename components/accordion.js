import React from 'react'
import { RichText } from 'prismic-reactjs'
import markdownStyles from './markdown-styles.module.css'

const Accordion = ({ title , content }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  return (
    <>
      <div className="mb-2 accordion" onClick={() => setAccordionOpen(!accordionOpen)}>
        <div className={`font-medium px-6 rounded-md bg-gradient ${accordionOpen && 'rounded-br-none rounded-bl-none'} text-3xl px-2 py-3 flex text-secondary flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:opacity-75`}>
          <div className="px-2 mt-2">
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
          <div className="flex-auto text-white">{title}</div>
        </div>
        <div className={`${!accordionOpen && 'hidden'} rounded rounded-tr-none rounded-tl-none p-4 text-justify text-left text-secondary mb-5 bg-gray`}>

          <div className="relative overflow-hidden mx-4">
            <div className="w-full mx-auto">
              <ul className="grid items-center col-gap-8 row-gap-10 pb-6 pt-4">
                {content && content.map((item , i) => {
                  return (
                    <li key={i}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                            <span className="fa-stack fa-lg">
                              <i className="fa fa-certificate fa-stack-1x"></i>
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 text-secondary font-bold">{item.module_title}</h3>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
