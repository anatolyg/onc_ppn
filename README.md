ONC Digital Privacy Notice Challenge Entry
=======

<img src="folders.png"/> 

Patient Privacy Notice for ONC Digital Privacy Notice Challenge entry for Anatoly Geyfman.

## Introduction

This is a stand-alone application that contains all four patient privacy notices:

 * Provider in English
 * Provider in Spanish
 * Health Plan in English
 * Health Plan in Spanish
 
This application can be easily embedded into any angular app by simply importing its module `oncPpnApp`. This application uses modern web technologies like Angular and Bootstrap to create a usable, fast and most importantly, mobile-friendly way to present patient notices.

## Usability and Mobile-first presentation

This entry was written to be mobile-first. What that means is that the application looks great and works well on any device that has a web browser - iPhone, Android and Windows Phone. More importantly, this application adjusts its presentation based on the device resolution, so that no matter the size of the screen, the notice is usable, easy to read and scan, and the links work as designed.

Print usability has also been taken into account. Each notice in this app is printer-friendly, and ensures that items are legible, hidden items are printed (additional details, for example) and that timestamps are printed on both the top and bottom of the pages.

## Accessibility

This web application follows best practices for creating accessible web applications that can be used by persons with poor or no vision. Care has been taken to create the HTML markup semantically, so that the emphasis is correctly placed on words, so that lists are correctly output by screen readers and so that visual design in no way impacts readability and accessibility of the content. 

Example:

<img src="fang_output.png"/>


## Developer instructions

This application uses a fairly standard Yeoman workflow. First, checkout the application using git

    git clone git@github.com:anatolyg/onc_ppn.git
    
Go to the folder where the application is checked out and install the prerequisites. *Note: you should have node.js, grunt and bower installed already, please [see here](http://yeoman.io/index.html) for more info*.

    npm install && bower install
    
You can now run the application. *Note: the default port that the built-in grunt server runs on is 9000, ensure it's open*.

    grunt serve
    
Go to `http://localhost:9000` in your browser to view it.

### Organization

There are four main pages that have the content for the four patient privacy notices. These are located in the `app/views` folder. The four pages are currently driven by two controllers. One controller has content and contact info for both provider notices, while the second controller handles the health plan notices. You can make each have its own controller by remapping the routing in `app/scripts/app.js` to link the appropriate view to the new controller.

### Testing

Included with this application is a way to test responsive layouts in your browser. When the application is running, simply point 
   


