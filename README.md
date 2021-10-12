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

`npm install` for cypress setup

`npx cypress run` - start testing in headless mode

`npx cypress open` - open UI interface

![image](https://user-images.githubusercontent.com/27958783/129347507-00e8e93f-08fd-4768-862b-986dd71f0b56.png)



https://user-images.githubusercontent.com/27958783/129347566-d0e4c248-4b94-43f7-af9c-4edf50db9c8a.mp4


