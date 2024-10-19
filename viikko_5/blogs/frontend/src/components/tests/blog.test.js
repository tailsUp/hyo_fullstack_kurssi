import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from '/Users/sorsa/Desktop/github/hyo_fullstack_kurssi/viikko_5/blogs/frontend/src/components/Blog.jsx'

test('renders content', () => {
  const blog = {
    title: 'TestTitle',
    author: 'TestAuthor',
    url: 'test.url.com',
    likes: 2
  }

  /*
    screen.debug()
    const { container } = render(<Note note={note} />)
    const div = container.querySelector('.note')
    expect(div).toHaveTextContent('Component testing is done with react-testing-library')
  */

  render(<Blog blog={blog} />)

  const element = screen.getByText('TestTitle TestAuthor')
  expect(element).toBeDefined()
})
