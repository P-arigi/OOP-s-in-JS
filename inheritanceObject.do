What does Object.create do?
Why can't we just do Child.prototype = Parent.prototype? Remember that when we assign objects equal to each other, they are just references. This means that Child.prototype is a reference to Parent.prototype which means that if we add to the Child.prototype, objects created from the Parent.prototype will have access to them, which would be bad!

Child.prototype = Parent.prototype;

// true - this is BAD!
Child.prototype === Parent.prototype;

Child.prototype = Object.create(Parent.prototype);

// false - This is GOOD! We want these to be different
Child.prototype === Parent.prototype;