<h2>Utilisation de popover.js</h2>

<h3>Intégration</h3>

<ul>
  <li>Code JS : https://source.ebear.fr/ext/js/ui/popover.js</li>
  <li>Code CSS : https://source.ebear.fr/ext/css/popover.css</li>
</ul>

<p>Ce script permet de faire apparaître des bulles d'information sur les éléments de votre choix et ce de manière très simple.</p>
<p>Le script va sélectionner tout les éléments qui ont l'attribut <code>data-popover</code> et parcourir les paramètres pour ajouter les événements qu'il faut.</p>

<h3>data-popover</h3>

<pre><code>data-popover='{ "title": "", "content": "", "position": "", "stateStart": "", "spes": "", "theme": "" }'</code></pre>

<table>
  <tr>
    <th>Attributs</th>
    <th>Type</th>
    <th>Valeurs</th>
    <th>Explications</th>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>optional</td>
    <td>text</td>
    <td>Contenu du titre</td>
  </tr>
  <tr>
    <td><code>content</code></td>
    <td>optional</td>
    <td>text</td>
    <td>Contenu du texte du popover (HTML gérer)</td>
  </tr>
  <tr>
    <td rowspan="4"><code>position</code></td>
    <td rowspan="4">required</td>
    <td>top</td>
    <td>Positionne le bloc popover au dessus de l'élément parent</td>
  </tr>
  <tr>
    <td>left</td>
    <td>Positionne le bloc popover à la gauche de l'élément parent</td>
  </tr>
  <tr>
    <td>right</td>
    <td>Positionne le bloc popover à la droite de l'élément parent</td>
  </tr>
  <tr>
    <td>bottom</td>
    <td>Positionne le bloc popover en dessous de l'élément parent</td>
  </tr>
  <tr>
    <td rowspan="3"><code>stateStart</code></td>
    <td rowspan="3">required</td>
    <td>open</td>
    <td>Affiche le bloc à l'éxecution du script</td>
  </tr>
  <tr>
    <td>onHover</td>
    <td>Affiche le bloc au survol de l'élément parent</td>
  </tr>
  <tr>
    <td>onClick</td>
    <td>Affiche/Cache le bloc au clic de l'élément parent</td>
  </tr>
  <tr>
    <td rowspan="2"><code>spes</code></td>
    <td rowspan="2">optional</td>
    <td>up</td>
    <td>Permet d'afficher un popover au-dessus des autres</td>
  </tr>
  <tr>
    <td>bigger</td>
    <td>Ajoute la classe <code>bigger</code> au popover</td>
  </tr>
  <tr>
    <td rowspan="2"><code>theme</code></td>
    <td rowspan="2">optional</td>
    <td></td>
    <td>Affiche un popover avec le theme par défaut</td>
  </tr>
  <tr>
    <td>dark</td>
    <td>Affiche un popover avec le theme sombre (ajout de la class <code>drk</code>)</td>
  </tr>
</table>

<p>Lorsque vous mettez un titre à votre popover, la classe <code>with-title</code> est ajouter, ce qui vous permet si vous voulez de mettre la fleche de la couleur du titre !</p>
