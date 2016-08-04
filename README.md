# shrink-to-viewport
> Shrinks the target element to fit the viewport

## Usage

```
<div id="test"></div>

<script>
  (function () {
    var elementId = 'test';
    var elementWidth = 800;
    var elementHeight = 600;
    var shrinkOnViewportResize = true;

    shrinkToViewport(elementId, elementWidth, elementHeight, shrinkOnViewportResize);
  })();
</script>
```

## License

**shrink-to-viewport** is licensed under the [MIT license](http://opensource.org/licenses/MIT).
For the full license, see the `LICENSE` file.