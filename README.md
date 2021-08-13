# pik-sms

project `https://pik-broker.ru`

AIM: Check SMS verification form

## Check list

On SMS verification page:

- Make sure login is successful with correct code only

- Check that the "Resend sms" button becomes available
after a timeout = 120 sec

- Check that "Change phone number" button redirects to
login page

- Check that only numeric characters can be entered in code input field

- Make sure that validation error is displayed for invalid SMS-code

- Make sure that close button (X icon) closes the form

- Make sure that under input field displayed entered phone number

### run test

`npm install` for setup cypres

`npx cypress run` - start testing in headless mode

`npx cypress open` - open UI interface

