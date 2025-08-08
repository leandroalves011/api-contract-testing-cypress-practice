import Ajv from "ajv";

Cypress.Commands.add("validateSchema", (schema, data) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    throw new Error(
      "❌ Falha na validação do schema: " +
        JSON.stringify(validate.errors, null, 2)
    );
  }

  cy.log("✅ Schema validado com sucesso!");
});
