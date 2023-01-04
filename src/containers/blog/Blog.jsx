import React from 'react'
import "./blog.css"
import { Article } from "../../components"
import { blog1, blog2, blog3, blog4, blog5 } from "./imports"

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
        <Article imgURL={blog1} date="Sep 06, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgURL={blog2} date="Sep 06, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgURL={blog3} date="Sep 06, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgURL={blog4} date="Sep 06, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgURL={blog5} date="Sep 06, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog