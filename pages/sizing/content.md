# Sizing elements 

#### Sizing based on available space
Containers can take up all or a portion of available space

#### Grow or Shrink
Grow and shrink values are **relative to other siblings**

````css
.child-1 {
  flex-grow: 1;
}

.child-2 {
  flex-grow: 2;
}
````

#### Basis (minimum size)
Containers can set a flex-basis that defines its minimum size along the major axis before grow and shrink is set

````css
.child-1 {
  flex-basis: 500px; 
}

// When flex-grow and flex-shrink are 0
````