describe('API Schema Validation with Plain JSON', () => {
  it.skip('should validate the user data using plain JSON schema', () => {
    const schema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Chuck Norris Joke",
      "type": "object",
      "properties": {
        "icon_url": {
          "type": "string",
          "format": "uri",
          "description": "URL of Chuck Norris' avatar or icon."
        },
        "id": {
          "type": "string",
          "description": "Unique identifier for the joke."
        },
        "example": {
          "type": "boolean",
          "description": "Example of missing property"
        },
        "url": {
          "type": "number",
          "format": "uri",
          "description": "URL to the joke, could be an empty string."
        },
        "value": {
          "type": "string",
          "description": "The Chuck Norris joke or fact."
        }
      },
      "required": ["icon_url", "id", "example", "value"],
    }

    cy.request('GET', 'https://api.chucknorris.io/jokes/random')
      .validateSchema(schema)
      .then(response => {
        // Further assertions
      });
  });
});
 