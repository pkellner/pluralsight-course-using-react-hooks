# pluralsight-course-using-react-hooks (COURSE UPDATED AUG 12, 2020)
The master branch here is the latest updates to the Pluralsight course published by Peter Kellner in August of 2020.

![Course Update Notice August 2020](Announcement-Update-August2020a.png)

Our course has had a major update. Every module has changes, 
some more significant then others. The last module that was on 
authentication has been replaced
by one titled **Global App State With useContext and useReducer Like Redux**.

If you want to get to the source code from the original course release 
in May of 2019, you can find it in the branch named
 [Course-First-Release-May-2019](https://github.com/pkellner/pluralsight-course-using-react-hooks/tree/Course-First-Release-May-2019).

To read more about the update [click here](August2020-Update-Notes.md)

One of the most powerful features that become available to you after learning 
how to use React Hooks, specifically the useContext and useReducer hooks, is that you
can combine the two to make a powerful "redux-like" solution for gobally sharing 
data between different parts of your application hierarchy.

I've literally added 30 minutes of 100% new content to the course that covers how to do this. 
I'd suggest you re-watch [Module 5](https://app.pluralsight.com/player?course=using-react-hooks&author=peter-kellner&name=5b710e27-32b2-4f8d-930b-b8ccd29a3ecc&clip=0&mode=live), building custom hooks first if you've not, then module 6, 
[Using useContext and useReducer to Make a Redux-like Global App State](https://app.pluralsight.com/player?course=using-react-hooks&author=peter-kellner&name=95df19ab-9a51-4c3c-bb40-38358c179ee1&clip=0&mode=live)

![Consolidating State Management With Context](m6-clip01-tree-to-global.gif)
![Consolidating State Management With Context](m6-clip02-single-component-to-context.gif)

# Course Code for [Using React Hooks](https://app.pluralsight.com/library/courses/using-react-hooks) on Pluralsight


Before you start, you should install node on either your Windows or Mac computer (those are the two environments that are tested). Below, in
"Getting Started" are the basics to get module 6 up and running as fast as possible.


*[A new React Course from Peter Kellner "Designing React Components"](https://app.pluralsight.com/library/courses/react-components-designing)*

## Course Description

React versions 16.8 and higher, include React Hooks which solve several problems that went unaddressed in previous versions. React Hooks provide a direct API to React concepts you already know about. Those concepts include props, state, context, refs and lifecycle events. React Hooks are designed for use in React Functional Components where previously there was no good way to manage state or lifecycle events.

In this course, you’ll learn how to use the top seven React Hooks as well as gain the knowledge and experience necessary to build your own customized composite Hook. Along the way, you’ll pick up techniques you can use building real world web apps that include how React Hooks can help you with REST services, reducers, authentication and more.

When you are finished with this course, you’ll confidently be able to combine functional components with React Hooks to build first class React apps. Those apps can be written completely with functional components and React Hooks.


## Getting Started
1. **Install [Node 12.16.3 with NPM 6.14.4](https://nodejs.org)**. 
2. **Clone this repository.** - `git clone https://github.com/pkellner/pluralsight-course-using-react-hooks` or [download the zip](https://github.com/pkellner/pluralsight-course-using-react-hooks/archive/master.zip)
3. **Set your default directory to which module you want (example: cd 02-Basic-React-Hooks-useState-useRef-useEffect - `cd m6-add-rest-data-to-server-side-rendering`
4. **Install Node Packages with Dependencies.** - `npm install`
5. **Install [this chrome extension](https://chrome.google.com/webstore/detail/nextjs-utilities-extensio/ffcogmoganomoabikgmcmckdgojnpldo) for viewing performance data (optional).**



## Directory Structure Here

Each of the 5 folders here represent one module of the course.  In each folder, there are subfolders that represent the completed code at the end of each clip. Where this is no clip reference, either there is no code in that clip or nothing changed from the previous clip.

Once in a clip directory, the easiest way to test the app is to first install the packages by typing at the root of that directory (in a terminal window or DOS prompt)

`npm install`

Then, do run the app you just need type

`npm run dev`

And that will launch the web server on port 3000 where you can browser to it at the url: `http://localhost:3000`

Starting in module 5, you'll need to launch the `json-server` to simulate a REST server.  To do that, you enter the command at a terminal or DOS prompt:

`npm run json-server`

## Background

This course uses the Next.js framework as a demonstraton vehicle for React Hooks. If you want to know more about Next.js you should watch my other course on Pluralsight titled "Building Server-side Rendered React Apps for Beginners". You can find it [here](https://www.pluralsight.com/courses/building-server-side-rendered-react-apps-beginners). 

## Repo or Course Issues

If you find any problems or issues, feel free to post it as an issue here at this forum and I will look into it as soon as I can. You can also contact me directly at http://peterkellner.net/contact/ 

I hope you enjoy the course!











