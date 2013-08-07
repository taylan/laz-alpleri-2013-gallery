Between the 21st and 28th of July 2013, I went on an awesome hiking trip around the [Kackar Mountains](http://en.wikipedia.org/wiki/Kaçkar_Mountains).
Many photographs were taken and were geotagged.

I'm making a simple gallery with [AngularJS](https://github.com/angular/angular.js), [Bootstrap 3](https://github.com/twbs/bootstrap) and the [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) so that I can share the photographs and the places I've been with my friends, and the people who were with me during the trip.

**How to use the [Grunt](https://github.com/gruntjs/grunt) tasks** (this is mainly here so I'll remember how to use Grunt tasks later since I have the memory of a fish)

- During development use `grunt watch`. Grunt will watch changes to files under the `css/` and `js/` directories and will update the `css/styles-combined-x.y.z.css` and `js/scripts-combined-x.y.z.js` files.
- Before deployment first use `grunt bump` to bump the application version. 
- Then use `grunt pre-push`. This will first update the version references in `app.yaml` and `static/index.html` files. It will then clean previously generated bundles, and will create new bundles using the latest version number.
- Then you can push to git and/or to App Engine.
