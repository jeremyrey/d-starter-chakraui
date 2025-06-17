# CLI Login

```
storyblok logout
storyblok login
```

# Populate space

Uploads bloks and some starter pages

```
./scripts/init_space <SPACE_ID> <STARTER_NAME>
```

# Blocs Storyblok utilisés

Ce projet utilise les blocs Storyblok suivants, chacun correspondant à un composant React dans le dossier `components/` ou `components/blog/` :

| Nom du bloc | Composant associé | Description rapide                     |
| ----------- | ----------------- | -------------------------------------- |
| container   | `Container`       | Conteneur principal, structure de page |
| flex        | `Flex`            | Conteneur flexbox                      |
| box         | `Box`             | Boîte générique                        |
| text        | `Text`            | Bloc de texte riche                    |
| page        | `Page`            | Page principale                        |
| image       | `Image`           | Image simple                           |
| link        | `Link`            | Lien hypertexte                        |
| hstack      | `HStack`          | Stack horizontal                       |
| vstack      | `VStack`          | Stack vertical                         |
| button      | `Button`          | Bouton interactif                      |
| heading     | `Heading`         | Titre (h1-h6)                          |
| center      | `Center`          | Centrage de contenu                    |
| drawerBlock | `DrawerBlock`     | Tiroir latéral (drawer)                |
| icon        | `Icon`            | Icône personnalisée                    |
| googleMaps  | `Maps`            | Carte Google Maps                      |
| tabs        | `Tabs`            | Onglets                                |
| form        | `Form`            | Formulaire                             |
| input       | `Input`           | Champ de saisie                        |
| textarea    | `Textarea`        | Champ de texte multiligne              |
| video       | `Video`           | Vidéo                                  |
| carousel    | `Carousel`        | Carrousel d'éléments                   |
| select      | `Select`          | Liste déroulante                       |
| checkbox    | `Checkbox`        | Case à cocher                          |
| dropdown    | `Dropdown`        | Menu déroulant                         |
| accordeon   | `Accordeon`       | Accordéon                              |
| blogTitle   | `Title` (blog)    | Titre d'article de blog                |
| blogContent | `Content` (blog)  | Contenu d'article de blog              |
| blogList    | `List` (blog)     | Liste d'articles de blog               |
| blogExcerpt | `Excerpt` (blog)  | Extrait d'article de blog              |
| blogCover   | `Cover` (blog)    | Image de couverture d'article de blog  |

Chaque bloc est déclaré dans le fichier `_app.js` et peut être utilisé dans Storyblok pour construire des pages dynamiques.
