/// <reference types="cypress" />

describe('API Requests - GET', () => {

  it('Should recieve a 200 status response', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).its('status').should('eq', 200)
  })

  it('Should last no more than 1 second', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).then((res) => {
      expect(res.duration).to.be.lessThan(1000)
    })
  })

  it('Should have the correct headers', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).its('headers').its('content-type').should('include', 'application/json')
  })

  it('Should return an array', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).then((res) => {
      expect(res.body).to.be.an('array')
    })
  })

  it('Should have a bookingid as property for each one', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).then((res) => {
      res.body.forEach(item => {
        expect(item).to.have.property('bookingid').that.is.a('number')
      })
    })
  })

  it('Should return at least 1 result', () => {
    cy.request({
      method: 'GET',
      url: '/booking',
    }).then((res) => {
      expect(res.body).to.not.be.empty
    })
  })

  it.only('Should return a specific Id', () => {
    cy.fixture('bookings').then((bookingData: any) => {
      for (let i = 1; i < 4; i++) {
        cy.request({
          method: 'GET',
          url: `/booking/${i}`,
        }).then((res) => {
          const { firstname, lastname, totalprice, depositpaid } = res.body
          expect(firstname).to.equal(bookingData[i - 1].firstname)
          expect(lastname).to.equal(bookingData[i - 1].lastname)
          expect(totalprice).to.equal(bookingData[i - 1].totalprice)
          expect(depositpaid).to.equal(bookingData[i - 1].depositpaid)
        })
      }
    })
  })

});