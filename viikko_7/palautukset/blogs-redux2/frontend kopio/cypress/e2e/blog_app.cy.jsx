const user = {
  name: 'Poot Woot',
  username: 'poot',
  password: 'poot'
}

describe('Blog app', function () {
  /**
   * Ennen testien ajoa kutsutaan osoitetta ja avataan sen.
   */
  beforeEach(function () {
    //cy.visit('http://localhost:5173')
    cy.visit('')
  })

  /**
   * Funktio testaa että Blog applikaation sisäänkirjautuminen aukeaa. Tehtävä 5.17.
   */
  it('Login form is shown', function () {
    cy.contains('Open application').click()
  })

  describe('Login', function () {

    /**
     * Funktio testaa että applikaatiolla voi kirjauta sisään jos tunnukset ovat oikeat. Tehtävä 5.18.
     */
    it('succeeds with correct credentials', function () {
      cy.visit('')
      cy.contains('Open application').click()
      cy.get('#inputUsername').type('root')
      cy.get('#inputPassword').type('sekret')
      cy.get('#buttonLogin').click()
      cy.contains('User: root is logged in')
    })

    /**
     * Funktio testaa että applikaatiolle ei voi kirjautua tunnuksilla jotka eivät ole tietokannassa. Tehtävä 5.18.
     */
    it('fails with wrong credentials', function () {
      cy.visit('')
      cy.contains('Open application').click()
      cy.get('#inputUsername').type('poot')
      cy.get('#inputPassword').type('toop')
      cy.get('#buttonLogin').click()
      cy.contains('Wrong credentials')
    })

  })

  /**
   * Testit jotka tehdään sisäänkirjautuneella käyttäjälle.s
   */
  describe('when logged in', function () {
    beforeEach(function () {
      //cy.visit('')
      cy.contains('Open application').click()
      cy.get('#inputUsername').type('root')
      cy.get('#inputPassword').type('sekret')
      cy.get('#buttonLogin').click()
    })

    /**
     * Funktio testaa että sisäänkirjautunut käyttäjä voi lisätä blogin. Tehtävä 5.19.
     */
    it('A blog can be created - 0 likes', function () {
      cy.contains('Create new blog').click()
      cy.get('#inputBlogTitle').type('TEST TITLE - WILL BE DELETED')
      cy.get('#inputBlogAuthor').type('test author')
      cy.get('#inputBlogUrl').type('url.com')
      cy.get('#inputBlogLikes').type('2')
      cy.get('#submitNewBlog').click()
      cy.contains('TEST TITLE - WILL BE DELETED')
    })

    /**
     * Funktio testaa että sisäänkirjautunut käyttäjä voi lisätä blogin. Tehtävä 5.19.
     */
    it('A blog can be created - 50 likes', function () {
      cy.contains('Create new blog').click()
      cy.get('#inputBlogTitle').type('TEST TITLE - WILL BE DELETED 50')
      cy.get('#inputBlogAuthor').type('test author 50')
      cy.get('#inputBlogUrl').type('url.com/50')
      cy.get('#inputBlogLikes').type('50')
      cy.get('#submitNewBlog').click()
      cy.contains('TEST TITLE - WILL BE DELETED 50')
    })

    /**
     * Funktio testaa että like määrää voi lisätä. Tehtävä 5.20.
     */
    it('A blog can be liked', function () {

      cy.get('#buttonView0').click()
      cy.get('#labelLikes0').invoke('text').then(parseInt).as('a1')
      cy.get('#buttonLike0').click().wait(500)

      cy.get('#labelLikes0').invoke('text').then(parseInt).as('a2')

      cy.then(function () {
        expect(this.a1, 'compare scores').to.be.below(this.a2)
      })
      cy.get('#buttonView0').click()
    })

    /**
     * Funktio testaa että blogit ovat oikeassa järjestyksessä tykkäysten mukaan. Tehtävä 5.23.
     */
    it('Check that blogs are ordered by amount likes', function () {
      let likes = []

      //Avataan kaikki näkymät.
      cy.get('[id^=buttonView]').each(($button) => {
        $button.click()
      })

      //Laitetaan tykkäykset taulukkoon.
      cy.get('[id^=labelLikes]').each(($label) => {
        likes.push(Number($label.text()))
      })
      let inOrder = true
      //Tarkistetaan että taulukko on suuruusjärjestyksessä (100 -> 1).
      if(likes.length > 0)
      {
        for (let i = 0; i < (likes.length - 1); i++)
        {
          if (likes[i] > likes[i+1])
          {
            inOrder = false
            break
          }
        }
      }
      cy.expect(inOrder).to.equal(true)

      //Suljetaan kaikki näkymät.
      cy.get('[id^=buttonView]').each(($button) => {
        $button.click()
      })
    })

    /**
     * Funktio testaa että itse luoman blogin voi poistaa. Poistaa molemmat blogit. Tehtävä 5.21.
     */
    it('A blog can be deleted', function () {
      //Haetaan kaikki blogit jotka sisältävät titlen: 'TEST TITLE - WILL BE DELETED' jota käytetään testiblogeissa.
      cy.get('[id^=divBlogMain]').filter(':contains("TEST TITLE - WILL BE DELETED")').then(($option) => {
        cy.wrap($option).as('divs')
      })
      //Haetaan kaikki view buttonit (ja klikataan niitä) testiblogien sisältä.
      cy.get('@divs').each(($el, index, $list) => {
        cy.wrap($el).find('button').contains('view').click()
      })

      cy.get('[id^=divBlogMain]').filter(':contains("TEST TITLE - WILL BE DELETED")').then(($option) => {
        cy.wrap($option).as('divs2')
      })

      cy.get('@divs2').each(($el, index, $list) => {
        cy.wrap($el).find('button').contains('delete').click()
        cy.wait(250)
      })
      //Tarkistetaan että jäljelle on jäänyt vain halutut blogit.
      cy.get('[id^=divBlogMain]').should('have.length', 3)
    })

    /**
     * Funktio testaa että root user ei voi poistaa blogia jota hän ei ole luonut. Tehtävä 5.22.
     */
    it('A blog CAN NOT BE deleted', function () {
      cy.get('#buttonView0').click()
      cy.get('#buttonDelete0').should('not.exist')
    })

    /**
     * Funktio kirjautuu ulos.
     */
    it('Logout', function () {
      cy.get('#buttonLogout').click()
      cy.get('#divLogin').should('exist')
    })
  })
})
