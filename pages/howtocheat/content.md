# How to cheat at flexbox

Here are some tips on how to get a ton of power out of flex without needing to know absolutely everything

## Alignment

When it comes to alignment, knowing how **justify-content** and **align-items** is pretty essential

> *justify-content* aligns along the **main axis**

> *align-items* aligns along the **minor axis**

The main values of these properties that work in most situations are:

````css
flex-start
center
flex-end
````

## Sizing

When it comes to sizing, I think there are two main forms that containers usually take

* Should the container take up all available space
* Should the container size to contents

With that said, the two main combinations of grow, shrink and basis I use all the time are:

````css
flex: 1 1 auto;  // A container that fills all available space
flex: none;      // A container that sizes to content
````

Sometimes you might need to have containers that have relative sizing, but I often find that most of these occasions benefit from only having one container that is flexible, and the others size to content:

````html
<!-- Sidebar / Content / Sidebar -->
<div>
  <div class="flex-none">size to content</div>
  <div class="flex-1">flexible</div>
  <div class="flex-none">size to content</div>
</div>

<!-- Header / Content -->
<div>
  <div class="flex-none">size to content</div>
  <div class="flex-1">flexible</div>
</div>
````

## Composition Hints

### Simplify the DOM
* Important for performance and maintainability

### Outside-in
* Start from the outside container first and work your way inwards
* Doing it this way can greatly simplify sizing issues
* Identify rows and columns and separate into containers

### Squash Layouts
* The squash (patent pending) method of layout uses empty elements as spacers to squash containers that size to content into areas they should go
* It's absolutely fine to use align-self and justify-self to do this

````
[] = size to content
{} = flexible

[------] {-------------------------------} [------]

{-------------------------------} [------] [------]

[------] [------] {-------------------------------}
````