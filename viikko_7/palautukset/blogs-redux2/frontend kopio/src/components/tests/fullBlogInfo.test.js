// 5.13: blogilistan testit

/*
Tee testi, joka varmistaa että blogin näyttävä komponentti renderöi blogin titlen ja authorin
mutta ei renderöi oletusarvoisesti urlia eikä likejen määrää. Mikäli toteutit tehtävän 5.7,
niin pelkkä titlen renderöinnin testaus riittää.
*/

import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FullBlog from '/Users/sorsa/Desktop/github/hyo_fullstack_kurssi/viikko_5/blogs/frontend/src/components/FullBlogInfo'

describe('Testing that bloglist view is ok (FullBlogInfo)', () => {
  let container
  const mockHandler = jest.fn()
  beforeEach(() => {

    const user1 = {
      username: 'sameName'
    }

    const user2 = {
      username: 'sameName'
    }

    const blog1 = {
      title:    'Test title',
      author:   'Test author',
      url:      'url.com',
      likes:    '2',
      user:     user1
    }

    container = render(<FullBlog user={user2} b={blog1} nro="1" deleteBlogs={() => void 0} updateOldBlog={mockHandler}/>).container
  })

  /**
   * Testi tarkistaa että blogi tulee näytölle. 5.13.
   */
  test('Check that blog appears on screen', () => {
    screen.getByText('Test title')
  })

  /**
   * Testi painaa view nappulaa painamalla divin divBlogRest näkyvyys muuttuu. 5.14.
   */
  test('Check that blog opens when button is clicked', async () => {
    let div = screen.getAllByTestId('divBlogRest1')
    expect(div[0]).toHaveStyle('display: none')
    const button = screen.getByTestId('buttonView1')
    const user = userEvent.setup()
    await user.click(button)
    expect(div[0]).toHaveStyle('display: block')
  })

  /**
   * Funktio tarkistaa että divin aukaeamisen jälkeen sivulta löytyy halutut tekstit. 5.14.
   */
  test('Check that blog appears on screen', async () => {
    const button = screen.getByTestId('buttonView1')
    const user = userEvent.setup()
    await user.click(button)
    screen.getByText('sameName')
    screen.getByText('url.com')
    screen.getByText('2')
  })

  /**
   * Testi tarkistaa että "Like" buttonia painetaan kaksi kertaa. 5.15.
   */
  test('Check that blog appears on screen', async () => {
    const button = screen.getByTestId('buttonLike1')
    const user = userEvent.setup()

    await user.click(button)
    await user.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})