# QRgenerator App
This is a simple QR generator app built using Node.js and Express.js. It allows users to generate QR codes by providing a URL. The generated QR code is saved as an image file and can be downloaded by the user.

##Installation
To run the QR generator app, please follow these steps:

1.Make sure you have Node.js installed on your system.

2.Clone or download the repository to your local machine.

3.Open a terminal or command prompt and navigate to the project directory.

4.Install the dependencies by running the following command:

```bash
$  npm install
```
##Usage
Once the installation is complete, you can start the app by running the following command:
```bash
$  npm start
```
The server will start running on port 3000. Open your web browser and visit http://localhost:3000 to access the QR generator app.

##App Workflow:
1.When you access the app in your browser, you will see a form with a single input field and a "Generate QR" button.
2.Enter the URL for which you want to generate a QR code in the input field.
3.Click the "Generate QR" button.
4.The app will generate a QR code based on the provided URL and save it as an image file (newqr.png).
5.After a short delay, the app will display the generated QR code on the page for you to download.
##Dependencies

This app relies on the following dependencies:

- Express.js - A web application framework for Node.js.
- qr-image - A QR code generator library.
- body-parser - A middleware to handle HTTP request bodies.
- These dependencies will be automatically installed when you run the npm install command as mentioned in the installation steps.

##License
This project is licensed under the MIT License.

Feel free to modify and enhance the app as per your requirements. Happy generating QR codes!


