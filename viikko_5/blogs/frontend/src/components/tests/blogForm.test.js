import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BlogForm from '/Users/sorsa/Desktop/github/hyo_fullstack_kurssi/viikko_5/blogs/frontend/src/components/NewBLog2'
import userEvent from '@testing-library/user-event'

/**
 * Testataan että uuden blogin luomisesta ja submittia painaessa syntyy oikea blogi oikealle titlellä. 5.16.
 */
test('Check that function tries to create a new blog with right title', async () => {
  const user = userEvent.setup()
  const createBlog = jest.fn()
  const testUser = {
    username: 'test'
  }

  render(<BlogForm createBlog={createBlog} user={testUser}/>)

  console.log(screen)

  const input1 = screen.getByTestId('inputBlogTitle')
  const input2 = screen.getByTestId('inputBlogAuthor')
  const input3 = screen.getByTestId('inputBlogUrl')
  const input4 = screen.getByTestId('inputBlogLikes')
  const sendButton = screen.getByText('Add new Blog')

  await user.type(input1, 'testing title...')
  await user.type(input2, 'testing author...')
  await user.type(input3, 'testing url...')
  await user.type(input4, '2')
  await user.click(sendButton)

  expect(createBlog.mock.calls).toHaveLength(1)
  const result = createBlog.mock.calls[0][0].title
  expect(result).toBe('testing title...')
})