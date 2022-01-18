# Storybook Generator CLI
This library is meant to serve as a small override of the existing Angular CLI in order to allow for more comfortable use of Storybook.
It does so by generating the necessary file, along with a small skeleton to be filled out after the component has its data. 

## How To Use
In order to use this you must simply run the command:  
`npm install --save-dev storybook-generator-cli`  
After this, we must register this within our angular.json, which can be done by running the following command:  
`ng config cli.defaultCollection storybook-generator`  

And that's it, all done.
Happy coding.