# Flex cheat sheet

Here are some of the essentials for how to get those out of flex. This is quite opinionated, but I've found that not everything is absolutely essential

## Making a container flex

Flex is a value for the display property. To make an element use the flexible box layout

````css
.flexible {
  display: flex;
}
````

## Direction

Direction is a core concept in flex. Containers can either flow **horizontally (row)** or **vertically (column)**

````css
.flexible {
  flex-direction: row | column | row-reverse | column-reverse;
}

// Defaults
// flex-direction: row
````

## Alignment

When it comes to alignment, knowing how **justify-content** and **align-items** is essential

> *justify-content* aligns along the **main axis**<br/>
> *align-items* aligns along the **minor axis**

The main values of these properties that work in most situations are:
* **flex-start**
* **center**
* **flex-end**

````css
.flexible {
  justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
  align-items: flex-start | center | flex-end | baseline | stretch;
}

// Defaults
// justify-content: flex-start
// align-items: stretch
````

Other properties to handle alignment at the element level are available: **align-self** and **justify-self**, but I usually find it easier to handle alignment at the container level

## Sizing

When it comes to sizing, I find that there are two main questions to ask yourself:

* Should the container take up all available space?
* Should the container size to contents?

In my experience, these two situations cover an overwhelming majority of cases, so the following values can usually be used:

````css
.flexible {
  flex: 1 1 auto; // A container that grows and shrinks to fill available space
}

.inflexible {
  flex: none; // A container that sizes to content
}

// The flex property is shorthand for: flex-grow flex-shrink flex-basis

// Defaults
// flex-grow: 1
// flex-shrink: 0
// flex-basis: auto
````

Sometimes you might need to have containers that have relative sizing, in these cases you can use **flex-grow** and **flex-shrink**, but I often find that most of these occasions benefit from only having one container that is flexible, and the others size to content:

````html
<!-- Sidebar / Content / Sidebar -->
<div>
  <div class="flex-none">size to content</div>
  <div class="flex-1">flexible</div>
  <div class="flex-none">size to content</div>
</div>
````

````html
<!-- Header / Content -->
<div>
  <div class="flex-none">size to content</div>
  <div class="flex-1">flexible</div>
</div>
````

## Order

Usually flex elements appear in the order that they're declared in, but sometimes you might want to reorder them. Here's an example:

````html
<div class="flexible">
  <div>child 1</div>
  <div>child 2</div>
  <div>child 3</div>
</div>
````

````css
.flexible {
  display: flex;
  flex: 1 1 auto;

  > div {
    // These are children in that flexible container
    // Lowest order appears first
    // If multiple items have the same order, the item declared first appears first
    // Affected by flex-direction

    &:first-child {
      order: 2;
    }
    &:nth-child(2) {
      order: 5;
    }
    &:last-child {
      order: 1;
    }
  }
}
````

This code will change the arrangement of the child divs so that this is the effective visual result:

````
child 3
child 1
child 2
````