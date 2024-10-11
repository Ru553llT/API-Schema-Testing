# API-Schema-Testing
an example of API schema testing using this plugin: cypress-ajv-schema-validator
Further details on the whole process mentioned below:
https://dev.to/sebastianclavijo/cypress-ajv-schema-validator-plugin-the-brave-vigilante-for-your-api-contracts-5cfeSetup 


Setup

a new folder and install cypress as usual
Npx cypress open as usual to finish installation and setup folder structure


Run this in Terminal:
npm install cypress-ajv-schema-validator


Add these 2 to the commands.js file:
import 'cypress-ajv-schema-validator'
import validateSchema from 'cypress-ajv-schema-validator'


Write your test script containing this (the schema is in here as shown)


describe('API Schema Validation with Plain JSON', () => {
    it('should validate the user data using plain JSON schema', () => {
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
          "url": {
            "type": "string",
            "format": "uri",
            "description": "URL to the joke, could be an empty string."
          },
          "value": {
            "type": "string",
            "description": "The Chuck Norris joke or fact."
          }
        },
        "required": ["icon_url", "id", "value"],
      }
  
      cy.request('GET', 'https://api.chucknorris.io/jokes/random')
        .validateSchema(schema)
        .then(response => {
          // Further assertions
        });
    });
  });


This will show it as a pass like this:



To see a failed test and the information breakdown of why it failed - run the chuck fail test in your personal repo

Run the test - when it shows the fail details - press F12 over in the browser window to the side and click on console
Rerun the test and expand 


![image](https://github.com/user-attachments/assets/f973a716-cc8f-41fb-b188-4c0b8ce2961a)
