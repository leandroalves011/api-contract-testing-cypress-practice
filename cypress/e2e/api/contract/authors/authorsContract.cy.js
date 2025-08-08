import getAuthorsById from '../../../../schemas/authors/getAuthorsById.json'

describe('Contrato no módulo Authors', () => {
    context('Validando contratos de sucesso', function () {
        it('deve validar status e schema', () => {
            cy.request('/api/v1/Authors').then((response) => {
                expect(response.status).to.eq(200)
                cy.validateSchema(getAuthorsById, response.body)
            })
        })
    })
})