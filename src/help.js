'use strict'

export const displayHelp = () => {
    console.log('')
    console.log('Argument      | Description')
    console.log('---------------------------------------------------------------------------')
    console.log('')
    console.log('--gallery     | The imgur gallery to pull images from e.g. --gallery r/funny')
    console.log('')
    console.log('--output      | The path to save the images to e.g. --output c:\\pictures\\')
    console.log('')
    console.log('--pageNumber  | The page of the gallery to pull images back from e.g. --pageNumber 3')
    console.log('')
    console.log('--help        | Displays this help screen')
}