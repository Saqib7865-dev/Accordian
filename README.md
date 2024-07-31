# Introduction

I have created an accordian which provides the functionalities of single selection and multi selection.

# React concepts used

I have used the following concepts for this project:
1- Components
2- JSX
3- Hooks (useState hook)
4- Conditional Rendering

# Components

I created a components folder inside which I created an accordian folder which contains index.jsx file, data.js file and a style file. Data file is exporting data as default. index.jsx file is exporting Accordian components/function to as default and style file is styling the accordian component.

# JSX

JSX is a combination of HTML and Javascript.

# Hooks

I have used multiple useState hooks to keep track of different states and rendering as per condition. Followings are the hooks used in this project:

1. selected and setSelected for keeping track of item selected by the user. It is used for single selection.
2. enableMultiSelection and setEnableMultiSelection for keeping track of whether the user wants to enable multi selection or not. It is used with a button.
3. multiple and setMultiple for keeping track of items selected by the user. It uses an array to store ids.

# Conditional Rendering

Conditional rendering is used to render content conditionally. It is used at multiple points. First of all, if data file is exporting some data, then Questions and other things will be displayed otherwise it will display only "Data not found". Then it conditionally check whether the user wants to view single item or multiple items.

# Personal growth

While creating this project, I was able to practice and solidify a lot of concepts. I faced errors and resolved them. I was able to witness how JSX, hooks and conditional rendering work.