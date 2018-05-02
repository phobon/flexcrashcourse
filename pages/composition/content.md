# Composing layouts using flex

#### Simplify the DOM
This is important for performance and maintainability, but mostly to make things easier on you when you're building layout

#### Outside-in
* Start from the outside container first and work your way inwards
* Doing it this way can greatly simplify sizing issues

#### Identify Rows and Columns
Look for elements that **flow in a similar direction** and group them

#### Go low-fidelity
Use a whiteboard/pen and paper to start with and sketch out a layout

#### Squash Layouts
Use empty divs to help do layout when needed

````
[] = size to content
{} = flexible

[------] {-------------------------------} [------]

{-------------------------------} [------] [------]

[------] [------] {-------------------------------}
````