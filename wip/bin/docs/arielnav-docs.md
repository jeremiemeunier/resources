<h2>HTML Structure</h2>

```html
<nav data-ariel-nav='{ "chargingDock": "" }'>
  <ul>
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 4</a></li>
  </ul>
</nav>
      
...
      
<div data-arielnav-docker></div>
```

<table>
  <tr>
    <th>Attributs</th>
    <th>Type</th>
    <th>Valeurs</th>
    <th>Explications</th>
  </tr>
  <tr>
    <td rowspan="3"><code>chargingDock</code></td>
  </tr>
  <tr>
    <td><b>required</b></td>
    <td>HTML Selector</td>
    <td><code>#my_element</code> or  <code>.my-element</code> or <code>[data-my-element]</code></td>
  </tr>
  <tr>
    <td>optional*</td>
    <td colspan="2">* Optional if exist a <code>data-arielnav-docker</code> in the DOM</td>
  </tr>
</table>
