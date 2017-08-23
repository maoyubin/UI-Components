# CSS Circle Fly-Out Navigation

This is circular fly-out CSS navigation menu component which I learned from Nick Salloum. Thanks to his for providing this brilliant example and just make some optimized based on the original project.
The component makes heavy use of Sass, and also some Compass math helper functions. Sass is compiled via Gulp, and using Sass makes the component easily configurable.  
Using the Gulp workflow is hugely beneficial, because it makes the component much easier to work with and customise. 


[View the demo here.](http://)

## Usage

To use, include the CSS and JavaScript in your app. Markup your menu like this:

```html
<nav class="c-circle-menu js-menu">
  <button class="c-circle-menu__toggle js-menu-toggle">
    <span>Toggle</span>
  </button>
  <ul class="c-circle-menu__items">
    <li class="c-circle-menu__item">
      <a href="#" class="c-circle-menu__link">
        <img src="path/to/icon" alt="">
      </a>
    </li>
    <!-- more items here -->
  </ul>
  <div class="c-circle-menu__mask js-menu-mask"></div>
</nav>
```

Then, include your script like this:

```html
<script src="path/to/circleMenu.min.js"></script>
```

Finally, you can initialize the menu like this:

```html
<script>
  var el = '.js-menu';
  var myMenu = cssCircleMenu(el);
</script>
```

The default number of menu items is 5. To use a different number of items, you'll have to [configure and build with Sass and Gulp.](#configuring-and-building-with-sass-and-gulp)

### Out of the box usage

You can use this component out of the box by downloading the uncompressed or compressed files from the `css/` directory.

### Use as a Bower component

The component is available as a bower package, and you can import it by running the following command:

```
bower install css-circle-menu
```

## Configuring and Building with Sass and Gulp

The component is built with Sass (SCSS) and uses a JavaScript module as well to handle events. Everything gets compiled and built with Gulp. To develop and compile from gulp, just run:

```
npm install
gulp
```

To watch files during development, run

```
gulp watch
```
